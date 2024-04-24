---
slug: private-module-registry
id: peerq25uiais
type: challenge
title: "\U0001F4DA Terraform Private Registry"
teaser: |
  Some of your users want a simple way to deploy databases and network configurations. Enter the Terraform Private Registry, in which you can store standard, re-usable Terraform code that others can use in their own workspaces.
notes:
- type: text
  contents: "Most of the devops team is using Terraform to build and configure their
    infrastructure. Recently users from outside the team have been requesting help
    building their own workspaces. Gaurav, the database admin, sees you at lunch and
    asks for your help:\n>\U0001F473\U0001F3FE‍♂️ Hi senior sysadmin, I need to configure
    a lot of Azure Networks and I heard you have a Terraform module for this. Can
    you help me set up a new network in the hashicat-azure workspace?"
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-azure
difficulty: basic
timelimit: 1800
---
In this challenge you'll learn to use the Terraform Private Registry, which allows you to store and version re-usable modules of Terraform code.

Instead of writing this module from scratch you can copy the existing Azure network module from the public Terraform registry. Visit this [URL](https://registry.terraform.io/modules/Azure/network/azurerm) to view the Azure Network module.

Note the "Source Code" link that points at the GitHub repository for this module. Click on the Source URL. As you did in previous challenges, create your own fork of this repository with the "Fork" button. Make sure you:

* Fork the `terraform-azurerm-network` module and NOT the `terraform-azurerm-vnet` module also linked on the page.
* Uncheck `Copy the master branch only` at the bottom of the **Create a new fork** page on Github so your fork contains tags that are used for publishing modules.


Back in the HCP Terraform UI, click on the "Registry" tab at the top of the page. Then click the "Publish" button and the "Module" button that appears beneath it. Click on the "GitHub" button and select the terraform-azurerm-network repository that you just forked.

Click on the "Publish module" button.

After the module is completely published, please select version `3.5.0` of the module by clicking `Change` under **Version** in the upper left section of your screen. If `3.5.0` is not visible, refresh the page once as versions may take a moment to publish.

Click on the "Inputs" tab of the module. This indicates that you have to specify the `resource_group_name` module variable when creating an instance of the module. For inputs that reference resources already created in your main.tf file, we recommend that you use references that refer to the appropriate attributes of those resources. But you can also use hard-coded values if you prefer.

Create a new Terraform file called `network.tf` in the hashicat-azure directory and use the module in this file to create a new Virtual Network for Gaurav. You can copy the module creation code from the "Usage Instructions" section of the module's page in your Terraform Private Registry and just add the required `resource_group_name` module variable.

After you have saved the `network.tf` file, you can add, commit, and push your latest changes to your remote fork. You will be prompted to log onto your github account to push the change.

```
git add .
git commit -m "Added network module"
git push origin master
```

If all went well you should see a new network being built in the console output. Wait until your terraform apply command is complete, then click the `Check` button to verify your work.