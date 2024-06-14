---
slug: tf-plan-and-apply
type: challenge
title: "\U0001F468‍\U0001F4BB Terraform Plan and Terraform Apply"
teaser: |
  The `terraform plan` command can be run anytime to get a preview of changes that Terraform might make. When you run Terraform apply these changes are implemented, and Terraform builds, updates, or destroys resources.
notes:
- type: text
  contents: |-
    By default, the `terraform apply` command runs a Terraform plan to show you what changes it wants to make.

    Terraform maps out all the changes it needs to make before applying them.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-aws
difficulty: basic
timelimit: 10000
---
Now that we've configured our required variables we can apply our changes.

Run the `terraform plan` command first to see what will happen:

```
terraform plan
```
Confirm the proper prefix and location are displayed in the plan output.

Then run `terraform apply` and watch your resources being built.

```
terraform apply
```

You'll need to enter **yes** when Terraform prompts you with the "Do you want to perform these actions?" question.

Right now our code only defines a VPC. We'll be building upon this starting point in the next challenge.