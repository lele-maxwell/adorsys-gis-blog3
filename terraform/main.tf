terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
    null = {
      source = "hashicorp/null"
      version = "3.2.1"
    }
  }
  required_version = ">= 1.6.0"
}

# -----------------------
# Providers
# -----------------------
provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "global"
  region = "us-east-1" # For CloudFront
}

resource "random_id" "bucket_suffix" {
  byte_length = 8
}

# ----------------------------------------------------
# S3 Bucket for Next.js PUBLIC ASSETS
# ----------------------------------------------------
resource "aws_s3_bucket" "blog_assets" {
  bucket = "${var.project_name}-assets"
}

resource "aws_s3_bucket_ownership_controls" "blog_assets_acl" {
  bucket = aws_s3_bucket.blog_assets.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_public_access_block" "blog_assets_pab" {
  bucket                  = aws_s3_bucket.blog_assets.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# ----------------------------------------------------
# S3 Bucket for OpenNext INTERNAL CACHE
# ----------------------------------------------------
resource "aws_s3_bucket" "blog_cache" {
  bucket = "${var.project_name}-cache"
}

# -----------------------
# CloudFront Origin Access Control
# -----------------------
resource "aws_cloudfront_origin_access_control" "blog_oac" {
  name                              = "${var.project_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
  description                       = "OAC for blog Next.js assets bucket"
}

# -----------------------
# Lambda IAM Role and Policies
# -----------------------
resource "aws_iam_role" "lambda_role" {
  name = "${var.project_name}-lambda-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# UPDATED: IAM Policy to allow Lambda to use the CACHE bucket correctly
resource "aws_iam_role_policy" "lambda_s3_cache_policy" {
  name = "${var.project_name}-lambda-s3-cache-policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:GetObject",
          "s3:PutObject"
        ],
        Resource = "${aws_s3_bucket.blog_cache.arn}/*"
      },
      {
        Effect   = "Allow",
        Action   = "s3:ListBucket",
        Resource = aws_s3_bucket.blog_cache.arn
      }
    ]
  })
}

# ----------------------------------------------------------------
# NEW: Build step to copy i18n files into the Lambda source
# ----------------------------------------------------------------
resource "null_resource" "prepare_lambda_source" {
  triggers = {
    # Re-run this copy step whenever the source assets change
    assets_hash = local.assets_hash
  }

  provisioner "local-exec" {
    command = <<EOT
      mkdir -p ../.open-next/server-functions/default/public/i18n && \
      cp -R ../public/i18n/* ../.open-next/server-functions/default/public/i18n/
    EOT
  }
}

# ----------------------------------------------------------------
# Automatically Zip the Lambda Deployment Package
# ----------------------------------------------------------------
data "archive_file" "server_function_zip" {
  # This dependency ensures the files are copied BEFORE zipping occurs.
  depends_on = [null_resource.prepare_lambda_source]

  type        = "zip"
  source_dir  = "../.open-next/server-functions/default"
  output_path = "../server-functions.zip"
}

# -----------------------
# Lambda Function
# -----------------------
resource "aws_lambda_function" "blog_server" {
  function_name = "${var.project_name}-server"
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  role          = aws_iam_role.lambda_role.arn

  filename         = data.archive_file.server_function_zip.output_path
  source_code_hash = data.archive_file.server_function_zip.output_base64sha256
  architectures    = ["x86_64"]
  publish          = true
  timeout          = 30
  memory_size      = 1024

  # UPDATED: Removed the unnecessary HTTP backend URL variable.
  environment {
    variables = {
      NODE_ENV            = "production"
      CACHE_BUCKET_NAME   = aws_s3_bucket.blog_cache.bucket
      CACHE_BUCKET_REGION = var.aws_region
    }
  }
}

resource "aws_lambda_function_url" "blog_server_url" {
  function_name      = aws_lambda_function.blog_server.function_name
  authorization_type = "NONE"
  cors {
    allow_credentials = false
    allow_headers     = ["*"]
    allow_methods     = ["*"]
    allow_origins     = ["*"]
    expose_headers    = ["*"]
    max_age           = 86400
  }
}

# -----------------------
# S3 Bucket Policy (For ASSETS bucket)
# -----------------------
resource "aws_s3_bucket_policy" "blog_assets_policy" {
  depends_on = [aws_s3_bucket_public_access_block.blog_assets_pab]
  bucket     = aws_s3_bucket.blog_assets.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Sid       = "AllowCloudFrontServicePrincipal",
      Effect    = "Allow",
      Principal = { Service = "cloudfront.amazonaws.com" },
      Action    = "s3:GetObject",
      Resource  = "${aws_s3_bucket.blog_assets.arn}/*",
      Condition = {
        StringEquals = {
          "AWS:SourceArn" = aws_cloudfront_distribution.blog_cdn.arn
        }
      }
    }]
  })
}

# -----------------------
# Upload Assets
# -----------------------
locals {
  asset_files = fileset("../.open-next/assets", "**/*")
}

resource "aws_s3_object" "blog_assets_objects" {
  for_each = { for file in local.asset_files : file => file if !endswith(file, "/") }
  bucket   = aws_s3_bucket.blog_assets.id
  key      = each.value
  source   = "../.open-next/assets/${each.value}"
  etag     = filemd5("../.open-next/assets/${each.value}")

  content_type = lookup({
    ".js"    = "application/javascript",
    ".css"   = "text/css",
    ".json"  = "application/json",
    ".html"  = "text/html",
    ".png"   = "image/png",
    ".jpg"   = "image/jpeg",
    ".jpeg"  = "image/jpeg",
    ".svg"   = "image/svg+xml",
    ".ico"   = "image/x-icon",
    ".woff"  = "font/woff",
    ".woff2" = "font/woff2",
    ".ttf"   = "font/ttf"
  }, try(regex("\\.[^.]+$", each.value), ""), "application/octet-stream")

  cache_control = startswith(each.value, "_next/static/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate"
}

# -----------------------
# CloudFront Distribution
# -----------------------
resource "aws_cloudfront_distribution" "blog_cdn" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "blog Next.js App CDN"
  default_root_object = ""

  origin {
    origin_id                = "s3-blog-assets"
    domain_name              = aws_s3_bucket.blog_assets.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.blog_oac.id
  }

  origin {
    origin_id   = "lambda-blog-server"
    domain_name = trimsuffix(replace(aws_lambda_function_url.blog_server_url.function_url, "https://", ""), "/")
    custom_origin_config {
      http_port              = 443
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  default_cache_behavior {
    target_origin_id       = "lambda-blog-server"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
  }

  ordered_cache_behavior {
    path_pattern           = "_next/static/*"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }

  ordered_cache_behavior {
    path_pattern           = "i18n/*"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }

  # ... (The rest of the image rule behaviors are the same and still correct) ...
  ordered_cache_behavior {
    path_pattern           = "*.png"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  ordered_cache_behavior {
    path_pattern           = "*.jpg"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  ordered_cache_behavior {
    path_pattern           = "*.jpeg"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  ordered_cache_behavior {
    path_pattern           = "*.ico"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  ordered_cache_behavior {
    path_pattern           = "*.svg"
    target_origin_id       = "s3-blog-assets"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# -----------------------------------------------------------------
# CloudFront Cache Invalidation
# -----------------------------------------------------------------
locals {
  assets_hash = md5(jsonencode([
    for f in local.asset_files : {
      p = f
      c = filemd5("../.open-next/assets/${f}")
    }
  ]))
}

resource "null_resource" "blog_assets_invalidation" {
  triggers = {
    assets_hash = local.assets_hash
  }

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.blog_cdn.id} --paths '/*'"
  }
}

# -----------------------
# Outputs
# -----------------------
output "cloudfront_url" {
  description = "The URL for the CloudFront distribution."
  value       = "https://${aws_cloudfront_distribution.blog_cdn.domain_name}"
}

output "s3_bucket" {
  description = "The name of the S3 bucket for static assets."
  value       = aws_s3_bucket.blog_assets.bucket
}

output "lambda_arn" {
  description = "The ARN of the main Lambda function."
  value       = aws_lambda_function.blog_server.arn
}

output "lambda_url" {
  description = "The direct function URL for the Lambda (useful for debugging)."
  value       = aws_lambda_function_url.blog_server_url.function_url
}

output "cache_bucket_name" {
  description = "The name of the S3 bucket used for OpenNext caching."
  value       = aws_s3_bucket.blog_cache.bucket
}