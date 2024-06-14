---
slug: terraform-destroy
id: khbfotgar75h
type: challenge
title: "\U0001F525 Terraform Destroy"
teaser: |
  Terraform can build infrastructure and also destroy it when you are done using it. This helps control costs and reduce infrastructure sprawl.
notes:
- type: text
  contents: |-
    Terraform can destroy infrastructure as easily as it can build it.

    Use `terraform destroy` with caution.
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
Run the following command to destroy your infrastructure:

```
terraform destroy
```

You'll need to type "yes" when prompted to destroy your infrastructure. This is a safety feature to help prevent accidental deletion of important resources.

Wait until the destroy action has completely finished before clicking on the *Check* button.

Depending on the version of Terraform you are using, it is possible that the destroy action will fail. That will be resolved in a future version of Terraform.

Congratulations on completing the Intro to Terraform track!