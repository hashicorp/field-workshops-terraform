---
slug: private-module-registry
id: chxhhmy1pwyz
type: challenge
title: "\U0001F4DA Terraform Private Registry"
teaser: |
  Some of your users want a simple way to deploy S3 buckets. Enter the Terraform Private Registry, in which you can store standard, re-usable Terraform code that others can use in their own workspaces.
notes:
- type: text
  contents: "Most of the devops team is using Terraform to build and configure their
    infrastructure. Recently users from outside the team have been requesting help
    building their own workspaces. Gaurav, the database admin, sees you at lunch and
    asks for your help:\n>\U0001F473\U0001F3FE‍♂️ Hi senior sysadmin, I need to configure
    some S3 buckets and I heard you have a Terraform module for this. Can you help
    me set up a new S3 bucket in the hashicat-aws workspace?"
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-aws
difficulty: basic
timelimit: 1800
---
In this challenge you'll learn to use the Terraform Private Registry, which allows you to store and version re-usable modules of Terraform code.

Instead of writing this module from scratch you can copy the existing AWS s3-bucket module from the public Terraform registry. Visit this [URL](https://registry.terraform.io/modules/terraform-aws-modules/s3-bucket/aws) to view the s3-bucket module.

Note the "Source Code" link that points at the GitHub repository for this module. Click on the Source URL. As you did in previous challenges, create your own fork of this repository with the "Fork" button.
Make sure you uncheck `Copy the master branch only` at the bottom of the **Create a new fork** page on Github so your fork contains tags that are used for publishing modules.

Back in the HCP Terraform UI, click on the "Registry" tab at the top of the page. Then click the "Publish" button and the "Module" button that appears beneath it. Click on the "GitHub" button and select the terraform-aws-s3-bucket repository that you just forked.

Click on the "Publish module" button.

After the module is completely published, please select version `2.8.0` of the module by clicking `Change` under **Version** in the upper left section of your screen. If `2.8.0` is not visible, refresh the page once as versions may take a moment to publish.

Create a new Terraform file called `s3-bucket.tf` in the hashicat-aws directory and use the module in this file to create a new S3 bucket for Gaurav. You can copy the module creation code from the "Usage Instructions" section of the module's page in your Terraform Private Registry.

Click on the "Inputs" tab of the module. This indicates that you have to specify several module variables (inputs), but they are all marked as optional. We recommend that you set the `bucket_prefix` module variable (input) to the value of your `prefix` variable. The AWS provider will then generate a bucket name that starts with your prefix.

After you have saved the `s3-bucket.tf` file, you can add, commit, and push your latest changes to your remote fork. You will be prompted to log onto your github account to push the change.

```
git add .
git commit -m "Added s3 bucket module"
git push origin master
```

If all went well you should see a new S3 bucket being built in the console output. Wait until your terraform apply command is complete, then click the `Check` button to verify your work.