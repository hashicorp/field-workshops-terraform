---
slug: terraform-code
type: challenge
title: "\U0001F468‍\U0001F4BB What does Terraform code look like?"
teaser: |
  The Terraform DSL (Domain Specific Language) is a declarative language that lets you build almost any type of infrastructure.
notes:
- type: text
  contents: |-
    Terraform will read anything in the current directory that ends in `*.tf` or `*.tfvars`.

    By convention most Terraform workspaces will contain `main.tf`, `variables.tf`, and `outputs.tf` files.

    You can also group your Terraform code into files by purpose. For example, you might place all your load balancer configuration code into a file called `load_balancer.tf`.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-azure
difficulty: basic
timelimit: 10670
---
We've downloaded some Terraform code onto your workstation. Run the following command to see the Terraform code files:
```
ls *.tf
```
The same files are visible in the file explorer pane on the left. Terraform files are marked with the purple T icon.

Terraform code always ends with a `.tf` extension. You can have as many Terraform files as you want, but these three are commonly created first:

**main.tf** - Where most of your Terraform code is stored. This is the part that does the building of resources.<br>
**variables.tf** - Use this file to define which variables will be available to your users.<br>
**outputs.tf** - This file contains outputs that will be shown at the end of a successful Terraform run.

Files that end in anything other than `*.tf` or `*.tfvars` are ignored by Terraform.