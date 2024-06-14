---
slug: add-virtual-network
type: challenge
title: "\U0001F5A7 Add a Virtual Network"
teaser: |
  Terraform resources are like building blocks. You can continue adding more blocks until your infrastructure reaches the desired state.
notes:
- type: text
  contents: Terraform code can be built incrementally, one or two resources at a time.
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
Open the **main.tf** file again and uncomment the next resource block in the file. The type of resource is **google_compute_subnetwork** and it is named **hashicat**.

Uncomment the code by removing the `#` characters from the beginning of each line. Be sure to save the file.

Now run `terraform plan` and observe the results.

Look at the **network** parameter inside the google_compute_subnetwork resource. See how it points back at the first resource in the file? The subnet resource inherits settings from the VPC network.

Terraform can map out the complex web of dependencies between hundreds of interconnected resources.

Finally, create your Virtual Network. Run `terraform apply` and answer "yes" when prompted.