---
slug: terraform-plan
type: challenge
title: "\U0001F914 Terraform Plan - Dry Run Mode"
teaser: |
  Terraform has a dry run mode where you can preview what will be built without actually creating any resources. In this challenge we'll run Terraform plan and view the output.
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
  path: /root/hashicat-azure
difficulty: basic
timelimit: 10670
---
Run the **terraform plan** command:
```
terraform plan
```
When you run this command Terraform will prompt you to enter the `prefix` variable.

Enter a short string of lower-case letters and/or numbers. We recommend that you use your first and last name.

**Keep your prefix string all lower case, and between 5-12 characters long. Do not use an underscore in your prefix.**

The prefix will become part of your application hostname, and therefore must be DNS-compliant. Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, and the hyphen (-).  A hostname may not start with a hyphen.