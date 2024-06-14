---
slug: hello-terraform
type: challenge
title: Getting to Know Terraform
teaser: |
  Learn Terraform basics and command line syntax.
notes:
- type: text
  contents: |-
    Terraform Community Edition is a command line application that you can download and run from your laptop or virtual workstation.

    It is written in Go and runs on macOS, Linux or Windows. You can always download the latest version of Terraform from https://www.terraform.io/downloads.html
- type: text
  contents: |-
    Installing Terraform on your laptop or workstation is easy. You simply download the zip file, unpack it, and place it somewhere in your PATH.

    Check out this tutorial for step-by-step instructions:

    https://learn.hashicorp.com/terraform/getting-started/install.html

    We've pre-installed Terraform in your Instruqt lab environment for you.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-azure
difficulty: basic
timelimit: 106700
---
Let's start with some basic Terraform commands.
Run the following commands on the "Shell" tab.

Check the version of Terraform running on your machine:

```
terraform version
```

You can always get help if you're curious about command syntax:

```
terraform --help
```

Terraform runs on Windows, OSX, or Linux. You can install it on your laptop or on a cloud based workstation. Terraform is also pre-installed in Azure Cloud Shell.

Today we'll be using the preconfigured Terraform workstation in the "Code Editor" and "Shell" tabs on the left for all our lab exercises.