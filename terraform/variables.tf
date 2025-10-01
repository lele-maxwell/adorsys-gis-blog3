variable "project_name" {
  type        = string
  description = "Name of the project/app"
  default     = "gisblog"
}

variable "aws_region" {
  type        = string
  description = "AWS region to deploy resources"
  default     = "eu-central-1"  # change if needed
}
          
