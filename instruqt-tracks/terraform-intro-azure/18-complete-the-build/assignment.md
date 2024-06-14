---
slug: complete-the-build
type: challenge
title: "\U0001F3D7️ Complete the Build"
teaser: |
  Terraform code can stand up everything from resource groups, to virtual networks, to VMs and containers.
notes:
- type: text
  contents: The `-auto-approve` flag can be used to override the "Are you sure?" questions
    that appear before an apply or destroy. Use with caution!
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
We've uncommented all the rest of the Terraform code in the **main.tf** file for you. Run a `terraform plan` to see what will be built:

```
terraform plan
```

Now run an apply to build the HashiCat application:

```
terraform apply -auto-approve
```

It can take up to ten minutes for the application to finish deploying. You will know it is complete when you see the Terraform output with your application URL at the end of the run.

Open your web application in a new browser tab by clicking on the URL in the `catapp_url` output.