---
slug: terraform-variables
type: challenge
title: "\U0001F39B️ Working with Terraform Variables"
teaser: |
  Terraform variables allow you to customize your infrastructure without editing any code. You can use the same Terraform code to deploy dev, staging and production but with different variables.
notes:
- type: text
  contents: The `terraform.tfvars` file is a convenient place for users to configure
    their variables.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 10000
---
In Terraform all variables must be declared (with or without an optional default value) before you can use them. Variables are usually declared in the "variables.tf" file although they can also be declared in other "*.tf" files. Their values can be set in the "terraform.tfvars" file and in other ways which we'll explore later.

Open the "terraform.tfvars" file and set your `prefix` variable by deleting the `# ` at the beginning of the line and replacing "yourname" with your own name (first and last with or without a hyphen between them and all lower case).

**Be sure to click the disk icon above the file to save your change!**

Now run `terraform plan` again. This time you won't have to enter your prefix manually.