---
slug: terraform-plan
type: challenge
title: "\U0001F914 Terraform Plan - Dry Run Mode"
teaser: |
  Terraform has a dry run mode where you can preview what will be built without actually creating any resources. In this challenge we'll run `terraform plan` and view the output.
notes:
- type: text
  contents: |-
    `terraform plan` allows you to preview any changes to your environment in a safe way.

    This can help you identify any unexpected changes before you deploy them, not after they are already built.
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
Run the `terraform plan` command:

```
terraform plan
```

When you run this command Terraform will prompt you to enter the `prefix` variable.

Enter a short string of lower-case letters and/or numbers. We recommend that you use your first and last name.

The prefix will become part of the name for our VPC, subnet, EC2 instance and other resources.