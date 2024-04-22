---
slug: getting-started
type: challenge
title: "\U0001F4DA Getting Started"
teaser: |-
  Welcome to this HashiCorp workshop on Infrastructure-as-Code with Terraform

  ◉ Setup the AWS Provider

  ◉ Define a AWS VPC

  ◉ CLI Commands - init, plan, apply
notes:
- type: text
  contents: |
    Terraform is an Infrastructure-as-Code (IaC) software tool created by HashiCorp, and released in 2014. It was created with the intent to allow users to define and provision
    infrastructure using a declarative configuration language known as HashiCorp Configuration Language (HCL) or JSON. Terraform manages external resources, such as public and
    private cloud infrastructure, network appliances, Software-as-a-Service (SaaS) and Platform-as-a-Service (PaaS) resources. This is done via a catalog providers, that allow
    Terraform to access the platforms on which infrastructure is managed.

    Declarative configuration allows you to define the desired final state of your resources without having to define the logic necessary to get there. Terraform determines the order
    that resources need to be provisioned in based on dependencies. For instance, a network needing to be provisiones before a server can be assigned to it.
tabs:
- title: Code Editor
  type: service
  hostname: tf-foundations
  port: 8443
- title: Terminal
  type: terminal
  hostname: tf-foundations
- title: Slides
  type: website
  url: https://hashicorp.github.io/field-workshops-terraform/slides/multi-cloud/hcp-terraform/how-tf-works/#2
- title: AWS Provider
  type: website
  url: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
  new_window: true
- title: AWS VPC
  type: website
  url: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc
  new_window: true
difficulty: basic
timelimit: 5000
---
**Welcome to the HashiCorp Instruqt Workshop for Terraform Foundations!**

For this Workshop you have multiple tabs in the Instruqt window. The `Code Editor` tab that is currently displayed is Visual Studio Code, or VSCode for short.
VSCode is a popular code editor with support for hundreds of languages providing syntax highlighting, bracket-matching, auto-indentation, Git integration and many other
features to streamline development. VSCode has extensions for Terraform that are currently enabled for you. Next is the is the `Terminal` tab, where you can run CLI commands.
Alternately, you can run CLI commands using the terminal built into VSCode by pressing CTRL+\` or choosing `Hamburger > Terminal > New Terminal` from the Code Editor tab. The `Slides` tab
contains the reference for the workshop content. We've also added tabs that forward you to the HashiCorp documentation that pertains to each particular challenge. Note that
some tabs will open a new tab in your browser.

In order to to familiarize you with Terraform and it's documentation, we're starting you with a non-functional config. Reference the documentation tabs in each exercise to help
you fill in the required information.

This first challenge will familiarize you with some basic concepts in Terraform. We are starting with a project named `tflabs` that consists of a single file named `main.tf`.
This file consists of comments that will help get you started writing your first Terraform config, as well as blocks defining the provider and aws_vpc needed for todays
workshop. As we build on this project, we will introduce more advanced concepts that will enable scalability, reusability, security and self service.

All Terraform templates are written in either [<ins>**HCL**</ins>](https://github.com/hashicorp/hcl/blob/hcl2/hclsyntax/spec.md) or JSON. For today's labs, we will be using
HCL. In most cases you will need to define the [<ins>**provider(s)**</ins>](https://registry.terraform.io/browse/providers) for the services that you want to provision
changes to. We will cover what HCL is and what providers are in more detail below.

Today we will be using AWS as our cloud provider and `us-east-2` as our desired region. There are multiple ways in which you can set up providers, depending on how you plan
to connect to your target. The `AWS Provider` tab contains relevant documentation. In our lab environment we've added environment variables that will be used to authenticate
to AWS. You can display this information by running the following commands.

```
echo $AWS_ACCESS_KEY_ID
```
```
echo $AWS_SECRET_ACCESS_KEY
```
These credentials can be used for command-line tools like Terraform and the AWS CLI. We've also displayed information in your Terminal that will allow you to login to the AWS
console. We won't be pointing and clicking to build infrastructure in the console, as that would defeat the purpose of learning Infrastructure-as-Code. That being said,
some people prefer to learn by seeing the outcomes of running our code in the console.

NOTE: It's very important that you <ins>**NEVER**</ins> put credentials directly in your code!

Please pay attention to what parameters are **required** vs **optional** when setting up providers or creating resources. Required parameters must be defined in some way.
This could be directly in the config, set as environment variables or even called from a configuration file. For instance, the AWS provider could call your access_key and
secret_key from the stored environment variables as above, or from a credentials file.

Complete the AWS provider block and set `us-east-2` as your region.

Once the provider block is created, you can move on to creating our first AWS resource, an AWS VPC. The resource block has been started for you but still requires some
parameters to be set. Please use the reference tab for `AWS VPC` for the relevant documentation. Be sure to note what arguments are "required".

Once you have both the Provider and VPC resource defined, you can move on to the next steps in the `Terminal` tab.

<ins>**CLI Commands - Init, Plan and Apply**</ins>

Before we can do anything with Terraform we need to initialize our workspace. Run the following command in your terminal:
```
terraform init
```
The `terraform init` command scans your Terraform code, identifies any providers that are needed and downloads them. These files will be saved in a hidden `.terraform`
folder in your working directory. If there are any syntax errors in your code, you may see them reported at this point.

Once you've run `terraform init` without error, run the `terraform plan` command:
```
terraform plan
```
The command output will report `1 to add` meaning that there is one resource to add, your VPC. The green **+** indicates that these are the changes that will occur if
you were to apply this plan. There are some settings that are already known and were set in our template, for instance, the cidr_block IP range that you defined, but there
are others that display `(known after apply)`. This means that those outputs are unknown until the resource is created. For instance, we do not know what the VPC ID is until
AWS assigns it an ID.

Run the `terraform apply` command and type `yes` to confirm:
```
terraform apply
```
The output will indicate that your apply was completed and 1 resource was added. Let's confirm that we have a VPC in AWS now.

Use the following AWS CLI command in the `Terminal` or log into the AWS console with the provided login information. We will be working in **us-east-2** so be sure
to be in that AWS region.
```
aws ec2 describe-vpcs --region us-east-2
```
The output will show the current configuration, as well as the dynamic ID's that were created by AWS during provisioning. The same information will be shown in the AWS Console.
This information is coming directly from the AWS API.

You can always get help if you're curious about command syntax:
```
terraform help
```
