name: Intro-to-Terraform-Cloud
class: center,middle,title-slide
count: false
<br><br>
![:scale 60%](images/tf_aws.png)
<br><br>
# Intro to Terraform Cloud on AWS

---
layout: true

.footer[
- Copyright © 2019 HashiCorp
- ![:scale 100%](https://hashicorp.github.io/field-workshops-assets/assets/logos/HashiCorp_Icon_Black.svg)
]

---
name: Introductions
# Introductions
- Your Name
- Job Title
- Automation Experience
- Favorite Text Editor

---
name: tfc-link-to-slide-deck
# The Slide Deck
<br><br><br>
.center[
Follow along on your own computer at this link:

# https://git.io/JeM0d
]

---
name: Table-of-Contents
class: col-2
# Table of Contents

<div>
1. OSS vs. Cloud/Enterprise<br>
🌥️ Terraform Cloud Overview<br>
👨🏽‍🏫 Review the Basics<br>
🔗 Configure Remote State<br>
<hr>
2. Security and RBACs<br>
🔐 Protect Sensitive Variables<br>
🛡️ Work With Access Controls<br>
<hr>
3. VCS & Policy Enforcement<br>
🕸️ Connect to VCS<br>
👨🏻‍🤝‍👨🏿 Collaboration with VCS<br>
👮 Sentinel Policy Enforcement<br>
<hr>
4. Terraform Modules & API<br>
⚙️ Private Module Registry<br>
🏗️ API Driven Workflows<br>
<hr>
5. Extra Resources<br>
⚗️ Bonus Lab<br>
🌐 Useful Links
</div>

---
name: TFE-Chapter-1
class: title

# Chapter 1
## Terraform OSS, Cloud and Enterprise

---
name: terraform-user-journey
# The Terraform User Journey

---
name: infrastructure-as-code
# Infrastructure as Code

---
name: multi-cloud-compliance
# Multi-Cloud Compliance and Management

---
name: self-service-infra
# Self-Service Infrastructure

---
name: why-tfc-1
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

???
**Until now we've been using only open source features. Sooner or later you'll reach a point where you want more tools for governance and collaboration. Terraform open source is great for small environments and developers, but when you need multiple people or teams to collaborate on the same infrastructure, Terraform Cloud features can help.**

---
name: why-tfc-2
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS

???
**As your organization begins to standardize on Terraform, you'll have different types of users. Most of you will become terraform experts, but there may be others who just want to build things. They can use the terraform code that folks like you have written. To make this process easy, we have a web application. You log on, click a button, and out pops your infrastructure.**

---
name: why-tfc-3
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows

???
**For our more advanced users we have a fully featured RESTful API. This is useful for programmatic access to terraform features. You can drive terraform plan and apply commands using an API interface. If you have a CI/CD pipeline you can automate your terraform builds as part of your process.**

---
name: why-tfc-4
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management

???
**Terraform enterprise also provides safe and secure storage for your state files. Instead of having that important state file stored on someone's laptop, now it is safely stored in the Terraform Cloud application. Only those who need access to the state file can see it, and it is protected from being overwritten or corrupted.**

---
name: why-tfc-5
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry

???
**Eventually you'll have a library of Terraform code that you might like to share and publish for other users and teams in your company. The private module registry makes this easy. You build reusable modules that build infrastructure according to standards, and then publish them for your users. This can help with enforcing security policies and build standards.**

---
name: why-tfc-6
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry
* Sentinel policy enforcement

???
**TFE also comes with a policy enforcement engine that can ensure that your users don't build things they shouldn't build, or configure them in the wrong way. For example, you might wish to prevent users from opening network ports to the internet, or from building too many virtual machines. All of these types of rules can be expressed using our Sentinel policy enforcement engine. Sentinel policies prevent users from doing bad things, *before* they provision to the cloud.**

---
name: why-tfc-7
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry
* Sentinel policy enforcement
* Single Sign-On

???
**Terraform Enteprise also supports single sign-on using your own SAML provider. This allows you to quickly map users into your organization's teams and workspaces so they can become productive right away.**

---
name: why-tfc-8
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry
* Sentinel policy enforcement
* Single Sign-On
* Secure API credentials

???
**Terraform enterprise can store and encrypt your cloud credentials, passwords or any other sensitive data. These credentials are stored safely inside of a Vault instance that runs inside of TFE.**

---
name: terraform-cloud-what-is-it
# Terraform Cloud - SaaS for Infrastructure

???
**During the next lab you'll sign up for a free Terraform Cloud account which we'll use for the remainder of this training.**
TODO: Add an image or something to make this slide more interesting

---
name: terraform-cloud-enterprise
# Terraform Cloud or Terraform Enterprise?
**[Terraform Cloud](https://app.terraform.io/signup)** is a hosted application that provides features like remote state management, API driven runs, policy management and more. Many users prefer a cloud based SaaS solution because they don't want to maintain the infrastructure to run it.

**[Terraform Enterprise](https://www.hashicorp.com/go/terraform-enterprise)** is the same application, but it runs in your cloud environment or data center. Some users require more control over the Terraform Cloud application, or wish to run it in restricted networks behind corporate firewalls.

The feature list for these two offerings is nearly identical. We will be using Terraform Cloud accounts for our lab exercises today.

---
name: review-the-basics
class: title
# Review the Basics

---
name: review-basic-terraform-commands
# Terraform Command Review

Let's review some of the most useful terraform commands:

```bash
terraform init    # Initialize the current directory
terraform plan    # Dry run to see what Terraform will do
terraform apply   # Apply the Terraform code and build stuff
terraform destroy # Destroy what was built by Terraform
terraform refresh # Refresh the state file
terraform output  # View Terraform outputs
terraform graph   # Create a DOT-formatted graph
```

---
name: what-is-a-workspace
# Terraform Workspaces

---
name: our-application
# HashiCat Application - Kittens as a Service

.center[![:scale 60%](images/meow_world.png)]

---
name: terraform-state
class: title
# Terraform State
## Infrastructure Lifecycle Management

---
name: tf-state-file
# Terraform State
```tex
  "primary": {
      "id": "i-0413fe5b4509d65b1",
      "attributes": {
          "ami": "ami-06f2f779464715dc5",
```

Terraform stores information about the resources it has built in a **state file**. This important file contains all of the data that Terraform needs to change, update, and delete infrastructure.

By default, the state file is stored in your local workspace.

---
name: why-not-local-state
class: img-left-full
# Oops, I Lost My State File

![](images/dog_homework.jpg)

The local state file has some disadvantages:

* Sometimes contains secrets or sensitive data
* Can't collaborate because the file is on someone's laptop
* Risk of losing or deleting the state file
* No centralized record keeping

---
name: tfcloud-remote-state
# Terraform Cloud Remote State
Terraform Cloud Remote State is free and available to all users. The requirements to get it set up and working are below.

* Free or paid Terraform Cloud account
* A **`.terraformrc`** (Unix/Linux) or **`terraform.rc`** (Windows) config file
* User access token stored in your config file
* Remote backend config file, name it **`remote_backend.tf`** for convenience.

**WARNING** - do not copy your Terraform Cloud API token to github!

???
Please raise your right hand and repeat after me:

"I will never store credentials in my terraform workspace."

---
name: lab-exercise-0
# 👩‍💻 Getting Started with Instruqt
<br><br>
[Instruqt](https://instruqt.com) is the HashiCorp training platform. Visit the link below for a short tutorial, or if you're already familiar with Instruqt you can skip to the next slide.

[https://instruqt.com/instruqt/tracks/getting-started-with-instruqt](https://instruqt.com/instruqt/tracks/getting-started-with-instruqt)

---
name: lab-exercise-1
# 👩‍💻 Lab Exercise: Configure Remote State
<br><br>
In this lab you'll set up a free Terraform Cloud account and configure your account for remote execution of Terraform commands.

Your instructor will provide the URL for the first lab environment.

🛑 **STOP** after you complete the first quiz.

---
name: TFE-Chapter-2
class: title

# Chapter 2
## Security and Compliance in Terraform Cloud

---
name: where-are-your-creds
# Where Are Your API Keys?
Terraform requires credentials in order to communicate with your cloud provider's API. These API keys should never, ever be stored directly in your terraform code. Config files and environment variables are a better option, but the credentials still live on your workstation, usually stored in plaintext.
---
name: a-better-way-creds
# A Better Way to Store Sensitive Data

Terraform Cloud can safely store your credentials and encrypt them for you. You can use this encrypted storage for passwords, TLS Certificates, SSH keys or anything else that should not be lying around in plain text.

.center[![:scale 60%](images/aws_encrypted_vars.png)]

---
name: terraform-rbac
# Role Based Access Controls (RBAC)
.center[![:scale 40%](images/teams_list.png)]

Terraform Cloud is a multi-tenanted application that supports fine-grained access controls. You can create multiple organizations, each containing its own teams and users.

---
name: what-is-sentinel
# What is Sentinel?
```hcl
# Restricting region in AWS
aws_region_valid = rule {
  all region_values as rv {
	rv == "us-east-1"
  }
}
```

Sentinel is HashiCorp's policy enforcement language. Sentinel policies are checked after **`terraform plan`** is run. Sentinel will intercept bad configurations *before* they go to production, not after.

---
name: lab-exercise-2
# 👩‍💻 Lab Exercise: Secure Variables and RBACs
<br><br>
In this lab you'll learn how to store and encrypt sensitive variables and set up role-based access controls (RBACs).

Continue the lab exercises from where you left off.

🛑 **STOP** after you complete the second quiz.

---
name: TFE-Chapter-3
class: title

# Chapter 3
## Terraform Cloud and Version Control

---
name: whats-a-vcs
# What is a Version Control System (VCS)?
.center[![:scale 80%](images/tfc-vcs.webp)]
Version control systems are applications that allow users to store, track, test, and collaborate on changes to their infrastructure and applications. Terraform Cloud integrates with most common Version Control Systems.

---
name: tfc-infra-as-code-workflow
# Infrastructure as Code
<br><br>
Terraform Cloud can directly integrate with source code repos in GitHub Enteprise, Gitlab, and Bitbucket. This allows you to build simple DevOps workflows with code reviews, testing and approvals.

Until now all our code changes have been done on our workstation. Let's upgrade our workspace to use the repository fork we created earlier.

???
TODO: Add an image to this slide.

---
name: vcs-driven-workflow
# Collaboration With VCS
.center[![:scale 100%](images/git_workflow_tests.png)]

When your Terraform code is stored in a version control system, you unlock extra features like pull requests, code reviews and testing. Here's an example showing the tests that run on our training lab repo.

You can configure rules like requiring tests to pass, code reviews, approvals and more. Let's do a code collaboration exercise.

---
name: lab-exercise-3
# 👩‍💻 Lab Exercise: Version Control and Sentinel
<br><br>
In this lab we'll cover Version Control System (VCS) integration, Sentinel Policy Enforcement, and the Private Module Registry.

Continue the lab exercises from where you left off.

🛑 **STOP** after you complete the third quiz.

---
name: TFE-Chapter-4
class: title

# Chapter 4
## Terraform Modules

---
name: private-module-registry
# TFE Private Module Registry
.center[![:scale 80%](images/aws_pmr.png)]

Terraform modules are reusable packages of Terraform code that you can use to build your infrastructure. Terraform Cloud includes a Private Module Registry where you can store, version, and distribute modules to your organizations and teams.

---
name: TFE-Chapter-5
class: title

# Chapter 5
## Extra Resources

---
name: Feedback-Survey
# Workshop Feedback Survey
<br><br>
.center[
Your feedback is important to us!

The survey is short, we promise:

# http://bit.ly/hashiworkshopfeedback
]

---
name: additional-resources-tfe
# Additional Resources
If you'd like to learn more about Terraform Enterprise or Terraform Cloud visit the links below:

Terraform Enterprise Product Page
https://www.hashicorp.com/products/terraform/

Why Consider Terraform Enterprise Over Open Source?
https://www.hashicorp.com/resources/why-consider-terraform-enterprise-over-open-source

Terraform Enterprise Docs
https://www.terraform.io/docs/enterprise/index.html

Terraform AWS Provider Documentation
https://www.terraform.io/docs/providers/aws/

Link to this Slide Deck
https://bit.ly/hashiazure
