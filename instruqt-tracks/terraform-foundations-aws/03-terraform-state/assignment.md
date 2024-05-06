---
slug: terraform-state
type: challenge
title: "\U0001F4D5 Terraform State"
teaser: |-
  Next we take a look at Terraform state at more depth...

  ◉ Exploring State

  ◉ HCP Terraform Setup

  ◉ Remote State
notes:
- type: text
  contents: |
    In this next lab, we will look at how Terraform is tracking changes. Knowing how state works and what it contains is critical to understand. Once we have a
    better understanding the purpose of state, we will move that state to a secure and centralized location.
tabs:
- title: Code Editor
  type: service
  hostname: tf-foundations
  port: 8443
- title: Terminal
  type: terminal
  hostname: tf-foundations
- title: Slides
  type: website
  url: https://hashicorp.github.io/field-workshops-terraform/slides/multi-cloud/hcp-terraform/tf-basics/#2
- title: Terraform State
  type: website
  url: https://www.terraform.io/docs/state/purpose.html
  new_window: true
difficulty: basic
timelimit: 5000
---
[<ins>**Exploring Infrastructure State**</ins>](https://www.terraform.io/docs/state/purpose.html)

You may have noticed the two new files in your `Code Editor` tab after we run successful applies called `terraform.tfstate` and `terraform.tfstate.backup`.
Click the terraform.tfstate file in the code editor to view the state file. Note that this state file is stored locally on our machine. During the
slides we discussed reasons why storing the Terraform state locally is not a best practice. In this lab challenge we will configure remote state
and use HCP Terraform to store and protect our state file.

You should also notice all of the details of our VPC and subnet in our state file. This is an exact representation of what we currently have provisioned in
AWS. If we deleted this state file, the record of what is provisioned would be lost. If we would run another plan and apply after
deleting the state file, it would generate a new state file and create a duplicate of the defined infrastructure resources. The previous VPC and subnet would have
to be manually removed if the state file was lost. Losing a state file would have serious impacts to how we manage our infrastructure with Terraform going
forward.

Due to the importance of your Terraform state file, it is crucial that you have a secure and stable configuration to manage storage and locking of the
your state files.

[<ins>**HCP Terraform Setup**</ins>](https://app.terraform.io/)

Let's start with setting up an HCP Terraform Account. We recommend not using any production HCP Terraform accounts for this course.

Click on the link below and create an account if you do not already have one. Please be sure to validate your email address. This is required to create
an organization.

[https://app.terraform.io/](https://app.terraform.io/)

After you have validated your email you will be given the option to create an organization. The organization name needs to be unique so be creative.
You can now click on "Workspaces". Since this is a new organization, you shouldn't have any in the list yet.

Now we are going to create an API token for HCP Terraform. From the terminal run the following command
```
terraform login
```
When prompted, enter `yes` to proceed. Click on the URL provided. This will forward you to HCP Terraform to create an API token. Copy the token string
and paste that at the "Token for app.terraform.io" prompt.

[<ins>**Remote State**</ins>](https://www.terraform.io/docs/state/remote.html)

Before we do a plan and apply to deploy our infrastructure, let's set up remote state. We have already created a `remote_backend.tf` file which configures HCP Terraform
as a remote backend. You will need to update this file with the organization name you created. Once the organization is updated, we just need to migrate
our state file to HCP Terraform by running another init.
```
terraform init
```
You should have been prompted with a new message asking if you want to copy the existing state to the new backend location we defined. Type 'yes' and press enter.
You should now see the new workspace created in HCP Terraform. In HCP Terraform, click on your workspace name and click on "States" in the upper right. You should
see the state file that you just migrated. You can click on this first version of your state file to look at it's contents.

Click on "Settings" and select "General". There are two execution modes for HCP Terraform, Remote and Local. Remote will be the default and sets HCP Terraform
to run the terraform commands in HCP Terraform. Local will allow you to run the commands on your local computer but still get the advantages of having
secure remote state in HCP Terraform. Select the `Local` option and save this setting.

Let's make a change to our template and see how HCP Terraform updates the version of the state file. Change your "prefix" variable to something different.
Since we are using this prefix to prefix our resource name tags, it will update those tags on our existing resources.

Perform a plan to do a dry run on the Terraform code. Review the output to confirm what will be changed when you apply. It should be just the name tags.
```
terraform plan
```
Now run an apply to make those name tag changes in AWS.
```
terraform apply -auto-approve
```
After the apply completes, navigate back to HCP Terraform. Select your workspace and review the states again. You should see a few different revisions
of your state with the changes you just made.

Since we are now confident that our state file is centrally stored in HCP Terraform, we can delete our local state files that we have been working with.
```
rm -Rf *tfstate*
```
Now let's go back and change the Execution Mode back to remote. In HCP Terraform, select your workspace again, go into "Settings" and "General" then select
remote. This will have the plan and apply run in HCP Terraform. While you are in the General Settings page, change the "Apply Method" to "Auto apply".
This will remove the requirement to confirm your applies in the console. Don't forget to save your settings.

We will need to transfer our AWS credentials to our workspace environment variables. Echo your AWS access key and secret from your terminal, like we did in
the first challenge.
```
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```
This will be the information we will transfer to HCP Terraform. In the "Workspace variables" section on the bottom of the page, click on "Add variable".
Choose the "Environment variable" bullet and add both AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY with the values shown above. Be sure to set the
"AWS_SECRET_ACCESS_KEY" as "Sensitive" to ensure that your sensitive credentials cannot be retrieved.

We will also need to set the Terraform Variables in this page. These will be the Terraform variables that you created in the previous challenge. You can
also review these in the `terrafom.tfvars` file or in the `variables.tf` file if you set default values. Use the "Terraform variable" bullet for these.
```
prefix = <WhateverYouChoose>
region = us-east-2
environment = development
vpc_cidr = <YourVPCCIDR>
subnet_cidr = <YourSubnetCIDR>
```
With all your required variables set, you can run another plan. If you set all the variables the same, you shouldn't have any changes. If you did set one
differently, you will see those changes outputted in your plan. If there were changes reported, run the apply also.
```
terraform plan
```
```
terraform apply -auto-approve
```
If you go back to HCP Terraform, you will see the "Run Status" of our workspace as "Planning" or "Applying". You can also click on your workspace to review
the outputs of your current or previous plans and applies. Feel free to make changes to your prefix variable and run more plan and applies. Review the HCP Terraform
console to see the job status.

When you have completed exploring HCP Terraform, run the following command to destroy the infrastructure we have created.
```
terraform destroy -auto-approve
```
This can be done in HCP Terraform as well.  Choose "Destruction and Deletion" in the settings of the workspace.  There will be two options in this menu.  Run
"Queue destroy plan" to destroy the infrastructure created by this workspace.

"Delete from HCP Terraform" will delete the workspace but will not run a terraform destroy.  Use this with caution.  It will remove your state file and workspace
but leave your infrastructure in place.  This will remove all terraform management from the infrastructure created with that workspace.
