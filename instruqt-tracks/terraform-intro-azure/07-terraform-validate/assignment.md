---
slug: terraform-validate
type: challenge
title: "\U0001F469‍⚖️ Terraform Validate - Test Your Code"
teaser: |
  Terraform has a built in validation tester. This is useful to see whether your Terraform code is valid and parses correctly.
notes:
- type: text
  contents: Terraform has a built-in syntax checker. You can run it with the `terraform
    validate` command.
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
Terraform comes with a built-in subcommand called **validate**. This is useful when you want to do a quick syntax check of your code to make sure it parses correctly.

Edit the main.tf file and remove the double quotes between `azurerm_resource_group` and `myresourcegroup` on line 14 of the file, keeping the space that was between them. Save the file.

Validate your code:

```
terraform validate
```

Now put the double quotes back in line 14, save the file, and run the validate command again. This time you should pass the validation test.

**terraform validate** is most often used in automated CI/CD test pipelines. It allows you to quickly catch errors in your code before any other steps are taken.