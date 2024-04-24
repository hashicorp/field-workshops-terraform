---
slug: private-module-registry
id: 6hhxzipfcawi
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
    a lot of GCP networks and I heard you have a Terraform module for this. Can you
    help me set up a new network in the hashicat-gcp workspace?"
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 1800
---
In this challenge you'll learn to use the Terraform Private Registry, which allows you to store and version re-usable modules of Terraform code.

Instead of writing this module from scratch you can copy the existing vpc module from the public Terraform registry. Visit this [URL](https://registry.terraform.io/modules/terraform-google-modules/network/google) to view the VPC module.

Note the "Source Code" link that points at the GitHub repository for this module. Click on the Source URL. As you did in previous challenges, create your own fork of this repository with the "Fork" button.
Make sure you uncheck `Copy the master branch only` at the bottom of the **Create a new fork** page on Github so your fork contains tags that are used for publishing modules.


Back in the HCP Terraform UI, click on the "Registry" tab at the top of the page. Then click the "Publish" button and the "Module" button that appears beneath it. Click on the "GitHub" button and select the terraform-google-network repository that you just forked.

Click on the "Publish module" button.

After the module is completely published, please select version `3.4.0` of the module by clicking `Change` under **Version** in the upper left section of your screen. If `3.4.0` is not visible, refresh the page once as versions may take a moment to publish.

Click on the "Inputs" tab of the module. This indicates that you have to specify the `network_name`, `project_id`, and `subnets` module variables (inputs) for this module.

Create a new Terraform file called `vpc.tf` in the hashicat-gcp directory and use the module in this file to create a new VPC for Gaurav. You can copy the module creation code from the "Usage Instructions" section of the module's page in your Terraform Private Registry and then add the required inputs as follows:
  * Set `network_name` to any name you want such as `gaurav-network`.
  * Set `project_id` to `var.project`.
  * Set `subnets` like this:
  ```
  subnets = [
    {
      subnet_name   = "gaurav-subnet"
      subnet_ip     = "10.100.10.0/24"
      subnet_region = var.region
    }
  ]
  ```

After you have saved the `vpc.tf` file, you can add, commit, and push your latest changes to your remote fork. You will be prompted to log onto your github account to push the change.

```
git add .
git commit -m "Added vpc module"
git push origin master
```

If all went well you should see a new VPC being built in the console output. Wait until your terraform apply command is complete, then click the `Check` button to verify your work.