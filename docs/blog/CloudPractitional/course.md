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