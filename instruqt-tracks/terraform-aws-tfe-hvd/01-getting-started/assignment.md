---
slug: getting-started
id: npssfgzswlcn
type: challenge
title: "\U0001F4DA Getting Started"
teaser: |-
  Welcome to this HashiCorp workshop on the Terraform Enterprise Hashicorp Validated Design (HVD) deployment with Terraform

  ◉ Setup the AWS Provider

  ◉ Set up prerequisites, certificates, secrets, and infrastructure
notes:
- type: text
  contents: |
    The Hashicorp Validated Design Modules exist to enable you to quickly deploy Hashicorp core products.

    The modules usage requires providing the prerequisite requirements which we will also be creating with Terraform on AWS.
tabs:
- title: Code Editor
  type: service
  hostname: tfe-hvd-workstation
  port: 8443
- title: Terminal
  type: terminal
  hostname: tfe-hvd-workstation
- title: AWS Console
  type: service
  hostname: cloud-client
  path: /
  port: 80
- title: aws CLI
  type: terminal
  hostname: cloud-client
difficulty: basic
timelimit: 5000
enhanced_loading: null
---
**Welcome to the HashiCorp Instruqt Workshop for Terraform Enterprise HVD Deployment **

For this Workshop you have multiple tabs in the Instruqt window. The `Code Editor` tab that is currently displayed is Visual Studio Code, or VSCode for short.
VSCode is a popular code editor with support for hundreds of languages providing syntax highlighting, bracket-matching, auto-indentation, Git integration and many other
features to streamline development. VSCode has extensions for Terraform that are currently enabled for you. Next is the is the `Terminal` tab, where you can run CLI commands.
Alternately, you can run CLI commands using the terminal built into VSCode by pressing CTRL+\` or choosing `Hamburger > Terminal > New Terminal` from the Code Editor tab.
We've also added tabs that forward you to the HashiCorp documentation that pertains to each particular challenge. Note that
some tabs will open a new tab in your browser.

Reference the documentation tabs in each exercise to help
you fill in the required information.

This first challenge will familiarize you with some basic concepts in Instruqt.


All Terraform templates are written in either [<ins>**HCL**</ins>](https://github.com/hashicorp/hcl/blob/hcl2/hclsyntax/spec.md) or JSON. For today's labs, we will be using HCL.

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

We're going to also validate Terraform installation.
lets start with teh following;

```
terraform -help
```
When you've successfully run that command lets enable auto-complete

```
terraform -install-autocomplete
```
Note: Before it will work correctly refresh teh terminal tab, this is done from teh tab bar not you your browser refresh.
You should now be able to tab complete commands such as `terraform a<tab>`

We are going to start by reviewing the `main` example and the module code for the `terraform-aws-terraform-enterprise-hvd` module.

Please pay attention to what parameters are **required** vs **optional** when setting up providers or creating resources. Required parameters must be defined in some way.
This could be directly in the config, set as environment variables or even called from a configuration file. For instance, the AWS provider could call your access_key and
secret_key from the stored environment variables as above, or from a credentials file.


