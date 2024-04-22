---
slug: terraform-intermediate
type: challenge
title: "\U0001F4D7 Terraform Intermediate"
teaser: |-
  Now let's look at some more advanced concepts...

  ◉ Modular Infrastructure

  ◉ Built-in Functions

  ◉ Local Values
notes:
- type: text
  contents: |
    Now we will look at a few more advanced topics. Modules allow us to break up our code into reusable components. If all of our applications need foundational
    networking resources, we wouldn't want to duplicate that code for every application we deploy. This also gives organizations finer control on who the authors of
    those components are.

    Built-in functions are included with Terraform and are called within expressions to transform and combine values. We won't cover all that are available but will
    cover some of the most common ones.

    Local values can be helpful to avoid repeating the same values or expressions multiple times in a configuration.
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
  url: https://hashicorp.github.io/field-workshops-terraform/slides/multi-cloud/hcp-terraform/tf-intermediate/#2
- title: Terraform Data Sources
  type: website
  url: https://www.terraform.io/docs/configuration/data-sources.html
  new_window: true
- title: Terraform Locals
  type: website
  url: https://www.terraform.io/docs/configuration/locals.html
  new_window: true
- title: Terraform Modules
  type: website
  url: https://www.terraform.io/docs/configuration/blocks/modules/syntax.html
  new_window: true
- title: Terraform EC2 Instance
  type: website
  url: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance
  new_window: true
- title: Terraform Built-in Functions
  type: website
  url: https://www.terraform.io/docs/configuration/functions.html
  new_window: true
difficulty: basic
timelimit: 5000
---
In this exercise we will be using everything we've learned so far together, as well as learn a few tricks including modules, data sources, local variables, and functions.

Please review the additional resources we added to your existing project.

[<ins>**Terraform Data Sources**</ins>](https://www.terraform.io/docs/configuration/data-sources.html)

Terraform Data Sources allow data to be fetched or computed for use elsewhere in Terraform configuration. Here we are using an `aws_ami` data source to search for the latest version
of an Ubuntu image in the AWS AMI repository. We will use this image further down when creating an EC2 instance

```
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"] # Canonical
}
```

Once a data source is defined its attributes become available for use in expressions throughout your Terraform configuration. The attributes made available by a data source can be determined using the documentation for that resource or the `terraform console` command.

You can reference a specific attribute as `data.<TYPE>.<NAME>.<ATTRIBUTE>`. For our AWS AMI example above, if you wanted to reference the AMI's ARN you would use `data.aws_ami.ubuntu.arn`

[<ins>**Terraform Local Values**</ins>](https://www.terraform.io/docs/configuration/locals.html)

A Terraform Local Value assigns a name to an expression, so you can use it multiple times within a module without repeating it.

Local values can be helpful to avoid repeating the same values or expressions multiple times in a configuration, but if overused they can also make a
configuration hard to read by future maintainers by hiding the actual values used.

In this example, we will be setting standard tags on resources provisioned by Terraform (the network and compute infrastructure).

```
locals {
  standard_tags = {
    component   = "user-service"
    environment = "production"
  }
}
```

Similar to resource or data attributes, local values can be used to assign attribute values or for string interpolation. You can reference local values as `local.<NAME>`.
For our example above you would used `local.standard_tags`

[<ins>**Built-in Functions**</ins>](https://www.terraform.io/docs/configuration/functions.html)

The Terraform language includes a number of built-in functions that you can call from within expressions to transform and combine values. Make sure you take a quick look at the functions docs, note the variety of function categories listed on the left. You may need to use one of them in this challenge!

[<ins>**Modular Infrastructure**</ins>](https://www.terraform.io/docs/configuration/modules.html)

While our networking components are not extremely complex, we want to be able to reuse this pattern for other web applications and build in some
organizational best practices.

IMPORTANT: comment out or delete your VPC and subnet terraform resource definitions as well as the vpc_cidr and subnet_cidr variables in HCP Terraform. We will now be
leveraging a network module instead. This module contains similar code and allows us to abstract away those network details.

The source of our module is external from our project. By doing this, we decouple these components. This allows for further access controls around the code
and we can have separate change approvals for it. It also removes the requirement of the developer to have the required knowledge to setup these resources
following industry or organizational best practices.

Now let's look at the main.tf of the project. You will notice that a network module block declaration was added. Comment out your VPC and Subnet definitions as mentioned
above.

First, we need to pass the required values to the module... We provided the solutions for the next challenges below if you are stuck. Please try to find the answers from
the provided documentation tabs above.

```
module "networking" {
  source = "github.com/hashicorp/terraform-aws-webapp-networking?ref=v1.0.0"
  region =
  prefix =
  tags =
}
```

[<ins>**EC2 Instance**</ins>](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance)

Next we will define an EC2 instance resource. This allows instances to be created, updated, and deleted.

We've provided a scaffolding definition for you to fill in. You can leverage the documentation to determine which values are required.

You will need to define the following required values:
  - The subnet the instance be placed in, which we can determine from the network module defined above.
  - The AMI ID, which you can obtain from the [data source](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) definition.
  - The `created` tag which should be a timestamp created using a Terraform function. Check out the `Built-in Functions` tab to see which function you can use.

```
resource "aws_instance" "tflabs" {
  ami           =
  instance_type = "t3.micro"
  subnet_id =
  tags = {
    created =
  }
}
```

Run
```
terraform init
```

When you do so, you will notice some additional output:
```
Initializing modules...
Downloading github.com/hashicorp/terraform-aws-webapp-networking?ref=v1.0.0 for networking...
- networking in .terraform/modules/networking
```
Like what we saw with the AWS provider, the module will also be downloaded locally to the ".terraform" folder


If you are having a tough time getting the right attributes, click **details** below for the solution.

<details>

**Module declaration**
```
module "networking" {
  source = "github.com/hashicorp/terraform-aws-webapp-networking?ref=v1.0.0"
  region = var.region
  prefix = "${var.prefix}-network"
  tags = local.standard_tags
}
```
**EC2 declaration**
```
resource "aws_instance" "tflabs" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
  subnet_id = module.networking.subnet_id
  tags = {
      created = timestamp()
  }
}
```
</details>

Run
```
terraform apply -auto-approve
```

Once that is finished, validate that the VM has been created
```
aws ec2 describe-instances --region us-east-2 --query 'Reservations[*].Instances[*].[Placement.AvailabilityZone, State.Name, InstanceId, Tags]'
```
The instance's tags should show the creation timestamp --- obviously, your timestamp value will be different.
```
{
  "Key": "created",
  "Value": "2020-12-16T19:01:59Z"
}
```
Congrats! You've leveraged re-usable code as a network module and created a virtual machine all through Terraform.
