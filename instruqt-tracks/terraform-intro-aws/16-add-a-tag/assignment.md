---
slug: add-a-tag
type: challenge
title: "\U0001F3F7️ Add a Tag to Your VPC"
teaser: |
  Terraform can change some resources in in place without deleting them. Adding tags is a non-destructive action.
notes:
- type: text
  contents: Adding, changing, or removing tags is a non-destructive action. Terraform
    can tag your resources without re-creating them.
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
Several resource types support AWS's tags. Read the Terraform documentation for the `aws_vpc` resource to learn about the `tags` argument and its format.

[Terraform Docs: the aws_vpc resource - Click Here](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc)

Add a tag to your VPC resource in the **main.tf** file. The name of the tag should be `environment` and the value should be `Production`. (The tag is case-sensitive. Make sure you use a capital P.)

Hint: Read the examples carefully! Unlike the other resource arguments you've seen, the value of the `tags` argument must be a **map** (a `{key = "value"}` data structure). Additionally, you must use `=` after `tags` and after `environment`. For more about Terraform's data types, see the [Terraform language documentation](https://www.terraform.io/docs/configuration/expressions.html#types-and-values).

Re-run `terraform apply` and answer "yes" when prompted.

What happens?