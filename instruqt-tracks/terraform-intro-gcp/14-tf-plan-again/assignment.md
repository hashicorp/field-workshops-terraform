---
slug: tf-plan-again
type: challenge
title: "\U0001F469‍\U0001F4BB Test and Repair"
teaser: |
  Terraform is idempotent. Each resource in your code will be examined, and if it already exists Terraform will leave it alone.
notes:
- type: text
  contents: |-
    Terraform is an *idempotent* application.

    Idempotence is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application.

    https://en.wikipedia.org/wiki/Idempotence
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
Try running `terraform plan` again and see what happens:

```
terraform plan
```

Since your VPC network has already been built, Terraform will report that there are no changes required.

This is normal and expected.

Now try running another apply:

```
terraform apply
```

Terraform checks each resource to ensure it is in the proper state. It will not re-create your VPC network if it is already provisioned correctly.