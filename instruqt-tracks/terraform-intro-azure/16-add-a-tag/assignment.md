---
slug: add-a-tag
type: challenge
title: "\U0001F3F7️ Add a Tag to Your Resource Group"
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
  path: /root/hashicat-azure
difficulty: basic
timelimit: 10670
---
Read the Terraform documentation for the azurerm_resource_group resource:

[Azure Terraform Docs - Click Here](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group)

Add a tag to your resource group in the **main.tf** file using the `tags` argument of the `azurerm_resource_group` resource.

The name of the tag should be `environment` and the value should be `Production` surrounded by double-quotes. The tag is case-sensitive. Make sure you use a capital P. You'll need to use `=` after `environment`.

Be sure to save the file.

Re-run `terraform apply`.

What happens?