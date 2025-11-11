---
title: Cloud Practitional Essentials
lang: en
description: A comprehensive guide to Cloud Practitional concepts, including compute, storage, networking, databases, AI/ML, and security on AWS.
tags:
  - cloud
  - aws
  - cloudpractitional
  - devops
---

![Cloud Computing](https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/twitter_thumb_201604_image.png)

# CLOUD PRACTICTIONAL ESSENTIALS - Course Notes

## MODULE 1: Introduction to Cloud Computing

### Introduction
The fundamental principle of cloud computing is **"Pay as you go"**. This means you only pay for the computing resources you consume, eliminating the need for large upfront investments in hardware and infrastructure.

### What is Cloud Computing?
Cloud computing is the on-demand delivery of IT resources—such as servers, storage, databases, networking, software, analytics, and intelligence—over the Internet with pay-as-you-go pricing. Instead of owning, buying, and maintaining your own data centers and servers, you can access technology services from a cloud provider like Amazon Web Services (AWS).

### Cloud Deployment Types

#### Cloud-based deployment:
In a cloud-based deployment model, organizations have the flexibility to migrate their existing applications and data to the cloud, design and build new applications directly within the cloud environment, or utilize a combination of both strategies. For example, a company might migrate its data resources to the cloud and then develop an application comprising virtual servers, databases, and networking components entirely hosted in the cloud. This approach leverages the full benefits of cloud scalability, elasticity, and managed services.

#### On-premises deployment:
Deploying resources on premises, often referred to as private cloud, involves hosting applications and data within an organization's own data centers. While this model offers dedicated resources and potentially lower latency for specific workloads, it typically does not provide many of the benefits of public cloud computing, such as rapid scalability and cost-effectiveness. In most cases, this deployment model resembles traditional IT infrastructure, albeit with the use of virtualization and resource management tools to enhance resource utilization.

#### Hybrid deployment:
A hybrid deployment combines cloud-based resources with on-premises infrastructure, allowing them to work together seamlessly. This approach is ideal for situations where legacy applications must remain on premises due to maintenance preferences, stringent regulatory requirements, or data sovereignty concerns. For instance, a company might choose to retain certain regulated legacy applications on-premises while leveraging cloud services for advanced data processing, analytics, or burst capacity. Multi-cloud deployments, where an organization uses services from more than one cloud provider, can also be considered a form of hybrid deployment.

**In short:**
- **Cloud-based:** Fully in the cloud, leveraging external cloud provider infrastructure.
- **On-premises:** Fully within your own physical data center or location.
- **Hybrid:** A strategic combination of both cloud-based and on-premises resources, working in concert.

### 6 Key Benefits of Cloud Computing

1.  **The ability to pay as you go:** You only pay for the compute, storage, and other resources you actually use, eliminating capital expenses and reducing operational costs.
2.  **Benefits from massive economies of scale:** By aggregating usage from hundreds of thousands of customers, cloud providers achieve lower per-unit costs, which are then passed on to you as lower prices.
3.  **Stop guessing capacity:** You no longer need to over-provision resources to handle peak loads. Cloud computing allows you to scale up or down as needed, ensuring you have just the right amount of capacity.
4.  **Increase speed and agility:** Cloud environments enable rapid provisioning of resources, allowing developers to quickly spin up development and testing environments, accelerating innovation and time to market.
5.  **Stop spending money running and maintaining data centers:** Cloud providers manage the underlying infrastructure, freeing up your IT staff to focus on higher-value activities for your business.
6.  **Go global in minutes:** With global infrastructure, you can deploy your applications to multiple geographic regions quickly, bringing your content closer to your users and improving performance.

#### AWS Global Infrastructure

-   **High availability:** This refers to designing systems to ensure applications remain accessible with minimal downtime, even if one component fails. There is always another component ready to take over, ensuring continuous service.
-   **Fault tolerance:** Taking high availability a step further, fault tolerance involves designing a system to continue operating effectively even if multiple components fail simultaneously. This is achieved through redundancy and robust recovery mechanisms.

#### Region
AWS Regions are physical locations around the world that contain groups of data centers. These groups of data centers are called Availability Zones. Each AWS Region consists of a minimum of three physically separate Availability Zones within a geographic area. Regions are designed to be isolated from each other to achieve the greatest possible fault tolerance and stability.

#### AZ (Availability Zone)
An Availability Zone consists of one or more data centers with redundant power, networking, and connectivity. Regions and Availability Zones are designed to provide low-latency, fault-tolerant access to services for users within a given area. By deploying applications across multiple Availability Zones within a Region, you can achieve high availability and protect against failures in a single data center.

### AWS Shared Responsibility Model
When using AWS, security and compliance are a shared responsibility between AWS and the customer. This model defines who is responsible for what when running workloads in the cloud.
-   **AWS is responsible for "security *of* the cloud"**: This includes the physical security of data centers, network infrastructure, virtualization infrastructure, and the foundational services.
-   **Customers are responsible for "security *in* the cloud"**: This includes managing operating systems, network and firewall configurations, platform management, applications, and data (including encryption, access control, and network traffic protection).

## MODULE 2: Introduction to Amazon EC2

### Introduction to Amazon EC2
Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the AWS Cloud. EC2 instances are virtual machines (VMs) that allow you to run applications in a flexible and cost-effective manner. VMs share an underlying physical host machine with multiple other instances, a concept known as **multi-tenancy**. AWS manages the underlying host, the hypervisor, and the isolation between instances, ensuring that each VM is isolated while still able to share resources provided by the host. EC2 is highly flexible, cost-effective, and quick to provision.

#### Challenges of on-premises resources
With traditional on-premises resources, you must purchase hardware upfront, wait for delivery, and handle installation and configuration. This process is time-consuming, costly, and inflexible because you're locked into a specific capacity that might not align with changing demands.

#### Benefits of using Cloud Resources
In contrast, with Amazon EC2, you can quickly launch, scale, and stop instances based on your needs without the delays and upfront costs associated with traditional on-premises resources. This agility allows you to adapt to fluctuating demands and optimize costs.

### Types of EC2 Instances
EC2 instances are grouped under instance families, which offer varying combinations of CPU, memory, storage, and networking capacity. This flexibility allows you to optimize for certain types of tasks by choosing instances specific to your particular workload.

-   **General purpose:** These instances provide a balanced mix of compute, memory, and networking resources. They are ideal for diverse workloads, such as web services, code repositories, and when workload performance is uncertain.
-   **Compute optimized:** Ideal for compute-intensive tasks, such as gaming servers, high-performance computing (HPC), machine learning, and scientific modeling.
-   **Memory optimized:** Used for memory-intensive tasks like processing large datasets, data analytics, and databases. They provide fast performance for memory-heavy workloads.
-   **Accelerated computing:** These instances use hardware accelerators, like graphics processing units (GPUs), to efficiently handle tasks such as floating-point calculations, graphics processing, and machine learning.
-   **Storage optimized:** Designed for workloads that require high performance for locally stored data, such as large databases, data warehousing, and I/O-intensive applications.

### How to Provision AWS Resources
All interactions with AWS services are powered by APIs. You can access these APIs through three primary methods:

-   **AWS Management Console:** A web interface for managing AWS services, offering quick access, search functionality, and simplified workflows. It's good for users who prefer a visual, easy-to-use interface.
-   **AWS CLI (Command Line Interface):** Allows you to manage multiple AWS services directly from the command line across Windows, macOS, and Linux. It's good for advanced users and developers who need to automate tasks and script actions.
-   **AWS SDKs (Software Development Kits):** Provide APIs in various programming languages (e.g., Python, Java, Node.js) to interact with AWS services programmatically.

### Configure and Launch an EC2 Instance

#### Amazon Machine Images (AMIs)
AMIs are pre-built virtual machine images that contain the basic components needed to start an instance.
-   **AMI components:** An AMI includes the operating system, storage setup, architecture type, permissions for launching, and any extra software that is already installed. You can use one AMI to launch several EC2 instances that all have the same setup.
-   **Three ways to use AMIs:**
    1.  **Create your own:** Build a custom AMI with specific configurations and software tailored to your needs.
    2.  **Use pre-configured AWS AMIs:** Set up for common operating systems and software.
    3.  **Purchase from AWS Marketplace:** Third-party vendors offer specialized software designed for specific use cases.
-   **AMI repeatability:** AMIs provide repeatability through a consistent environment for every new instance. Identical configurations and automated deployments ensure consistent development and testing environments, aiding scalability and reducing errors.

### Amazon EC2 Pricing
AWS offers various pricing models for EC2 instances to optimize costs based on your workload characteristics:

-   **On-demand:** Pay only for the compute capacity you consume with no upfront payments or long-term commitments required. Good for unpredictable workloads.
-   **Savings Plans:** Save up to 72% across a variety of instance types and services by committing to a consistent usage level (e.g., $10/hour for 1 or 3 years). Good for predictable workloads with flexibility.
-   **Reserved Instances:** Get savings of up to 75% by committing to a 1-year or 3-year term for predictable workloads using specific instance families and AWS Regions. Good for steady-state workloads with predictable usage.
-   **Spot Instances:** Bid on spare compute capacity at up to 90% off the On-Demand price, with the flexibility to be interrupted when AWS reclaims the instance. Good for flexible, fault-tolerant tasks.
-   **Dedicated Hosts:** Reserve an entire physical server for your exclusive use. This option offers full control and is ideal for workloads with strict security or licensing needs.
-   **Dedicated Instances:** Pay for instances running on hardware dedicated solely to your account. This option provides isolation from other AWS customers.

| Pricing Option         | How You Pay                   | Flexibility                      | When to Use                           | Cost                       |
| :--------------------- | :---------------------------- | :------------------------------- | :------------------------------------ | :------------------------- |
| **On-Demand**          | Pay for what you use          | Very high                        | Short-term or unpredictable workloads | Highest                    |
| **Reserved Instances** | Commit 1–3 years              | Low (fixed instance type)        | Predictable workloads                 | Cheaper (up to 75%)        |
| **Savings Plans**      | Commit to $/hour for 1–3 yrs | Medium (can change instances)    | Predictable usage, want flexibility   | Cheaper (up to 72%)        |
| **Spot Instances**     | Bid for unused capacity       | Low (can be interrupted anytime) | Flexible, fault-tolerant tasks        | Very cheap (up to 90% off) |
| **Dedicated Hosts**    | Rent entire physical server   | Low (specific server)            | Compliance, special licenses          | Expensive                  |

💡 **Tip:**
*   **Flexibility** = how easily you can change or stop the instance.
*   **Cost** = general trend from highest to lowest.

### Scalability and Elasticity in Amazon EC2
**Scalability** is about a system’s potential to grow over time, whereas **elasticity** is about the dynamic, on-demand adjustment of resources.

-   **Scalability:** Refers to the ability of a system to handle an increased load by adding resources. You can **scale up** (vertical scaling) by adding more power to existing machines, or you can **scale out** (horizontal scaling) by adding more machines. Scalability focuses on long-term capacity planning to ensure the system can grow and accommodate more users or workloads as needed.
-   **Elasticity:** The ability to automatically scale resources up or down in response to real-time demand. A system can then rapidly adjust its resources, scaling out during periods of high demand and scaling in when the demand decreases. Elasticity provides cost efficiency and optimal resource usage at any given moment.

-   **Amazon EC2 Auto Scaling:** Automatically adjusts the number of EC2 instances based on changes in application demand, providing better availability. It offers two approaches:
    -   **Dynamic scaling:** Adjusts in real time to fluctuations in demand.
    -   **Predictive scaling:** Preemptively schedules the right number of instances based on anticipated demand.

### Directing Traffic with Elastic Load Balancing (ELB)
Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple resources, such as EC2 instances, to optimize performance and reliability. A load balancer serves as the single point of contact for all incoming web traffic to an Auto Scaling group. As the number of EC2 instances fluctuates in response to traffic demands, incoming requests are first directed to the load balancer. From there, the traffic is distributed evenly across the available instances.

Although ELB and Amazon EC2 Auto Scaling are distinct services, they work in tandem to enhance application performance and ensure high availability. Together, they enable applications running on Amazon EC2 to scale effectively while maintaining consistent performance.

###### Key takeaways: ELB benefits
-   **Efficient traffic distribution:** ELB evenly distributes traffic across EC2 instances, preventing overload on any single instance and optimizing resource utilization.
-   **Automatic scaling:** ELB scales with traffic and automatically adjusts to changes in demand for seamless operation as backend instances are added or removed.
-   **Simplified management:** ELB decouples front-end and backend tiers, reducing manual synchronization. It also handles maintenance, updates, and failover to ease operational overhead.

###### Routing methods
-   **Round Robin:** Distributes traffic evenly across all available servers in a cyclic manner.
-   **Least Connections:** Routes traffic to the server with the fewest active connections, maintaining a balanced load.
-   **IP Hash:** Uses the client’s IP address to consistently route traffic to the same server.
-   **Least Response Time:** Directs traffic to the server with the fastest response time, minimizing latency.

### Messaging and Queuing
In modern application development, reliability and resilience are important. One effective way to achieve this is by adopting a service-oriented approach.

-   **Monolithic applications:** Applications consist of multiple components that work together to transmit data, fulfill requests, and keep the application running smoothly. In a traditional approach to application architecture, the components—such as database logic, web application servers, user interfaces, and business logic—are tightly coupled. This means that if one component fails, it can cause the failure of other components, potentially bringing down the entire application.
-   **Microservices architecture:** To improve application availability and resilience, you can adopt a microservices architecture. In this approach, application components are loosely coupled, meaning that if one component fails, the others continue to function normally. The communication between components remains intact, and the failure of a single component does not impact the entire system. This design promotes greater flexibility and reliability in the application.

###### Supporting scalable and reliable cloud communication
Amazon EventBridge, Amazon SNS, and Amazon SQS are AWS services that help different parts of an application communicate effectively in the cloud. These services support building event-driven and message-based systems. Together, they help create scalable, reliable applications that can handle high traffic and can enhance communication between components.

-   **Amazon EventBridge:** A serverless service that helps connect different parts of an application using events, helping to build scalable, event-driven systems. With EventBridge, you route events from sources like custom apps, AWS services, and third-party software to other applications. EventBridge simplifies the process of receiving, filtering, transforming, and delivering events, so you can quickly build reliable applications.
    -   *How EventBridge helps:* EventBridge can route events, like order placed or payment completed, to the relevant services (payment, restaurant, inventory, and delivery). It can handle high volumes of events during peak times, making sure each service works independently. Even if one service fails, EventBridge will store the event and process it as soon as the service is available again. EventBridge helps provide a smooth and reliable operation across the entire system.
-   **Amazon SQS (Amazon Simple Queue Service):** A message queuing service that facilitates reliable communication between software components. It can send, store, and receive messages at any scale, making sure messages are not lost and that other services don't need to be available for processing. In Amazon SQS, an application places messages into a queue, and a user or service retrieves the message, processes it, and then removes it from the queue.
-   **Amazon SNS (Amazon Simple Notification Service):** A publish-subscribe service that publishers use to send messages to subscribers through SNS topics. In Amazon SNS, subscribers can include web servers, email addresses, Lambda functions, and various other endpoints.

## MODULE 3: Introduction to Serverless Computing

### Introduction to Serverless Computing
With serverless computing, you run applications without managing the underlying infrastructure. Serverless means that you can’t actually see or access the underlying infrastructure or instances that are hosting your application. Instead, all the management of the underlying environment from a provisioning, scaling, high availability, and maintenance perspective are handled for you. All you need to do is focus on your application code.

### Unmanaged and Managed Compute Services in AWS
AWS offers both unmanaged and managed services to suit different levels of control and responsibility. Understanding this model helps you know which tasks AWS manages and which you are responsible for, helping you secure and manage your cloud resources effectively.

-   **Unmanaged:** With unmanaged compute services like Amazon EC2, AWS takes care of the underlying physical infrastructure, but you're responsible for setting up, securing, and maintaining the operating system, network configurations, and applications on your instances.
    -   **Customer responsibilities:** Compute data, client-side data encryption, server-side encryption, network traffic protection, platform and application management, OS, network, firewall configuration.
    -   **AWS responsibilities:** Software for compute, storage, database, and networking; Hardware, AWS Global Infrastructure.
-   **Managed:** Managed services reduce the amount of infrastructure you need to manage. While AWS handles much of the operational overhead, you might still need to perform some provisioning or configuration depending on the service.
    -   **Customer responsibilities:** Compute data, client-side data encryption, server-side encryption, network traffic protection.
    -   **AWS responsibilities:** Platform and application management, OS, network, firewall configuration, software for compute, storage, database, and networking; Hardware, AWS Global Infrastructure.
-   **Fully-managed services:** Fully-managed services—like serverless ones—take abstraction even further, eliminating the need to provision or manage any servers at all. The underlying infrastructure is fully managed by AWS, so you can focus entirely on writing and deploying code. AWS Lambda is a serverless compute service where AWS handles the infrastructure, scaling, and availability, while you remain responsible for securing and managing your application code.
    -   **Customer responsibilities:** Compute data, client-side data encryption.
    -   **AWS responsibilities:** Server-side encryption, network traffic protection, platform and application management, OS, network, firewall configuration, software for compute, storage, database, and networking; Hardware, AWS Global Infrastructure.

### AWS Lambda
Lambda is a serverless compute service that runs code in response to events without the need to provision or manage servers. It automatically manages the underlying infrastructure, scaling resources based on the volume of requests. You are charged only for the compute time consumed, down to the millisecond. Lambda handles execution, scaling, and resource allocation. You can optimize performance by configuring the appropriate memory size for your function.

##### How Lambda works
1.  Upload your Lambda function code.
2.  Set the code to trigger from an event source (e.g., S3 upload, API Gateway request).
3.  Run code when triggered.
4.  Pay only for what you consume.

#### Lambda use cases
Lambda is ideal for building responsive, event-driven applications across a wide range of industries.
-   **Real-time image processing for a social media application:** When a photo is uploaded, Lambda is triggered to resize the image, apply filters, and save it in an optimized format to storage.
-   **Personalized content delivery for a news aggregator:** When a user opens the application or performs a search, Lambda functions are triggered to retrieve data, run personalization logic, and return relevant content.
-   **Real-time event handling for an online game:** Each event (like scoring a point or unlocking an achievement) triggers a Lambda function that updates player data and game status.

### Containers and Orchestration on AWS
Containers provide a reliable way to package your application’s code and dependencies into a single, portable unit, making them ideal for workflows that require high security, reliability, and scalability. They package everything your application needs to run—code, runtime, dependencies, configuration—into a single, portable unit. This creates a consistent environment, isolating your application from the underlying system and making it convenient to deploy and scale your application anywhere.

###### Containers and VMs
A container packages your application with everything it needs to run, so it works the same on any computer. This helps to move, update, and manage. Containers are faster and lighter than virtual machines (VMs) because they share the host computer’s operating system. VMs use a hypervisor to run full, separate operating systems, which makes them less resource-efficient and have longer startup times.

###### Deployment consistency with containers
When a developer’s environment differs from staging or production, deployments can fail and become difficult to debug. Containers solve this by keeping the application’s environment consistent everywhere, making deployments smoother and assisting troubleshooting.

###### Scaling containers with orchestration
As containerized applications scale, managing them becomes more complex. A setup that began with a few containers on a single host can quickly grow into hundreds or thousands of containers across multiple hosts. At that scale, manually handling container lifecycle, monitoring, and general operations becomes unsustainable. This is where orchestration tools come in. They automate deployment, scaling, and management to keep everything running smoothly.

#### AWS container services
AWS has a set of tools for managing containers that fits into three categories: orchestration, registry, and compute.

##### Amazon ECS (Amazon Elastic Container Service)
Amazon ECS is a scalable container orchestration service for running and managing containers on AWS, like Docker containers. Docker is a software platform for building, testing, and deploying applications quickly.
-   **Amazon ECS launch types:**
    -   **Amazon ECS with Amazon EC2:** Ideal for small-to-medium businesses that need full control over infrastructure. Suitable for custom applications requiring specific hardware or networking configurations.
    -   **Amazon ECS with AWS Fargate:** Perfect for startups or small teams building web applications with variable traffic. It's a serverless option—no server management required—so teams can focus on development.

##### Amazon EKS (Amazon Elastic Kubernetes Service)
Amazon EKS is a fully managed service for running Kubernetes on AWS. It simplifies deploying, managing, and scaling containerized applications using open-source Kubernetes.
-   **Amazon EKS launch types:**
    -   **Amazon EKS with Amazon EC2:** Best for enterprises needing full control over infrastructure. Offers deep customization of EC2 instances alongside Kubernetes scalability.
    -   **Amazon EKS with AWS Fargate:** Great for teams wanting Kubernetes flexibility without managing servers. Combines Kubernetes power with serverless simplicity.

##### Amazon ECR (Amazon Elastic Container Registry)
Amazon ECR is where you can store, manage, and deploy container images. It supports container images that follow the Open Container Initiative (OCI) standards. You can push, pull, and manage images in your Amazon ECR repositories using standard container tooling and command line interfaces (CLIs).

##### Fargate
AWS Fargate is a serverless compute engine for containers. It works with both Amazon ECS and Amazon EKS. Fargate is a container hosting platform, unlike Amazon ECS and Amazon EKS, which are both container orchestration services. When using Fargate, you do not need to provision or manage servers. Fargate manages your server infrastructure for you. You can focus more on innovating and developing your applications, and you pay only for the resources that are required to run your containers.

### Additional Compute Services
AWS offers purpose-built services for specific needs, such as streamlining web application deployment, managing batch workloads, providing virtual servers, and extending cloud infrastructure to on-premises data centers.

-   **Elastic Beanstalk:** A fully managed service that streamlines the deployment, management, and scaling of web applications. Developers can upload their code, and Elastic Beanstalk automatically handles the provisioning of infrastructure, scaling, load balancing, and application health monitoring.
    -   *Good for:* Deploying and managing web applications, RESTful APIs, mobile backend services, and microservices architectures, with automated scaling and simplified infrastructure management.
-   **AWS Batch:** A fully managed service that you can use to run batch computing workloads on AWS. It automatically schedules, manages, and scales compute resources for batch jobs, optimizing resource allocation based on job requirements.
    -   *Good for:* Processing large-scale, parallel workloads in areas like scientific computing, financial risk analysis, media transcoding, big data processing, machine learning training, and genomics research.
-   **Lightsail:** A cloud service offering virtual private servers (VPSs), storage, databases, and networking at a predictable monthly price. It’s ideal for small businesses, basic workloads, and developers seeking a straightforward AWS experience without the complexity of the full AWS Management Console.
    -   *Good for:* Basic web applications, low-traffic websites, development and testing environments, small business websites, blogs, and learning cloud services.
-   **Outposts:** A fully managed hybrid cloud solution that extends AWS infrastructure and services to on-premises data centers. It provides a consistent experience between on premises and the AWS Cloud, offering compute, storage, and networking components.
    -   *Good for:* Low-latency applications, data processing in remote locations, migrating and modernizing legacy applications, and meeting regulatory compliance or data residency requirements.

## MODULE 4: Going Global with AWS Infrastructure

### How to Choose a Region or Set of Regions
When expanding your cloud footprint, selecting the right AWS Region or set of Regions is a critical business decision. Each Region is isolated from every other Region, meaning no data goes in or out of your environment in that Region without you explicitly granting permission.

##### Key factors to consider:
-   **Compliance:** Different geographical locations have varying regulatory requirements and data protection laws (e.g., GDPR in the EU).
-   **Proximity:** Regions closer to your user base minimize data travel time, reducing latency and enhancing application responsiveness.
-   **Feature availability:** Not all Regions contain all AWS offerings (e.g., AWS GovCloud Regions for US government agencies).
-   **Pricing:** Some Regions have lower operational costs, and tax laws can also play a role.

### AWS Edge Locations
AWS has smaller footprint facilities called edge locations. Edge locations cache items like images, videos, and other resources, so that users can access the content they need with lower latency. These are separate from Regions and are specifically designed to accelerate content delivery. Edge locations host other AWS services, like AWS Global Accelerator and Amazon Route 53.

### Infrastructure as Code (IaC) and CloudFormation
Infrastructure as Code (IaC) allows you to define your infrastructure in a file, almost like a blueprint for your AWS architecture. You can then use tools or services to automatically build and configure your resources based on your blueprint specifications. This ensures consistent, reliable setup and allows for tracking changes using source control.

-   **CloudFormation:** A service that helps you model and set up your AWS resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. With CloudFormation, you create a template that describes all the AWS resources you want (like Amazon EC2 instances), and CloudFormation provisions and configures them for you.

### Deploying Multi-Region and Multi-AZ Resources
Deploying your cloud resources to multiple Regions and multiple Availability Zones is crucial for achieving high availability, agility, and elasticity. By building redundant architectures or replicating your resources across multiple levels of AWS infrastructure, you can improve application reliability.

-   **High availability:** The capability of a system to operate continuously without failing, handling component failures without significant downtime.
-   **Agility:** The ability to quickly adapt to changing requirements or market conditions, allowing rapid modification and deployment of services.
-   **Elasticity:** The ability of a system to scale resources up or down automatically in response to changes in demand.

-   **Amazon CloudFront:** A content delivery network (CDN) designed to serve content as close to users as possible, using Edge locations to cache items like images, videos, and other resources for lower latency.
-   **Amazon Route 53:** A Domain Name System (DNS) that routes end users to internet applications by converting human-readable URLs to machine-readable IP addresses.

## MODULE 5: Networking

### Amazon Virtual Private Cloud (Amazon VPC)
An Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. This provides a secure and private environment for your resources.

##### Subnet
Subnets are used to organize your resources and can be made publicly or privately accessible.
-   **Private subnet:** Commonly used to contain resources like a database storing customer or transactional information, accessible only through your private network.
-   **Public subnet:** Commonly used for resources like a customer-facing website, accessible by the public.
In a VPC, you can define rules to allow resources in different subnets to communicate with each other (e.g., EC2 instances in a public subnet communicating with databases in a private subnet).

## Connectivity to AWS

### Connecting your resources with an internet gateway
To allow public traffic from the internet to access your VPC, you attach an internet gateway to the VPC. An internet gateway is a connection between a VPC and the internet. Without an internet gateway, no one can access the resources within your VPC.

### Virtual private gateways
A virtual private gateway allows protected internet traffic to enter into the VPC, typically used for VPN connections.

### Virtual private network (VPN)
A VPN encrypts your internet traffic, helping protect it from anyone who might try to intercept or monitor it.

## More Ways to Connect to the AWS Cloud
Companies need a wide range of ways to connect to the AWS Cloud due to different types of networks, on-premises data centers, and remote workers.

-   **AWS Client VPN:** A fully managed, elastic VPN service to connect your remote workers and on-premises networks to the cloud.
    -   *Benefits:* Advanced authentication, remote access, elastic, fully managed.
    -   *Use case:* Quickly scale remote-worker access.
-   **AWS Site-to-Site VPN:** Creates a secure, encrypted connection between your on-premises networks (data centers or branch offices) and your resources in your Amazon VPC.
    -   *Benefits:* High availability, secure and private sessions, accelerates applications.
    -   *Use cases:* Application migration, secure communication between remote locations.
-   **AWS PrivateLink:** A highly available, scalable technology to privately connect your VPC to services and resources as if they were in your VPC, without using public internet.
    -   *Benefits:* Secures traffic, simplified management rules.
    -   *Use case:* Connecting clients in your VPC to resources, other VPCs, and endpoints.
-   **AWS Direct Connect:** A service that establishes a dedicated private connection between your network and VPC in the AWS Cloud.
    -   *Benefits:* Reduces network costs, increases bandwidth.
    -   *Use cases:* Latency-sensitive applications, large-scale data migration, hybrid cloud architectures.

### Additional Gateway Services
-   **AWS Transit Gateway:** Used to connect your Amazon VPCs and on-premises networks through a central hub.
-   **Network Address Translation (NAT) Gateway:** Allows instances in a private subnet to connect to services outside your VPC, but external services can't initiate a connection with those instances.
-   **Amazon API Gateway:** An AWS service for creating, publishing, maintaining, monitoring, and securing APIs at any scale.

### Subnets, Security Groups, and Network Access Control Lists
-   **A subnet:** A section of a VPC in which you can group resources based on security or operational needs. Subnets can be public or private.
-   **Network ACLs (Access Control Lists):** A virtual firewall that controls inbound and outbound traffic at the subnet level.
    -   *Stateless packet filtering:* Network ACLs remember nothing and check packets that cross the subnet border each way (inbound and outbound).
-   **Security groups:** A virtual firewall that controls inbound and outbound traffic for specific AWS resources, like Amazon EC2 instances, at the resource level.
    -   *Stateful packet filtering:* Security groups remember previous decisions made for incoming packets, allowing responses to proceed regardless of inbound rules.
Remember the AWS Shared Responsibility Model: securing subnets and resources with network ACLs and security groups is your responsibility.

## Global Networking

### Edge networking services
Edge networking is the process of bringing information storage and computing abilities closer to the devices that produce that information and the users who consume it. This provides lower latency access to data and content.

### Amazon Route 53
Route 53 is a DNS that provides a reliable and cost-effective way to route end users to internet applications. It directs end users to your resources with globally dispersed DNS servers and automatic scaling. It also allows you to manage DNS records for domain names.

### Amazon CloudFront
CloudFront is a content delivery network (CDN) service that delivers your content with faster loading times, cost savings, and reliability. It uses Edge locations to store copies of your content closer to users.
-   *Use cases:* Streaming video service, e-commerce website, mobile app.

### AWS Global Accelerator
Global Accelerator is a service that uses the AWS global network to improve application availability, performance, and security. It directs traffic through the AWS private global network, creating "express lanes" for your application's traffic.
-   *Use cases:* Global gaming, financial services applications.

##### Key elements of AWS Global Infrastructure
-   **AWS Regions:** Geographical areas with multiple data centers (Availability Zones).
-   **Availability Zones:** Distinct locations within a Region, each with redundant power, networking, and connectivity.
-   **Edge locations:** Strategically placed sites that cache content for lower latency.

## MODULE 6: Storage

### Intro to Storage
AWS offers various storage services categorized by their access patterns and use cases:

-   **Block storage:** Provides persistent, low-latency block-level storage volumes that attach to EC2 instances like physical hard drives.
    -   **Amazon EC2 instance store:** Unmanaged, non-persistent, high-performance block storage directly attached to EC2 instances for temporary data. Benefits: automatically available, cost-effective, high performance.
    -   **Amazon Elastic Block Store (EBS):** Managed service that provides persistent block storage volumes for EC2 instances, offering various types for different workloads. Benefits: data migration, instance type changes, disaster recovery, cost optimization, performance tuning.
-   **Object storage:** A data storage architecture that manages data as objects in a flat address space. Offers unlimited scalability for unstructured data.
    -   **Amazon Simple Storage Service (S3):** A fully managed scalable object storage service for storing and retrieving any amount of data from anywhere.
-   **File storage:** Provides shared file systems accessible over networks, allowing multiple users and applications to access the same data simultaneously.
    -   **Amazon Elastic File System (EFS):** A fully managed, scalable NFS file system for use with AWS Cloud services and on-premises resources.
    -   **Amazon FSx:** A fully managed file storage service for popular file systems like Windows, Lustre, and NetApp ONTAP.

### Amazon Elastic Block Store (Amazon EBS) Data Lifecycle

#### EBS Snapshots
EBS snapshots are point-in-time backups of EBS volumes. They are incremental, saving only changed blocks. Snapshots are stored redundantly in multiple Availability Zones using Amazon S3.
-   **Benefits:** Data protection and recovery, operational flexibility, cost-effective.
-   **Customer responsibility:** Scheduling and managing regular EBS snapshots, monitoring costs, encrypting sensitive data, verifying integrity, and testing restoration procedures.

#### Amazon Data Lifecycle Manager
Automates the creation, retention, and deletion of EBS snapshots. It can schedule snapshots during off-peak hours and automatically delete outdated backups.
-   **Steps:** Create an EBS snapshots policy, select target resource type, exclude volumes, set custom schedules, apply additional actions (tags, archiving, fast snapshot restore, cross-Region copying, cross-account sharing).

### Amazon Simple Storage Service (S3)
Amazon S3 is a fully managed, highly-available object storage service for storing and retrieving any amount of data as objects. It offers 99.999999999% durability.

#### Elements
-   **S3 objects:** The fundamental unit of data storage, including data, metadata, and a unique identifier (key). Can be any file type and size.
-   **S3 buckets:** Containers for storing objects. Globally unique names, serve as the basic unit for access control, and can hold virtually unlimited objects.

#### Benefits
-   **Virtually unlimited storage:** Scales automatically, pay-as-you-go.
-   **Object lifecycle management:** Automates moving objects between storage classes based on rules.
-   **Broad range of use cases:** Content distribution, static websites, application data storage, archiving, data lakes.

### Security and Privacy Management (S3)
Everything stored in Amazon S3 is private by default. You must explicitly grant permissions.
-   **Bucket Policies:** Resource-based policies attached to S3 buckets, specifying allowed/denied actions on the bucket and its objects.
-   **Identity-Based Policies:** Permissions attached to IAM users, groups, or roles, controlling actions on S3 resources.
-   **Encryption:** Protects data at rest (stored in S3) and in transit (traveling to/from S3).

### Amazon S3 Storage Classes and S3 Lifecycle
Amazon S3 offers various storage classes to suit different workloads with specific performance, access, resiliency, and cost requirements.
-   **S3 Standard:** General-purpose storage for frequently accessed data.
-   **S3 Intelligent-Tiering:** Automatically moves objects between frequent, infrequent, and archive instant access tiers based on access patterns.
-   **S3 Standard Infrequent Access (Standard-IA):** For data accessed less frequently but requiring rapid access.
-   **S3 One Zone Infrequent Access (One Zone-IA):** Stores data in a single Availability Zone, reducing costs for infrequently accessed, easily recreatable data.
-   **S3 Express One Zone:** For frequently accessed, latency-sensitive applications, offering single-digit millisecond access.
-   **S3 Glacier Instant Retrieval:** For archiving data rarely accessed, requiring millisecond retrieval.
-   **S3 Glacier Flexible Retrieval:** Low-cost storage for archived data accessed 1–2 times per year, with flexible retrieval times.
-   **S3 Glacier Deep Archive:** Lowest-cost storage for long-term retention (7–10 years or longer), with retrieval times of 12 hours.
-   **S3 Outposts:** Object storage for on-premises AWS Outposts environments with local data residency requirements.

#### S3 Lifecycle
Automates object storage tier configurations.
-   **Transition actions:** Define when objects should transition to another storage class.
-   **Expiration actions:** Define when objects expire and should be permanently deleted.
-   *Use cases:* Periodic logs, data that changes in access frequency.

### Amazon Elastic File System (Amazon EFS)
Amazon EFS is a fully managed, scalable file storage service for use with AWS Cloud services and on-premises resources. It operates using the Linux Network File System (NFS) protocol and automatically scales to petabytes.
-   **Benefits:** Multi-AZ redundancy, shared access, elastic storage.

### Amazon FSx
Amazon FSx makes it convenient and cost-effective to launch, run, and scale feature-rich, high-performance file systems in the cloud. It supports multiple file system protocols (Windows File Server, Lustre, OpenZFS, NetApp ONTAP).
-   **Benefits:** File system integration, managed infrastructure, scalable storage, cost-effective.
-   **Amazon FSx file systems:**
    -   **FSx for Windows File Server:** Fully managed shared storage built on Windows Server.
    -   **FSx for NetApp ONTAP:** Fully managed shared storage with ONTAP capabilities.
    -   **FSx for OpenZFS:** Fully managed shared file storage built on OpenZFS.
    -   **FSx for Lustre:** Fully managed shared storage with scalability and performance of Lustre.

### AWS Storage Gateway
Storage Gateway is a hybrid cloud storage service that seamlessly integrates on-premises environments with AWS Cloud storage.
-   **Benefits:** Seamless integration, improved data management, local caching, cost optimization.
-   **Gateway types:**
    -   **Amazon S3 File Gateway:** Bridges local environment with Amazon S3, providing on-premises access to cloud storage through file protocols.
    -   **Volume Gateway:** Creates virtual storage volumes, presenting cloud data as iSCSI volumes. (Cached volume mode, Stored volume mode).
    -   **Tape Gateway:** Replaces physical tape infrastructure with virtual tape capabilities, storing data in Amazon S3.

### AWS Elastic Disaster Recovery
Elastic Disaster Recovery replicates critical workloads to AWS with minimal downtime.
-   **Benefits:** Business resilience, streamlined disaster recovery, cost optimization.
-   **Use cases:** Healthcare data protection, financial services continuity, manufacturing operations recovery.

### Comparing Storage Services
-   **Amazon S3:** Excels at scalable object storage for web assets, backups, and more.
-   **Amazon EBS:** Provides block-level storage needed for EC2 instances and databases.
-   **Amazon EFS:** Offers managed shared file systems for workloads that require rapid simultaneous access to files.

## MODULE 7: Databases

### Intro to Databases
The AWS shared responsibility model applies to databases. AWS offers fully managed, managed, and unmanaged services.

### Relational Database Service (RDS)
Relational databases store data in a structured way, using SQL to manage and query data. Amazon RDS is a managed relational database service that handles routine database tasks.
-   **Supported database engines:** Amazon Aurora, MySQL, PostgreSQL, Microsoft SQL Server, MariaDB, and Oracle Database.
-   **Use cases:** Web applications, enterprise workloads, product inventories for e-commerce platforms.
-   **Benefits:** Cost optimization, Multi-AZ deployment (improves reliability), performance optimization.

### NoSQL Database Service
NoSQL databases (non-relational) use structures different from relational databases, often key-value pairs.

### Amazon DynamoDB
DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance for both document and key-value data structures.
-   **Use cases:** Gaming platforms, financial service applications, mobile applications with global user bases.
-   **Benefits:** Scalability with provisioned capacity, consistent high performance, high availability and durability, data encryption.

### In-Memory Caching Services
An in-memory cache temporarily stores frequently accessed data in RAM for extremely fast processing.

### Amazon ElastiCache
ElastiCache is a fully managed in-memory caching service that reduces the complexity of administering in-memory caching systems (Redis, Valkey, or Memcached).
-   **Use cases:** Session data management, database query enhancement, gaming leaderboards.
-   **Benefits:** High performance, high availability, replication across multiple Availability Zones, data encryption.

### Additional Database Services
-   **Amazon DocumentDB (with MongoDB compatibility):** Fully managed service for semistructured data (JSON-like documents).
-   **AWS Backup:** Streamlines data protection across various AWS resources and on-premises deployments.
-   **Amazon Neptune:** Fully managed, purpose-built graph database service for highly connected data sets.

## MODULE 8: AI/Machine Learning & Data Analytics

### Intro to AI/ML & Data Analytics
-   **AI (Artificial Intelligence):** Broad field focused on developing intelligent computer systems capable of performing humanlike tasks.
-   **ML (Machine Learning):** A type of AI for training machines to perform complex tasks without explicit instructions, finding patterns in historical data to produce an ML model.

### AI/ML on AWS
-   **Common ML business use cases:** Predict trends, make decisions, detect anomalies.
-   **AWS AI/ML solutions (three tiers):**
    1.  **AI services:** Pre-built models already trained for specific functions.
    2.  **ML services:** Customized approach with Amazon SageMaker AI to build, train, and deploy ML models.
    3.  **ML frameworks and infrastructure:** Completely custom approach using purpose-built chips and popular ML frameworks.

### AWS AI/ML Solutions

#### Tier 1: Pre-built AWS AI services
Ready-to-use, managed services to quickly solve various business use cases.
-   **Language services:**
    -   **Amazon Comprehend:** Extracts key insights from documents using natural language processing.
    -   **Amazon Polly:** Converts text into lifelike speech.
    -   **Amazon Transcribe:** Converts speech into text.
    -   **Amazon Translate:** Text translation service.
-   **Computer vision and search services:**
    -   **Amazon Kendra:** Uses natural language processing to search for answers within large amounts of enterprise content.
    -   **Amazon Rekognition:** Video analysis service to identify objects, people, text, scenes, and activities.
    -   **Amazon Textract:** Detects and extracts typed and handwritten text from documents, forms, and tables.
-   **Conversational AI and personalization services:**
    -   **Amazon Lex:** Adds voice and text conversational interfaces to applications.
    -   **Amazon Personalize:** Builds intelligent applications with personalized recommendations.

#### Tier 2: ML services
Provides more control over ML solutions without managing infrastructure.
-   **Amazon SageMaker AI:** Fully managed service to build, train, and deploy your own ML models.
    -   **Key benefits:** Choice of ML tools, fully managed infrastructure, repeatable ML workflows.

#### Tier 3: ML frameworks and infrastructure
For highly specialized needs requiring complete control over the ML training process.
-   **ML frameworks:** Software libraries (PyTorch, Apache M-X Net, TensorFlow) for building ML models.
-   **AWS ML infrastructure:** ML-optimized Amazon EC2 instances, Amazon EMR, and Amazon Elastic Container Service (Amazon ECS) support custom solutions.

### Introduction to Generative AI on AWS
-   **Deep learning (DL):** Subset of machine learning using layers of artificial neurons.
-   **Generative AI:** Type of deep learning powered by foundation models (FMs), which are pre-trained on vast data and can perform multiple tasks. Large language models (LLMs) are a popular type of FM.
-   **Generative AI on AWS:** Amazon SageMaker JumpStart, Amazon Bedrock, Amazon Q.

### AWS Generative AI Solutions
-   **Amazon SageMaker JumpStart:** ML hub within SageMaker AI to accelerate building, training, and deploying ML models.
-   **Amazon Bedrock:** Fully managed service for working with large foundation models and building generative AI applications.
-   **Amazon Q products:** Generative AI assistant.
    -   **Amazon Q Business:** Answers questions, solves problems, and takes actions using company data.
    -   **Amazon Q Developer:** Provides code recommendations and generates code.

### Introduction to Data Analytics
-   **Data pipelines for ETL processes:** Extract, Transform, Load data into a usable format.
-   **Data analytics:** Analysts transform raw historical data to uncover valuable insights and trends.

### Data Pipelines on AWS
1.  **Data ingestion services:** Move data from source systems into storage.
    -   **Amazon Kinesis Data Streams:** Real-time ingestion.
    -   **Amazon Data Firehose:** Near real-time ingestion.
2.  **Data storage services:** Consolidate data into a single location.
    -   **Amazon S3:** Popular choice for data lakes (structured/unstructured data).
    -   **Amazon Redshift:** Fully managed data warehouse for structured/semistructured data.
3.  **Data cataloging services:** Organize and structure information with metadata.
    -   **AWS Glue Data Catalog:** Centralized, scalable metadata repository.
4.  **Data processing services:** Clean and transform data.
    -   **AWS Glue:** Fully managed ETL service.
    -   **Amazon EMR:** For large-scale data processing with big data frameworks.
5.  **Data analysis and visualization services:** Develop insights.
    -   **Amazon Athena:** Run SQL queries on data in various sources.
    -   **Amazon Redshift:** For complex SQL queries on large datasets.
    -   **Amazon QuickSight:** Create interactive dashboards and reports.
    -   **Amazon OpenSearch Service:** Search for relevant content and visualize data.

### Data Analytics and AI/ML Architecture Diagram
Example: E-commerce company uses an ML model for product recommendations. Data flows from DynamoDB -> Kinesis Data Streams -> Firehose (transforms to .csv via Lambda) -> S3 data lake -> AWS Glue Data Catalog -> Athena (for queries) -> SageMaker AI (trains model).

## MODULE 9: Security on AWS

### Intro to Security
-   **Authentication:** Verifying user identity (e.g., username/password).
-   **Authorization:** Granting access rights and permissions.
-   **AWS Shared Responsibility Model:**
    -   **Customers:** "Security *in* the cloud" (data, systems, applications, access control).
    -   **AWS:** "Security *of* the cloud" (foundational software, virtualization, hardware, global infrastructure).
-   **AWS security controls:** Prevent, protect, detect, and respond to security incidents.

### Preventing Unauthorized Access

#### AWS Identity and Access Management (IAM)
Securely manage identities and access to AWS services and resources. By default, all actions are denied; permissions must be explicitly granted (principle of least privilege).
-   **Principle of least privilege:** Give people and systems only the access they need.
-   **IAM identities and controls:**
    -   **AWS account root user:** Account owner, full permissions. Use strong password and MFA.
    -   **IAM users:** Represents a person or application. Create individual users.
    -   **IAM groups:** Collection of IAM users that inherit group permissions.
    -   **IAM roles:** Identity you can assume to gain temporary access to permissions.
    -   **IAM policies:** JSON document that allows or denies permission to access AWS services and resources.

#### Additional access management services
-   **AWS IAM Identity Center:** Centralizes identity and access management across AWS accounts and applications, supports federated identity management.
-   **AWS Secrets Manager:** Securely manages, rotates, and retrieves database credentials, API keys, and other secrets.
-   **AWS Systems Manager:** Centralized view of nodes, automates registry edits, user management, and security patching.

### Protecting Networks and Applications

#### Network and application attacks
-   **DoS (Denial of Service) attacks:** Attacker floods a web application with excessive network traffic.
-   **DDoS (Distributed Denial of Service) attacks:** Attacker uses multiple infected computers (zombie bots) to send excessive traffic.

#### AWS network and application protection
AWS automatically protects against low-level, brute-force attacks through its built-in infrastructure.
-   **AWS protection through infrastructure:** Security groups, Elastic Load Balancing (ELB), AWS Regions.
-   **AWS protection through services:**
    -   **AWS Shield:** Protects against DDoS attacks (Standard - free, Advanced - paid).
    -   **AWS WAF (Web Application Firewall):** Monitors network requests and checks against web access control lists (web ACLs).

### Data Protection

#### Data encryption
-   **Encryption basics:** Lock and key mechanism to secure data.
-   **Types of data encryption:**
    -   **Data encryption at rest:** Data is idle (e.g., stored in a database).
    -   **Data encryption in transit:** Data is moving between locations (e.g., using SSL/TLS certificates).

#### AWS data protection
-   **AWS built-in data protection:** Amazon S3 (default encryption), Amazon EBS (encryptable volumes/snapshots), Amazon DynamoDB (server-side encryption).
-   **AWS data protection services:**
    -   **AWS Key Management Service (AWS KMS):** Create and manage cryptographic keys.
    -   **Amazon Macie:** Monitors sensitive data at rest in Amazon S3 using ML and automation.
    -   **AWS Certificate Manager (ACM):** Centralizes management of SSL/TLS certificates for data encryption in transit.

### Detecting and Responding to Security Incidents
-   **Amazon Inspector:** Runs automated security assessments for EC2 instances, containers, and Lambda functions, identifying vulnerabilities.
-   **Amazon GuardDuty:** Provides intelligent threat detection by continuously monitoring account metadata and network activity, using ML to identify threats.

## MODULE 10: Monitoring, Compliance, and Governance in the AWS Cloud

### Introduction to Governance and Compliance Progression

To effectively monitor your Amazon Web Services (AWS) Cloud solutions, you need ways to provide insights into resource utilization, identify potential issues, and facilitate proactive problem resolution.

The progression you generally want to use is as follows:

1. **Securing systems** - Protect data, systems, and infrastructure from unauthorized access, use, disclosure, disruption, modification, or destruction
2. **Monitoring activities** - Continuously observe and analyze system activity, network traffic, and security events to detect potential threats or anomalies  
3. **Conducting audits** - Periodically review and assess the effectiveness of security controls and check that all requirements are met and security policies and procedures are adhered to
4. **Ensuring compliance** - Help ensure that an organization's security practices and controls meet the requirements of relevant regulations, industry standards, and contractual obligations

### Introduction to Monitoring

Monitoring your cloud resources is important. It provides a way for you to continuously observe and analyze system activity, network traffic, and security events to detect potential threats or anomalies. Monitoring and observability are critical components for ensuring the security, availability, reliability, and performance of your cloud-based workloads and data.

Monitoring is performed using real-time monitoring tools, log collection and analysis, and dashboards.

### Amazon CloudWatch

**Watch over your resources and applications**

CloudWatch monitors your AWS resources and the applications that you run on AWS in real time. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health. CloudWatch does more than just monitor. It has several features that work together:

- **CloudWatch metrics** - CloudWatch collects metrics from all your AWS resources, applications, and services that run on AWS and on-premises servers
- **CloudWatch alarms** - With CloudWatch alarms, you can define thresholds on CloudWatch metrics and send notifications or automatically make changes to the resources. For example: "Trigger if CPUUtilization > 80% for 5 minutes". This threshold tells the alarm when to consider something abnormal.
- **CloudWatch dashboards** - Dashboards are customizable home pages in the CloudWatch console that you can use to monitor your resources in a single view.
- **CloudWatch logs** - CloudWatch Logs centralize the logs from all of the systems, applications, and AWS services that you use.

**Benefits:** CloudWatch helps you visualize and analyze your resources, operate efficiently with automation, use an integrated view, proactively monitor, and gain insights.

**Use case:** It can be used to monitor and troubleshoot infrastructure.

**Example:** A retail company is using CloudWatch features to monitor their application running on Amazon Elastic Compute Cloud (Amazon EC2) instances. CloudWatch automatically collects metrics, like utilization, on the EC2 instances. The company sets up CloudWatch to collect logs on the application performance. They also have alarms for when the Amazon EC2 utilization gets too high for an extended period. They even have an action configured to automate and scale up the number of EC2 instances when the alarm sounds. Finally, they create a custom dashboard to visualize everything all in one place. Now they can analyze the logs to gain insights on performance issues or application errors.

### AWS CloudTrail

CloudTrail tracks user activity and API usage in the AWS Cloud, on premises, and even with other cloud providers. CloudTrail provides a detailed history of API calls, so you can track changes and identify who made them and when. This helps you understand what actions were taken on your AWS resources.

**Benefits:** CloudTrail provides auditing, security monitoring, and operational troubleshooting. It also helps you prove compliance and improve your security posture.

**Use cases:** It can be used for compliance and auditing, identifying security incidents, troubleshooting operational issues.

#### CloudTrail Features

- **CloudTrail events** - CloudTrail events capture details about actions performed within your AWS account, such as API calls, console actions, or other activities. Event history provides a viewable, searchable, downloadable, and immutable record of the past 90 days of management events in an AWS Region. There are no CloudTrail charges for viewing event history.
- **CloudTrail logs** - CloudTrail monitors events and delivers those events as log files to your Amazon Simple Storage Service (Amazon S3) bucket. Because CloudTrail logs are securely stored, they can be used to prove compliance with regulations such as Payment Card Industry (PCI) and Healthcare Insurance Portability and Accountability Act (HIPAA).
- **CloudTrail Insights** - CloudTrail Insights analyzes your normal patterns of API call volume and API error rates. CloudTrail Insights also generates Insights events when API call volumes and error rates deviate from these normal patterns. You can enable CloudTrail Insights in your trails or event data stores to detect anomalous behavior and unusual activity.

### Compliance

#### Benefits of compliance with AWS

Compliance refers to your cloud resources and data adhering to relevant regulations, industry standards, and internal policies regarding security and data protection. AWS helps you meet compliance goals and requirements in the following ways:

- Inheriting the latest security controls that AWS uses on its own infrastructure
- Third-party validation for thousands of global requirements
- Streamlining and automating compliance
- On-demand compliance reports

#### AWS Artifact

AWS Artifact is a service that provides no-cost, on-demand access to AWS security and compliance reports and select online agreements.

**Benefits:** AWS Artifact helps you manage at scale, save time with on-demand access to compliance reports, and deploy with more confidence.

**Use cases:** It can be used to manage select online agreements and assess third-party security and compliance.

AWS Artifact consists of two types: AWS Artifact agreements and AWS Artifact reports.

##### AWS Artifact Agreements
Suppose that your company needs to sign an agreement with AWS regarding your use of certain types of information throughout AWS services. You can do this through AWS Artifact Agreements.

In AWS Artifact Agreements, you can review, accept, and manage agreements for an individual account and for all your accounts in AWS Organizations. Different types of agreements are offered to address the needs of customers who are subject to specific regulations, such as the Health Insurance Portability and Accountability Act (HIPAA).

##### AWS Artifact Reports
Next, suppose that a member of your company's development team is building an application and needs more information about their responsibility for complying with certain regulatory standards. You can advise them to access this information in AWS Artifact Reports.

AWS Artifact Reports provide compliance reports from third-party auditors. These auditors have tested and verified that AWS is compliant with a variety of global, regional, and industry-specific security standards and regulations. AWS Artifact Reports remains up to date with the latest reports released. You can provide the AWS audit artifacts to your auditors or regulators as evidence of AWS security controls.

### Auditing AWS Resources for Compliance

Most companies will want you to follow specific configuration guidelines for your different AWS resources. This means that you will want a way to assess and audit the resources that you create on AWS to help ensure that they meet those rules. That's where AWS Config can help.

#### AWS Config

AWS Config is a service that you can use to assess, audit, and evaluate the configurations of your AWS resources.

**Benefits:** AWS Config helps evaluate configurations against a desired state, manage resource configuration changes, and simplify troubleshooting and remediation.

**Use cases:** It can be used to continually audit security monitoring and analysis and to streamline operational troubleshooting and change management.

#### AWS Audit Manager

Audit Manager is a service that continually audits your AWS usage to simplify risk and compliance assessment. It helps collect evidence and manage audit data.

**Benefits:** Audit Manager saves time with automated evidence collection, streamlines collaboration across teams, and helps ensure integrity of audits with read-only permissions.

**Use case:** It can be used to automate evidence collection, continually audit to assess compliance, and deploy internal risk assessments.

### AWS Organizations

As companies grow and scale, the management and governance of disparate AWS accounts can be a challenge. That's where AWS Organizations can help.

Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources. It helps you manage policies for groups of accounts and automate account creation.

**Benefits:** Organizations provides several benefits like quickly scaling your environment by programmatically creating new AWS accounts for resources and teams. It also helps by simplifying permission management through SCPs and managing and optimizing costs across your AWS accounts and resources.

**Use cases:** It can be used for automating AWS account creation, providing tools and access for your security teams, controlling user access to designated services, and sharing common resources across accounts.

#### Key concepts of Organizations

An organization is a collection of AWS accounts that you can manage centrally and organize into a hierarchical, tree-like structure with a root at the top and organizational units (OUs) nested under the root. Each account can be located directly in the root or placed in one of the OUs in the hierarchy.

##### Definition of terms

- **AWS Organizations** - Used to consolidate and manage multiple AWS accounts within a central location. When you create an organization, it automatically creates a root, which is the parent container for all the accounts in your organization.
- **Management account** - The central AWS account that creates and manages the organization. It's responsible for overall control and governance.
- **Organizational unit (OU)** - A logical grouping of accounts in an AWS Organization. OUs can contain member accounts or nested OUs.
- **Service control policies (SCP)** - A policy that lets you place restrictions on the AWS services, resources, and individual API actions that users and roles in each account can access. SCPs can be applied to either OUs or individual member accounts.
- **Member account not in an OU** - If you have a member account that has unique requirements that do not overlap with those of an organizational unit, you can add them to the organization. They do not have to be placed under an OU. This account can still take advantage of benefits such as consolidated billing.

### Governance

As an organization scales up, they could have difficulty governing the services and accounts, including the new AWS accounts, the AWS services they choose, and even the software licenses.

#### AWS Control Tower

AWS Control Tower is a service you can use to enforce and manage governance rules for security, operations, and compliance at scale across all your organizations and accounts in the AWS Cloud.

**Benefits:** AWS Control Tower can help you save time while providing governance. It uses preconfigured controls, which can help you to quickly set up multi-account environments, automation with built-in governance, and integration of third-party software at scale.

**Use cases:** Use AWS Control Tower to quickly deploy applications and provision compliant AWS accounts.

##### AWS Control Tower features

- **Dashboard** - The AWS Control Tower dashboard provides continuous oversight to see provisioned accounts across your enterprise. AWS Control Tower also has controls for policy enforcement and can help detect noncompliant resources.
- **Account Factory** - The AWS Control Tower Account Factory is a configurable account template that standardizes the provisioning of new accounts.
- **Controls** - Controls, sometimes called guardrails, are high-level rules that provide governance for your overall AWS environment.
- **Landing zone** - A landing zone is a well-architected multi-account environment that's based on security and compliance best practices. It's the enterprise-wide container that holds all of the organizational units (OUs), accounts, users, and resources you want to regulate for compliance.

#### AWS Service Catalog

With Service Catalog, you can create, share, and organize from a curated catalog of AWS resources. You can deploy baseline networking resources and security tools for new AWS accounts so you can govern consistently.

**Benefits:** Service Catalog saves time by making it quick to find and deploy approved, self-service cloud resources. It also helps you stay agile while improving governance over resources across multiple accounts.

**Use cases:** Use it to provision resources across AWS accounts, apply access controls, and accelerate provisioning of continuous integration and continuous delivery (CI/CD) pipelines.

When companies move from on premises to the cloud, they must decide how to handle their software licenses. With AWS Bring Your Own License model (BYOL), they can use existing software licenses purchased directly from vendors, such as Microsoft, on AWS services like Amazon EC2 Dedicated Hosts and Amazon WorkSpaces. This can result in significant cost savings compared to purchasing licenses directly from AWS. By using BYOL with existing licenses in a cloud environment, you get flexibility and potential optimized costs. The service that helps you manage and govern your software licenses is AWS License Manager.

#### AWS License Manager

License Manager is a service that helps you manage your software licenses and fine-tune your licensing costs.

**Benefits:** License Manager helps with visibility and control, tracking and managing licenses, and reducing the risk of noncompliance with licenses.

**Use cases:** Use it to streamline license management and to simplify the Microsoft License Mobility through Software Assurance experience. You can also use it to automate the distribution and activation of software entitlements across AWS accounts for end users.

Managing software licenses can be time consuming, costly, and difficult to enforce. License Manager helps reduce the risk of noncompliance by enforcing license usage limits, blocking new launches, and using other controls.

#### Governance Services Review

- **AWS Control Tower** - A service you can use to set up and govern a secure, compliant, multi-account AWS environment based on best practices
- **Service Catalog** - A service you can use to create, share, and organize AWS services and resources from a curated catalog that you define
- **License Manager** - A service that helps you manage your software licenses and fine-tune licensing costs

### Health of your AWS Cloud resources

#### Notifications on service events

AWS Health is the go-to data source for events and changes affecting the health of your AWS Cloud resources. It notifies you about service events, planned changes, and account notifications to help you manage and take actions.

#### AWS Health Dashboard

With AWS Health Dashboard, you can view account-specific health information and get AWS Health event updates. You can also use AWS Health programmatically using the AWS Health API, which is available with AWS Premium Support.

**Benefits:** AWS Health Dashboard provides valuable information as a data source for events and changes. It gives you timely and actionable guidance to remedy issues. It also helps manage service health and is integrated and automated to use at scale.

**Use cases:** Use AWS Health Dashboard to view account-specific health information. You can also use it to plan for lifecycle events or troubleshoot an incident.

### AWS Trusted Advisor

**Continuously evaluating your AWS environment to improve security, cost optimization, performance, and resilience**

#### Trusted Advisor

Optimizing large scale cloud deployments is extremely important to do, and it's not a one-time thing. You must look for ways to optimize for costs, performance, security, and resilience. With AWS Trusted Advisor, you can continuously evaluate your AWS environment by using best practice checks across several categories. All AWS Support plans include access to dozens of Trusted Advisor checks. With Business Support and other advanced plans, you can benefit from hundreds of checks.

**Benefits:** Trusted Advisor helps you align with AWS best practices, prioritize recommendations, and optimize your AWS resources at scale.

**Use cases:** It can be used to optimize cost, efficiency, security, improve performance, and track service limits.

Although Trusted Advisor does check to optimize security, you might need help to check the fine-grained permissions of your AWS Identity and Access Management (IAM). IAM Access Analyzer can help meet your goals for least privilege access within your AWS environment.

#### IAM Access Analyzer

IAM Access Analyzer provides capabilities to set, verify, and refine permissions by analyzing external access and validating that your policies match your corporate security standards.

**Benefits:** IAM Access Analyzer provides benefits like refining permissions, validating IAM policies, helping you meet your least privilege goals, and automating IAM policy reviews.

**Use cases:** It can be used to set fine-grained permissions, verify who can access what, remediate unused access, and refine and remove broad access.

## MODULE 11: Pricing and Support

In these next lessons, you will learn about essential pricing concepts, tools, and strategies for effectively tracking and controlling your AWS spending.

### Three Key Concepts of How You Pay for AWS

#### Pay as you go
With pay as you go, you can adapt to changing business needs and reduce the risk of overprovisioning or missing capacity.

#### Save when you commit
For certain services, such as Compute services on AWS, Savings Plans offer savings over On-Demand prices when you commit to a 1-year or 3-year plan.

#### Pay less by using more
With AWS, you can realize important savings as your usage increases. For some services, pricing is tiered, meaning the more you use, the less you pay.

### Driving Factors of Cost

The pricing of AWS services varies based on several factors, such as service category or type, configuration, AWS Region, and which pricing model you choose. Refer to the pricing tab on a service's webpage for details on its specific pricing factors.

There are three fundamental drivers of cost with AWS: compute, storage, and outbound data transfer. These driving factors impact AWS service categories in different ways.

#### Compute
For compute resources, you pay by a certain span of time, like by the hour or by the second. Unless you've made a reservation for which the cost is agreed upon beforehand, you pay from the time you launch a resource until the time you stop the instance.

#### Storage
You can choose from a broad portfolio of storage solutions with deep functionality for storing, accessing, protecting, and analyzing data. Pricing for storage largely depends on how much storage you have provisioned or how much you are using.

For some storage options, such as Amazon Simple Storage Service (Amazon S3), storage cost is tiered. This means you can optimize storage costs based on how frequently and quickly you need to access data. With Amazon S3, consider the following six cost components when storing and managing customer data:

- Storage pricing
- Request and data retrieval pricing
- Data transfer and transfer acceleration pricing
- Data management and analytics pricing
- Replication pricing
- The price to process your data with Amazon S3 Object Lambda

#### Data transfer
In most cases, there is no charge for inbound data transfer or for data transfer between AWS services within the same Region. There are some exceptions, so be sure to verify data transfer rates before beginning.

**Outbound data transfer** is aggregated across services and then charged at the outbound data transfer rate. The more data you transfer, the less you pay per gigabyte. For data storage and transfer, you typically pay per gigabyte.

### AWS Pricing and Billing Services

Let's talk about billing options for AWS accounts: single or consolidated. With a single account, it's all encompassed in that one account. Use AWS services. Deploy workloads. Receive a bill for what you use. Rinse and repeat every month.

For consolidated account billing, it's ever so slightly more complex. With this approach, you use multiple AWS accounts. One is a primary and the others are subaccounts linked to the primary account.

#### AWS Organizations
AWS Organizations provides centralized management and governance of your AWS environment. Using AWS Organizations, you can create, group, and manage accounts. You can also apply security policies at the account level and consolidate billing with multiple accounts using a single payment method.

**Use cases:**
- Consolidate multiple AWS accounts into one central organization
- Implement organization-wide policies

#### AWS Billing and Cost Management dashboard
The AWS Billing and Cost Management dashboard centralizes cost management, showing current charges, usage, forecasts, and detailed breakdowns. It also provides tools to manage payments, view invoices, set budgets, and consolidate billing.

**Use cases:**
- Use helpful visualizations and billing reports of monthly AWS spend
- Set up and manage payment methods

#### AWS Budgets
AWS Budgets helps set custom budgets and sends alerts when costs, usage, or Savings Plans and Reserved Instances (RIs) utilization or coverage exceed defined thresholds.

**Use cases:**
- Set up alerts for when projected costs exceed predefined thresholds
- Forecast future expenses based on current usage trends

#### AWS Cost Explorer
AWS Cost Explorer helps visualize, analyze, and manage AWS costs and usage with interactive graphs, reports, and forecasts. It provides insights into spending patterns, trends, and Reserved Instance recommendations.

**Use cases:**
- Analyze historical spending trends to identify cost-saving opportunities
- Forecast future AWS costs based on current usage patterns to budget effectively

#### AWS Pricing Calculator
Another helpful tool is the AWS Pricing Calculator. The AWS Pricing Calculator is a web-based planning tool that you can use to create estimates. You input specific configurations such as instance types, storage options, and data transfer volumes. Then, based on your configurations, you receive a detailed cost breakdown to help you budget for your AWS resource allocation.

**Use cases:**
- Estimate potential costs before deployment
- Compare costs of different AWS services and configurations

### AWS Support Plans

| Feature | Basic Support | Developer Support | Business Support | Enterprise On-Ramp Support | Enterprise Support |
|----------|----------------|------------------|------------------|-----------------------------|--------------------|
| **Availability** | Included for all AWS customers | Recommended for experimenting or testing in AWS | Recommended minimum tier for production workloads in AWS | Recommended for production and business-critical workloads in AWS | Recommended for business-critical and mission-critical workloads in AWS |
| **Access** | Includes access to documentation, whitepapers, and AWS re:Post | Response times:<br>• < 24 hours for general guidance<br>• < 12 hours when systems impaired | Response times:<br>• *Includes previous plan response times*<br>• < 4 hours when production system impaired<br>• < 1 hour when production system is down | Response times:<br>• *Includes previous plan response times*<br>• < 30 minutes when business-critical system is down | Response times:<br>• *Includes previous plan response times*<br>• < 15 minutes when business- or mission-critical system is down |
| **Trusted Advisor** | Core AWS Trusted Advisor checks | Core AWS Trusted Advisor checks | Full set of AWS Trusted Advisor checks | Full set of AWS Trusted Advisor checks | Full set of AWS Trusted Advisor checks and prioritized recommendations by AWS account team |
| **Technical Account Management** | Not included | Not included | Not included | A pool of technical account managers (TAMs) provide proactive guidance | A designated TAM provides consultative architectural and operational guidance |

### AWS Marketplace and AWS Partners

#### AWS Marketplace
The AWS Marketplace is a digital catalog that includes thousands of software listings from independent software vendors. You can use AWS Marketplace to find, test, and buy software that runs on AWS. For each listing in AWS Marketplace, you can access detailed information on pricing options and reviews from other AWS customers. Solutions and services offered in the AWS Marketplace include the following:

- **Software as a service (SaaS):**
  - Business applications such as project management tools
  - Marketing tools such as customer engagement platforms
  - Collaboration tools such as file sharing services

- **Machine learning (ML) and AI:**
  - Prebuilt models for image recognition, natural language processing, and more
  - ML algorithms for training custom models

- **Data and analytics:**
  - Business intelligence platforms for visualization and reporting
  - Data integration tools

#### AWS Partner Network
The AWS Partner Network (APN) is a global community that uses AWS technologies, programs, expertise, and tools to build solutions and services for customers. Together, partners and AWS provide innovative solutions, solve technical challenges, and deliver customer value.

You can work with AWS Partners to create or use specialized solutions that are tailored to your unique business needs. For example, a retail company might use AWS to host their website. They could then work with an AWS Partner who specializes in advanced analytics and machine learning to improve customer personalization on that website.

- **Funding benefits:** As businesses join the AWS Partner Network and participate in specific programs available to AWS Partners, they can unlock various funding benefits to help build, market, and sell with AWS
- **AWS Partner events:** AWS Partner events include webinars, virtual workshops, and in-person learning opportunities. You can use AWS Partner events to network with other partners, learn more about new or current offerings, and collaborate with AWS experts.
- **AWS Partner Training and Certification:** Take advantage of unique, partner-centered offerings from AWS Training and Certification. From certification to a specific service or learning objective, the AWS Partner training portfolio has numerous opportunities to upskill your cloud knowledge.

## MODULE 12: Migrations

AWS helps guide companies through the cloud migration process. This process has **three main phases**, each supported by AWS tools and services.

### Introduction to Migration

### 1. Assess Phase

**Goal:** Understand your current environment and build the business case for moving to AWS.

**Key activity:** Assess readiness and costs.
**Main tool:** **Migration Evaluator** – analyzes your existing setup and estimates AWS costs.

### 2. Mobilize Phase

**Goal:** Prepare your organization, people, and resources for migration.

**Key activities:** Plan your migration and discover on-premises systems.
**Main tools:**

* **Application Discovery Service** – finds your servers, applications, and dependencies.
* **Migration Hub** – central place to plan and track your migration.

### 3. Migrate and Modernize Phase

**Goal:** Move workloads to AWS and modernize them.

**Key tools:**

* **Application Migration Service** – moves applications to AWS with minimal downtime.
* **Database Migration Service (DMS)** – migrates databases.
* **Data transfer tools:** **DataSync**, **Transfer Family**, and **Snow Family** for online or offline data transfer.

### AWS Cloud Adoption Framework (AWS CAF)

**Purpose:**
The **AWS Cloud Adoption Framework (CAF)** helps organizations plan and manage their migration by providing best practices, structure, and guidance. It ensures alignment between business goals, people, and technology during the move to AWS.

**Benefits:**

* Reduces business risk and migration complexity
* Improves efficiency, productivity, and customer experience
* Supports innovation and cost reduction
* Aligns teams and strategies across the organization

**Use cases:**

* Migrating legacy systems and infrastructure
* Optimizing operations and business processes
* Enabling new cloud-based business models

### AWS CAF Perspectives

The AWS CAF organizes migration planning into **six key perspectives** — each focused on a different part of the organization.

#### 1. Business Perspective

Ensures IT efforts align with business goals and investments.
**Key roles:** Business managers, finance teams, strategy stakeholders.

#### 2. People Perspective

Focuses on change management, training, and organizational readiness.
**Key roles:** HR, staffing, people managers.

#### 3. Governance Perspective

Aligns IT and business strategies while managing risk and compliance.
**Key roles:** CIOs, program managers, enterprise architects.

#### 4. Platform Perspective

Guides the technical design of your AWS environment.
**Key roles:** CTOs, IT managers, solutions architects.

#### 5. Security Perspective

Ensures data protection, compliance, and visibility in the cloud.
**Key roles:** CISOs, IT security managers, analysts.

#### 6. Operations Perspective

Defines how you run and support workloads after migration.
**Key roles:** IT operations and support managers.

### Seven Migration Strategies

When migrating applications to the cloud, organizations commonly use **seven strategies**. The choice depends on factors like application complexity, business goals, timeline, and available resources. Often, a mix of strategies is used across an organization's application portfolio.

#### 1. Relocate

Move applications to the cloud **as-is** by changing their hosting location.
**Example:** Virtual machines or containers running on-premises are moved to the cloud.

#### 2. Rehost (Lift-and-Shift)

Move applications to the cloud **without changing them**.
**Use case:** Large legacy migrations where speed and scalability are important. Most applications in such migrations are rehosted.

#### 3. Replatform (Lift, Tinker, and Shift)

Make **small optimizations** to applications while moving them to the cloud.
**Goal:** Gain benefits like cost savings or performance improvements without changing the core architecture.

#### 4. Refactor (Re-architect)

Redesign applications to **fully leverage cloud features**.
**Goal:** Add features, scale, or improve performance that isn't possible in the current environment.

#### 5. Repurchase

Move from traditional licensed software to **SaaS (Software-as-a-Service)**.
**Example:** Replacing an on-premises CRM with a cloud-based CRM like Salesforce.

#### 6. Retain

Keep certain applications **on-premises** temporarily.
**Use case:** Critical apps that need major changes or aren't ready to migrate yet.

#### 7. Retire

Remove applications that are **no longer needed**.
**Goal:** Simplify your portfolio and reduce costs.

**Summary:**
These strategies help organizations **plan the best migration approach** for each application, balancing speed, cost, and business goals.

### Migration Services and Tools

When a business wants to move its applications and data to the cloud (for example, from their own servers to AWS), that process is called a **migration**. AWS provides **tools and services** to help through each stage of the migration journey.

#### The Cloud Migration Journey

There are **three main phases**:

1. **Assess** – Understand what you have and build a business case for moving.
2. **Mobilize** – Plan your migration and get everything ready.
3. **Migrate and Modernize** – Move your applications and data to the cloud and improve them.

#### 1. Assess Phase

**Goal:** Understand your current setup and estimate what moving to the cloud will cost.

##### Migration Evaluator

* **What it does:** Analyzes your current IT environment (servers, databases, licenses, etc.) and helps estimate cloud costs.
* **Why it's useful:** Removes guesswork. Shows cost scenarios and how to reuse existing software licenses to save money.
* **Use cases:**
  * See what servers and software you're using now.
  * Understand dependencies between servers.
  * Get a cost estimate for different migration options.

**In short:** Migration Evaluator = your cost and readiness calculator for the cloud.

#### 2. Mobilize Phase

**Goal:** Plan and organize your migration.

Here, you often use two tools:

##### Application Discovery Service

* **What it does:** Scans your current servers and finds what applications are running, how they connect, and how they perform.
* **Why it's useful:** Gives you a complete picture of what's on-premises before you move.
* **Use cases:**
  * Inventory all your servers and applications.
  * Map dependencies (which app talks to which database).
  * Plan migration order and steps.

**In short:** Application Discovery Service = your "X-ray machine" for existing systems.

##### Migration Hub

* **What it does:** Central place to manage and track all your migration activities.
* **Why it's useful:** Gives you visibility into every phase — from discovery to completion — and offers built-in guidance.
* **Bonus:** It's free to use.
* **Use cases:**
  * Track progress of multiple migration projects.
  * Collaborate with teams.
  * Get AWS recommendations for modernization.

**In short:** Migration Hub = your migration command center.

#### 3. Migrate and Modernize Phase

**Goal:** Actually move your apps and improve them while minimizing disruption.

##### Application Migration Service

* **What it does:** Copies (replicates) your applications from on-premises servers to AWS automatically.
* **Why it's useful:** You can migrate apps without taking them offline, saving time and reducing downtime.
* **Use cases:**
  * Move apps from physical servers or other clouds to AWS.
  * Modernize applications during migration.
  * Move workloads between AWS Regions.

**In short:** Application Migration Service = the "mover" that safely transfers your applications to AWS.

### Migration and Modernization Competency Partners

If you don't have in-house experts, AWS has certified partners — companies that specialize in helping customers migrate and modernize workloads. You can find partners for specific stages (like assessment, planning, or modernization).

**In short:** Competency Partners = expert helpers for your migration journey.

### Database Migrations

AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.

### Transferring Data to and from the AWS Cloud

#### Online Data Transfer

When moving data to AWS, you can transfer it **online** using several AWS services. Key things to think about:

* **Security:** Keep data safe.
* **Data validation:** Make sure nothing is lost.
* **Scheduling:** Choose the right time to move data.
* **Bandwidth:** Check your network speed.

##### AWS DataSync

**Purpose:** Moves large amounts of data quickly and securely between on-premises systems and AWS (like Amazon S3).

**Benefits:**

* Fast and automated
* Secure and reliable
* Can schedule transfers and control bandwidth

**Use cases:** Moving, archiving, or syncing data between your data center and AWS.

**In short:** DataSync = fast and automated data transfer.

##### AWS Transfer Family

**Purpose:** Handles **file transfers** to and from AWS using common protocols like **FTP**, **SFTP**, and **FTPS**.

**Benefits:**

* Easy to set up
* Secure (encrypted and authenticated)
* Scales automatically

**Use cases:** Sharing files, replacing old file servers, or connecting business systems to AWS.

**In short:** Transfer Family = secure and simple file transfers.

##### AWS Direct Connect

**Purpose:** Creates a **private network connection** between your data center and AWS.

**Benefits:**

* Fast and reliable
* Lower network costs
* Consistent performance

**Use cases:** Large or sensitive data transfers, hybrid cloud setups.

**In short:** Direct Connect = private, high-speed connection to AWS.

#### Transferring Data Offline

##### Why Transfer Data Offline?

Most customers move data **online**, but sometimes **offline transfer** is better — for example:

* Limited or no internet connection
* Remote locations
* Very large data volumes (petabytes) that would take too long to send online

In these cases, AWS provides **physical devices** that you can fill with data and ship back to AWS for upload.

##### AWS Snowball Edge Storage Optimized

**Purpose:**
A physical device used to move large amounts of data to AWS **without the internet**.

**How it works:**
You order a Snowball Edge device → copy your data onto it → ship it back to AWS → AWS uploads your data to the cloud.

**Benefits:**

* High-speed data transfer (gigabytes per second)
* Large storage capacity
* Works even when offline
* Rugged and secure

**Use cases:**

* Moving petabytes of data from remote sites
* Temporary edge computing (processing data locally before sending it to AWS)
* Secure, offline data migration

**In short:**
**Snowball Edge = portable, high-speed device for offline data transfer.**

## MODULE 13: Well-Architected Solutions

AWS offers a wide range of **purpose-built services** for specific use cases. This module covers four types of specialized services:

1. Development Services
2. Business Application Services
3. End-User Computing Services
4. IoT Services

### 1. Development Services

These services help developers **build, deploy, and manage applications** on AWS.

#### AWS CodeBuild

* Fully managed CI service that compiles code, runs tests, and creates deployment packages.
* Automatically scales; you pay only for build time.

#### AWS CodePipeline

* Fully managed CI/CD service that automates build, test, and deployment.
* Streamlines software delivery and reduces the need for server management.

#### AWS X-Ray

* Tracing and debugging tool for analyzing application performance.
* Helps identify bottlenecks and optimize applications.

#### AWS AppSync

* Fully managed GraphQL service to connect frontend apps with multiple backend data sources.
* Allows clients to request only the data they need.

#### AWS Amplify

* Framework for building and managing secure full-stack applications.
* Provides features like authentication, APIs, storage, and hosting with minimal infrastructure setup.

### 2. Business Application Services

These services support **business operations** such as customer service and email management.

#### Amazon Connect

* AI-powered contact center service for scalable customer service.
* Features call routing, recording, analytics, and integration with AWS services.

#### Amazon Simple Email Service (SES)

* Scalable email service for high-volume transactional and marketing emails.
* Helps optimize delivery and engagement.

### 3. End-User Computing Services

These services provide **remote access to desktops and applications**.

#### Amazon AppStream 2.0

* Streams applications from the cloud to any device.
* No need for high-end local hardware; supports SaaS apps and desktop conversions.

#### Amazon WorkSpaces

* Cloud-based virtual desktops accessible from any internet-connected device.
* Employees can work as if on a physical office PC.

#### Amazon WorkSpaces Secure Browser

* Managed remote browser for secure access to websites and SaaS apps.
* No need for client software, VPN, or extra infrastructure.

### 4. IoT Services

IoT connects physical devices to the cloud, allowing **remote monitoring and control**.

#### AWS IoT Core

* Securely connects devices to cloud applications.
* Supports data ingestion, processing, and action on device data with encryption and multiple protocols.

**Example IoT Solutions:**

* Smart security cameras: send alerts to your phone
* Smart pet feeders: control feeding remotely
* Smart irrigation systems: adjust watering based on weather and soil conditions

---

## Course Summary

This comprehensive AWS Cloud Practitioner course has covered the essential concepts and services needed to understand cloud computing on AWS. From basic cloud concepts to advanced services like AI/ML, security, monitoring, and migrations, you now have a solid foundation in:

- **Core AWS Services**: Compute (EC2), Storage (S3), Networking (VPC), and Databases (RDS, DynamoDB)
- **Security and Compliance**: IAM, encryption, monitoring, and governance
- **Cost Management**: Pricing models, budgeting, and optimization strategies
- **Migration Strategies**: Planning and executing cloud migrations
- **Specialized Services**: AI/ML, IoT, development tools, and business applications

This knowledge prepares you for real-world cloud implementations and the AWS Cloud Practitioner certification exam.