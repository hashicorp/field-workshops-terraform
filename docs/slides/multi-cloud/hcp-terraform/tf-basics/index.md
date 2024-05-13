name: tf-foundations-3
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# HCP Terraform Technical Enablement
## Terraform Foundations - 3

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
layout: true

background-image: url(../images/bkgs/HashiCorp-Content-bkg.png)
background-size: cover

.footer[

- Copyright © 2021 HashiCorp
]

---
exclude: true
name: slide-deck
class: img-left-full

![](../images/laptop.jpg)

<br><br><br>
.center[
Follow along at this link:

## https://hashicorp.github.io/field-workshops-terraform/slides/multi-cloud/hcp-terraform/tf-basics/
]

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Terraform Foundations
## Teraform Basics

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: agenda

# Table of Contents

<div>
1. <b>Terraform CLI</b><br>
2. <b>HCL</b><br>
3. <b>Resources / Data Sources</b><br>
4. <b>Variables</b><br>
5. <b>Interpolations</b><br>
6. <b>Outputs</b><br>
7. <b>Provsioners</b><br>
8. <b>Provider Authentication</b><br>
</div>

---
name: terraform-cli
# Terraform CLI Commands

.center[
![:scale 60%](../images/terraform-help.png)
]

???
Here is a screenshot of terraform CLI help which lists some of the CLI subcommands. We will look at a few in more detail in the next few slides

---
name: terraform-init
# Terraform init
```tex
*$ terraform init

Initializing provider plugins...
- Finding latest version of hashicorp/aws...
- Installing hashicorp/aws v3.21.0...
- Installed hashicorp/aws v3.21.0 (signed by HashiCorp)

* hashicorp/aws: version = "~> 3.21.0"

```
Terraform fetches any required providers and modules and stores them in the .terraform directory. If you add, change or update your modules or providers you will need to run init again.

???
**Terraform has an extensible architecture. You download the core program, terraform, then it fetches plugins and modules that are required for your code.**

---
name: terraform-plan
# Terraform Plan
```tex
*$ terraform plan
An execution plan has been generated and is shown below.
Terraform will perform the following actions:
Terraform will perform the following actions:

  # aws_vpc.tflabs will be created
  + resource "aws_vpc" "tflabs" {
      + arn                              = (known after apply)
      + cidr_block                       = "10.0.0.0/16"
    }
```
Preview your changes with `terraform plan` before you apply them.

???
**`terraform plan` is a dry run command. We're not actually building anything yet, Terraform is just telling is what it would do if we ran it for real.**

---
name: terraform-apply
class: compact
# Terraform Apply
```tex
*$ terraform apply
An execution plan has been generated and is shown below.

Terraform will perform the following actions:
  # aws_vpc.tflabs will be created
  + resource "aws_vpc" "tflabs" {
      + arn                              = (known after apply)
      + cidr_block                       = "10.0.0.0/16"
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
```
`terraform apply` runs a plan and then if you approve, it applies the changes.

---
name: terraform-destroy
class: compact
# Terraform Destroy
```tex
*$ terraform destroy
An execution plan has been generated and is shown below.

Terraform will perform the following actions:
  # aws_vpc.tflabs will be destroyed
  - resource "aws_vpc" "tflabs" {
      - arn                              = "arn:aws:ec2:us-east-2:036572526576:vpc/vpc-0cc6aff1473137227" -> null
      - cidr_block                       = "10.0.0.0/16" -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
```
`terraform destroy` does the opposite. If you approve, your infrastructure is destroyed.
???
**Terraform can just as easily destroy infrastructure as create it. With great power comes great responsibility!**

---
name: hcl
class: compact
# HashiCorp Configuration Language (HCL)

Terraform is written in HashiCorp Configuration Language (HCL)

HCL is designed to strike a balance between human-readable and machine-parsable

The Terraform language is declarative, describing an intended goal rather than the steps to reach that goal
```JSON
resource "google_compute_instance" "server" {
  name         = "server"
  machine_type = "g1-small"
  zone         = "us-central1-a"

  disk {
   image = "ubuntu-1404-trusty-v20160114e"
  }
}

```

???
This is the example we used earlier. Lets' take a moment to review the components here.Resource is a top-level keyword in Terraform.

---
name: tf-top-level-keywords
class: compact
# Terraform Top Level Keywords

## **provider**
## **resource**
## **variable**
## **output**
## **module**
## **data**

???
There are other top-level keywords in the Terraform language. We will cover them in this and the next modules.

---
name: anatomy-of-a-resource
# Anatomy of a Resource
Every terraform resource is structured exactly the same way.

```terraform
resource type "name" {
  parameter = "foo"
  parameter2 = "bar"
  a_list = ["one", "two", "three"]
}
```

**resource** = Top level keyword<br>
**type** = Type of resource. Example: `google_compute_instance`.<br>
**name** = Arbitrary name to refer to this resource. Used internally by terraform. This field *cannot* be a variable.

???
Everything else you want to configure within the resource is going to be sandwiched between the curly braces. These can include strings, lists, and maps.

---
name: Data-Sources
class: compact
# Terraform Data Sources

```terraform
data "google_compute_image" "my_image" {
  family  = "debian-9"
  project = "debian-cloud"
}
```
Data sources are a way of querying a provider to return an existing resource that was not declared by Terraform, so that we can access its parameters for our own use.

---

name: dependency-mapping
class: compact
# Terraform Dependency Mapping
Terraform can automatically keep track of dependencies for you. Look at the two resources below. Note the highlighted line in the google_compute_instance resource. This is how we tell one resource to refer to another in terraform.

```terraform
data "google_compute_image" "my_image" {
  family  = "debian-9"
  project = "debian-cloud"
}

resource "google_compute_instance" "default" {
  # ...

  boot_disk {
    initialize_params {
*     image = data.google_compute_image.my_image.self_link
    }
  }
}
```
???
**You can also see how we reference the data source block from the previous slide. This shows we can reference the Google Compute Image based on the data block we defined earlier.**

---
name: terraform-variables
class: compact
# Variables

Input variables serve as parameters for Terraform code, allowing aspects to be customized without altering the code itself.

Variables make configuration easier to understand and re-use. They also help keep sensitive data out of source code.

---
name: defining-variables
# Where are Variables Defined?
Terraform variables are typically declared in a file called *variables.tf*. Variables can have default settings. If you omit the default, the user will be prompted to enter a value. Here we are *declaring* the variables that we intend to use.

```tex
variable "prefix" {
  description = "This prefix will be included in the name of most resources."
}

variable "region" {
  description = "The region where the compute network is created."
* default     = "us-central1"
}
```

???
**If you're curious where all these variables are defined, you can see them all in the _variables.tf_ file. Here we are simply defining all the available settings, and optionally declaring some default values. These defaults are what terraform will use if your user doesn't override them with their own settings.**

Q. Where could you override these defaults?<br>
A. In the terraform.tfvars file, or optionally on the command line or via environment variables. The most common approach is to use a tfvars file.

---
name: setting-variables
class: col-2
# How are Variables Set?
Once you have some variables defined, you can set and override them in different ways. Here is the level of precedence for each method.

This list goes from highest precedence (1) to lowest (5).

<br>
```tex
1. Command line flag - run as a
   command line switch
2. Configuration file - set in
   your terraform.tfvars file
3. Environment variable - part of
   your shell environment
4. Default Config - default value
   in variables.tf
5. User manual entry - if not
   specified, prompt the user
   for entry
```

---
name: variable-interpolation
class: compact
# Variable Interpolation

Interpolation is a built-in syntax for referencing attributes of other resources

```JSON
resource "aws_vpc" "tflabs" {
  cidr_block = "10.0.0.0/16"
}

resource aws_subnet "main" {
  vpc_id     = aws_vpc.example.id
  cidr_block = "10.0.1.0/24"
}
```

???
**In the example above, we are using variable interpolation to tie the AWS VPC to the subnet. We are referencing the VPC ID - aws_vpc.example.id .**

---
name: terraform-outputs
class: compact
# Outputs
Outputs allow us to configure any messages or data you want to show at the end of a terraform apply. Outputs are also used to pass data back from Terraform modules.

```terraform
output "catapp_url" {
  value = "http://${google_compute_instance.hashicat.network_interface.0.access_config.0.nat_ip}"
}
```

???
**Since we likely don't know the value of an IP address before the compute instances is created, we can use this output keyword to display the value of the IP address after the instance has been provisioned.**

---
name: lab-two
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Lab 2

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: lab-two-instructions

# Lab 2 - Instructions

In the second lab we are going to continue our exploration of Terraform by modifying existing resources, adding resources, and using variables.

- Review the documentation to get familar with adding tags to resources
- Modify the VPC you built in lab 1 to add tags that identify the name and environment for the VPC
- Run ```terraform plan``` and ```terraform apply``` to modify our VPC resource to add the tags
- Use the AWS CLI to review the tags
- Review the **interpolation** documentation and the AWS subnet documentation


---
name: lab-two-instructions-continued

# Lab 2 - Instructions Continued
- Use ```terraform console``` to query available parameters of our resources
- Run ```terraform plan``` and ```terraform apply``` to create the subnet at attach it to the existing VPC
- Make our code reusable by modifying it to include Terraform variables
- Run ```terraform plan``` and ```terraform apply``` to rebuild our VPC and subnet

---
name: lab-three
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Lab 3

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: lab-three-instructions

# Lab 3 - Instructions

In the third lab, we are going to get hands on with Terraform state. We covered how Terraform keeps track of resources that it has created and why we need to protect and secure our state files in the second module. In this module we will:

- Review the state files created locally in our instruqt workspaces.
- Sign up and log in for HCP Terraform
- Run ```terraform login``` to authenticate our Terraform CLI to HCP Terraform
- Update the provided remote_backend.tf file with your HCP Terraform Organization name
- Run ```terraform init``` to migrate our local state file to HCP Terraform
- Review the state file in the HCP Terraform web interface
- Modify the HCP Terraform workspace setting to select **Local** execution

---
name: lab-three-instructions-continued

# Lab 3 - Instructions Continued

- Modify the prefix variable to change tags
- Run ```terraform plan``` and ```terraform apply```
- Review the new state file version in HCP Terraform
- Change execution mode to **remote** to have the plan and apply run in HCP Terraform
- Transfer AWS credentials and other required varaibles to HCP Terraform
- Run ```terraform plan``` and ```terraform apply``` to perform the run from HCP Terraform