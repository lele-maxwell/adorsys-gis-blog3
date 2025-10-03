---
title: Cloud Practitional Essentials - Slides
lang: en
description: Slides for Cloud Practitional concepts, including compute, storage, networking, databases, AI/ML, and security on AWS.
tags:
  - cloud
  - aws
  - cloudpractitional
  - devops
---

# CLOUD PRACTICTIONAL ESSENTIALS - Slides

![Cloud Computing Overview](https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/twitter_thumb_201604_image.png)

## MODULE 1: Introduction to Cloud Computing

### Introduction
Principle: "Pay as you go"

### What is Cloud Computing?
On-demand delivery of IT resources over the internet with pay-as-you-go pricing.

### Cloud Deployment Types
- Cloud-based deployment: Fully in the cloud.
- On-premises deployment: Fully in your location.
- Hybrid deployment: Combination of both.

### 6 Key Benefits of Cloud Computing
Pay-as-you-go, massive economies of scale, stop guessing capacity, increased speed and agility, stop spending money running and maintaining data centers, go global in minutes.

### AWS Global Infrastructure
High availability and fault tolerance. Regions and Availability Zones.

### AWS Shared Responsibility Model
Defines who is responsible for what when running workloads in the cloud.

## MODULE 2: Introduction to Amazon EC2

### Introduction to Amazon EC2
EC2 instances are virtual machines (VMs) with multi-tenancy. Highly flexible, cost-effective, quick.

### Types of EC2 Instances
General purpose, compute optimized, memory optimized, accelerated computing, storage optimized.

### How to Provision AWS Resources
AWS Management Console, AWS CLI.

### Configure and Launch an EC2 Instance
Amazon Machine Images (AMIs) provide pre-built virtual machine images.

### Amazon EC2 Pricing
On-demand, Savings Plans, Reserved Instances, Spot Instances, Dedicated Hosts, Dedicated Instances.

### Scalability and Elasticity in Amazon EC2
Scalability (grow over time) vs. Elasticity (dynamic adjustment). Scale out (horizontal) vs. Scale up (vertical). Amazon EC2 Auto Scaling.

### Directing Traffic with Elastic Load Balancing
ELB distributes traffic across multiple resources, works with Auto Scaling.

### Messaging and Queuing
Monolithic vs. Microservices architecture. Amazon EventBridge, Amazon SQS, Amazon SNS for scalable communication.

## MODULE 3: Introduction to Serverless Computing

### Introduction to Serverless Computing
Run applications without managing underlying infrastructure.

### Unmanaged and Managed Compute Services in AWS
Unmanaged (EC2), Managed, Fully-managed (Lambda).

### AWS Lambda
Serverless compute service that runs code in response to events.

### Containers and Orchestration on AWS
Containers package code and dependencies. Containers vs. VMs. Orchestration for scaling.

### AWS Container Services
Amazon ECS (with EC2 or Fargate), Amazon EKS (with EC2 or Fargate), Amazon ECR.

### Fargate
Serverless compute engine for containers.

### Additional Compute Services
Elastic Beanstalk, AWS Batch, Lightsail, Outposts.

## MODULE 4: Going Global with AWS Infrastructure

### How to Choose a Region or Set of Regions
Compliance, proximity, feature availability, pricing.

### AWS Edge Locations
Smaller footprint facilities that cache items for lower latency.

### Infrastructure as Code and CloudFormation
Automate deployment of cloud resources for consistent setup.

### Deploying Multi-Region and Multi-AZ Resources
High availability, agility, elasticity. CloudFront (CDN), Route 53 (DNS).

## MODULE 5: Networking

### Amazon Virtual Private Cloud (Amazon VPC)
Logically isolated section of the AWS Cloud. Subnets (public/private).

### Connectivity to AWS
Internet Gateway, Virtual Private Gateways, Virtual Private Network (VPN).

### More Ways to Connect to the AWS Cloud
AWS Client VPN, AWS Site-to-Site VPN, AWS PrivateLink, AWS Direct Connect.

### Additional Gateway Services
AWS Transit Gateway, Network Address Translation (NAT) Gateway, Amazon API Gateway.

### Subnets, Security Groups, and Network Access Control Lists
Network ACLs (subnet level, stateless), Security Groups (resource level, stateful).

### Global Networking
Edge networking services. Amazon Route 53, Amazon CloudFront, AWS Global Accelerator.

## MODULE 6: Storage

### Intro to Storage
Block storage (EC2 instance store, EBS), Object storage (S3), File storage (EFS, FSx).

### Amazon Elastic Block Store (Amazon EBS) Data Lifecycle
EBS Snapshots for backups and recovery. Amazon Data Lifecycle Manager for automation.

### Amazon Simple Storage Service (S3)
Fully managed, highly-available object storage. Objects, buckets, benefits.

### Security and Privacy Management (S3)
Bucket Policies, Identity-Based Policies, Encryption.

### Amazon S3 Storage Classes and S3 Lifecycle
S3 Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Express One Zone, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive, S3 Outposts. S3 Lifecycle for automation.

### Amazon Elastic File System (Amazon EFS)
Fully managed, scalable NFS file system. Multi-AZ redundancy, shared access, elastic storage.

### Amazon FSx
Fully managed file storage for Windows, Lustre, OpenZFS, NetApp ONTAP. File system integration, managed infrastructure, scalable storage, cost effective.

### AWS Storage Gateway
Hybrid cloud storage service. Seamless integration, improved data management, local caching, cost optimization. Gateway types: S3 File Gateway, Volume Gateway, Tape Gateway.

### AWS Elastic Disaster Recovery
Replicates critical workloads to AWS with minimal downtime. Business resilience, streamlined disaster recovery, cost optimization.

### Comparing Storage Services
S3 (object), EBS (block), EFS (file).

## MODULE 7: Databases

### Intro to Databases
Relational vs. NoSQL.

### Relational Database Service (RDS)
Managed relational database service. Supported engines (Aurora, MySQL, PostgreSQL, etc.). Use cases, benefits (cost optimization, Multi-AZ, performance optimization).

### NoSQL Database Service
Key-value pairs.

### Amazon DynamoDB
Fully managed NoSQL database service. Use cases, benefits (scalability, consistent high performance, high availability, data encryption).

### In-Memory Caching Services
Amazon ElastiCache (Redis, Valkey, Memcached). Use cases, benefits (high performance, high availability, replication, data encryption).

### Additional Database Services
Amazon DocumentDB (MongoDB compatible). AWS Backup. Amazon Neptune (graph database).

## MODULE 8: AI/Machine Learning & Data Analytics

### Intro to AI/ML & Data Analytics
AI (humanlike tasks), ML (training machines with data).

### AI/ML on AWS
Common ML business use cases (predict trends, make decisions, detect anomalies). AWS AI/ML stack (AI services, ML services, ML frameworks and infrastructure).

### AWS AI/ML Solutions
Tier 1: Pre-built AWS AI services (Language: Comprehend, Polly, Transcribe, Translate. Computer Vision & Search: Kendra, Rekognition, Textract. Conversational AI & Personalization: Lex, Personalize).
Tier 2: ML services (Amazon SageMaker AI).
Tier 3: ML frameworks and infrastructure (PyTorch, Apache M-X Net, TensorFlow, EC2, EMR, ECS).

### Introduction to Generative AI on AWS
Deep learning, Generative AI (Foundation Models, LLMs). Generative AI on AWS (SageMaker JumpStart, Amazon Bedrock, Amazon Q).

### AWS Generative AI Solutions
Amazon SageMaker JumpStart (rapid deployments, custom fine-tuned solutions, ML experiments). Amazon Bedrock (enterprise-grade, multimodal content generation, advanced conversational AI). Amazon Q (Q Business, Q Developer).

### Introduction to Data Analytics
Data pipelines for ETL processes (Extract, Transform, Load). Data analytics (uncover insights).

### Data Pipelines on AWS
Step 1: Data ingestion (Kinesis Data Streams, Data Firehose).
Step 2: Data storage (S3, Redshift).
Step 3: Data cataloging (AWS Glue Data Catalog).
Step 4: Data processing (AWS Glue, Amazon EMR).
Step 5: Data analysis and visualization (Athena, Redshift, QuickSight, OpenSearch Service).

### Data Analytics and AI/ML Architecture Diagram
Example workflow for e-commerce recommendations.

## MODULE 9: Security on AWS

### Intro to Security
Authentication and authorization. AWS Shared Responsibility Model (customer: security in the cloud; AWS: security of the cloud). AWS security controls.

### Preventing Unauthorized Access
AWS Identity and Access Management (IAM) (principle of least privilege). IAM identities (root user, users, groups, roles), IAM policies. Additional access management services (IAM Identity Center, Secrets Manager, Systems Manager).

### Protecting Networks and Applications
Network and application attacks (DoS, DDoS). AWS network and application protection (Security Groups, ELB, AWS Regions). AWS protection through services (AWS Shield, AWS WAF).

### Data Protection
Data encryption (at rest, in transit). AWS data protection (S3, EBS, DynamoDB built-in). AWS data protection services (KMS, Macie, ACM).

### Detecting and Responding to Security Incidents
Detection and response services (Amazon Inspector, Amazon GuardDuty).