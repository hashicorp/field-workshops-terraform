---
slug: change-prefix
type: challenge
title: "\U0001F6EB Change Your Prefix"
teaser: |
  When your Terraform code changes, your infrastructure will be modified to match the updated code. Terraform is a declarative language.
notes:
- type: text
  contents: |-
    Terraform can create, destroy, update in place, or destroy and re-create your infrastructure. Some types of resources can be updated without deleting them. Major changes usually require a teardown and rebuild.

    Terraform always tries to match the current infrastructure to what has been defined in your code.
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
Edit the `terraform.tfvars` file to change your prefix. You could simply add a number to the end if you like. Or change it to something entirely new.

Save the `terraform.tfvars` file and run your apply command again.

```
terraform apply
```

Type "yes" when prompted.

Observe the output. What happened?