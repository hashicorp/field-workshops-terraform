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
  path: /root/hashicat-azure
difficulty: basic
timelimit: 10670
---
Open the **main.tf** file again and uncomment the next resource block in the file. The type of resource is **azurerm_virtual_network** and it is named **vnet**.

Uncomment the code by removing the `#` characters from the beginning of each line. Be sure to save the file.

Now run `terraform apply` again and answer "yes" when prompted. Observe the results.

Look at the **location** and **resource_group_name** parameters inside the vnet resource. See how they point back at the first resource in the file? The virtual network resource inherits settings from the resource group.

Terraform can map out the complex web of dependencies between hundreds of interconnected resources.