name: Intro-to-Terraform-Cloud
class: center,middle,title-slide
count: false
<br><br>
![:scale 60%](images/tf_aws.png)
<br><br>
# Intro to Terraform Cloud on AWS

---
layout: true

.footer[
- Copyright © 2019 HashiCorp
- ![:scale 100%](https://hashicorp.github.io/field-workshops-assets/assets/logos/HashiCorp_Icon_Black.svg)
]

---
name: Introductions
# Introductions
- Your Name
- Job Title
- Automation Experience
- Favorite Text Editor

---
name: Table-of-Contents
class: col-2
# Table of Contents

<div>
1. OSS vs. Cloud/Enterprise<br>
🌥️ Terraform Cloud Overview<br>
👨🏽‍🏫 Review the Basics<br>
🔗 Configure Remote State<br>
<hr>
2. Security and Compliance<br>
🔐 Protect Sensitive Variables<br>
🛡️ Work With Access Controls<br>
👮 Sentinel Policy Enforcement<br>
</div>
<div>
<hr>
3. Terraform and Version Control<br>
🕸️ Connect to VCS<br>
👩🏽‍🤝‍👨🏻 Collaborate with VCS<br>
<hr>
4. Terraform Modules<br>
⚙️ Private Module Registry<br>
📦 Deploy a Container App<br>
<hr>
5. Extra Resources<br>
⚗️ Bonus Lab<br>
🌐 Useful Links
</div>

---
name: TFE-Chapter-1
class: title

# Chapter 1
## Terraform OSS, Cloud and Enterprise

---
name: why-tfc-1
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

???
**Until now we've been using only open source features. Sooner or later you'll reach a point where you want more tools for governance and collaboration. Terraform open source is great for small environments and developers, but when you need multiple people or teams to collaborate on the same infrastructure, Terraform Cloud features can help.**

---
name: why-tfc-2
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS

???
**As your organization begins to standardize on Terraform, you'll have different types of users. Most of you will become terraform experts, but there may be others who just want to build things. They can use the terraform code that folks like you have written. To make this process easy, we have a web application. You log on, click a button, and out pops your infrastructure.**

---
name: why-tfc-3
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows

???
**For our more advanced users we have a fully featured RESTful API. This is useful for programmatic access to terraform features. You can drive terraform plan and apply commands using an API interface. If you have a CI/CD pipeline you can automate your terraform builds as part of your process.**

---
name: why-tfc-4
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management

???
**Terraform enterprise also provides safe and secure storage for your state files. Instead of having that important state file stored on someone's laptop, now it is safely stored in the Terraform Cloud application. Only those who need access to the state file can see it, and it is protected from being overwritten or corrupted.**

---
name: why-tfc-5
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry

???
**Eventually you'll have a library of Terraform code that you might like to share and publish for other users and teams in your company. The private module registry makes this easy. You build reusable modules that build infrastructure according to standards, and then publish them for your users. This can help with enforcing security policies and build standards.**

---
name: why-tfc-6
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry
* Sentinel policy enforcement

???
**TFE also comes with a policy enforcement engine that can ensure that your users don't build things they shouldn't build, or configure them in the wrong way. For example, you might wish to prevent users from opening network ports to the internet, or from building too many virtual machines. All of these types of rules can be expressed using our Sentinel policy enforcement engine. Sentinel policies prevent users from doing bad things, *before* they provision to the cloud.**

---
name: why-tfc-7
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry
* Sentinel policy enforcement
* Single Sign-On

???
**Terraform Enteprise also supports single sign-on using your own SAML provider. This allows you to quickly map users into your organization's teams and workspaces so they can become productive right away.**

---
name: why-tfc-8
class: img-right
# Terraform Cloud
![](images/tfc-gui.png)

Terraform Cloud is a SaaS application that provides the following features:

* UI integration with VCS
* API driven workflows
* Central state management
* Private Module Registry
* Sentinel policy enforcement
* Single Sign-On
* Secure API credentials

???
**Terraform enterprise can store and encrypt your cloud credentials, passwords or any other sensitive data. These credentials are stored safely inside of a Vault instance that runs inside of TFE.**

---
name: tfc-link-to-slide-deck
# The Slide Deck
<br><br><br>
.center[
Follow along on your own computer at this link:

# https://git.io/JeM0d
]

---
name: terraform-cloud-what-is-it
# Terraform Cloud - SaaS for Infrastructure

???
**During the next lab you'll sign up for a free Terraform Cloud account which we'll use for the remainder of this training.**
TODO: Add an image or something to make this slide more interesting

---
name: terraform-cloud-enterprise
# Terraform Cloud or Terraform Enterprise?
**[Terraform Cloud](https://app.terraform.io/signup)** is a hosted application that provides features like remote state management, API driven runs, policy management and more. Many users prefer a cloud based SaaS solution because they don't want to maintain the infrastructure to run it.

**[Terraform Enterprise](https://www.hashicorp.com/go/terraform-enterprise)** is the same application, but it runs in your cloud environment or data center. Some users require more control over the Terraform Cloud application, or wish to run it in restricted networks behind corporate firewalls.

The feature list for these two offerings is nearly identical. We will be using Terraform Cloud accounts for our lab exercises today.

---
name: review-basic-terraform-commands
# Terraform Command Review

Let's review some of the most useful terraform commands:

```bash
terraform init    # Initialize the current directory
terraform plan    # Dry run to see what Terraform will do
terraform apply   # Apply the Terraform code and build stuff
terraform destroy # Destroy what was built by Terraform
terraform refresh # Refresh the state file
terraform output  # View Terraform outputs
terraform graph   # Create a DOT-formatted graph
```

---
name: our-application
# HashiCat Application - Kittens as a Service

.center[![:scale 60%](images/meow_world.png)]

---
name: terraform-user-journey
# The Terraform User Journey

---
name: infrastructure-as-code
# Infrastructure as Code

---
name: multi-cloud-compliance
# Multi-Cloud Compliance and Management

---
name: self-service-infra
# Self-Service Infrastructure

---
name: lab-exercise-0
# 👩‍💻 Getting Started with Instruqt
<br><br>
[Instruqt](https://instruqt.com) is the HashiCorp training platform. Visit the link below for a short tutorial, or if you're already familiar with Instruqt you can skip to the next slide.

[https://instruqt.com/instruqt/tracks/getting-started-with-instruqt](https://instruqt.com/instruqt/tracks/getting-started-with-instruqt)

---
name: lab-exercise-1
# 👩‍💻 Lab Exercise: Setup a TF Cloud Account
<br><br>
In this lab you'll create a fork of the HashiCat application code, and set up a free Terraform Cloud account. Then you'll configure your account for remote execution of Terraform commands.

Your instructor will provide the URL for the first lab environment.

---
name: under-construction
class: title
# Under Construction
## All content after this slide is legacy stuff...

---
name: TFE-Chapter-3
class: center,middle
.section[
Chapter 3
Terraform Cloud and
Terraform Cloud
]

???
**In this chapter we'll sign up for a free Terraform Cloud account.**



---
name: tfc-terraform-cloud-signup
# Sign Up for a Free Account
.center[![:scale 50%](images/tf_cloud_signup.png)]

.center[Visit the signup page for Terraform Cloud:]

.center[https://app.terraform.io/signup/account]

???
**Go ahead and sign up for a new account if you don't have one already. Once you've signed up wait for more instructions.**

---
name: tfc-join-a-team
# Join an Existing Team
.center[![:scale 90%](images/tf_cloud_welcome.png)]

Before you go further, provide your username to your instructor. This is so you can be invited to the workshop organization.

???
**Now I need you all to write your TFE username on the whiteboard. This is so I can invite you to our shared training organization.**

Instructor - you should have an organization ready for training. Invite all your students to your organization. You can put them all on a team called "students" and give them "Manage Workspaces" permissions. You should also create a global sentinel policy called `block_allow_all_http` and populate it with the following Sentinel code. The policy enforcement mode should be set to advisory at the beginning of the training.

TODO: Copy this into the instructor guide.

```
import "tfplan"

get_sgs = func() {
    sgs = []
    for tfplan.module_paths as path {
        sgs += values(tfplan.module(path).resources.azurerm_network_security_group) else []
    }
    return sgs
}

network_sgs = get_sgs()

disallowed_cidr_blocks = [
  "0.0.0.0/0",
  "0.0.0.0",
  "*",
]

block_allow_all = rule {
  all network_sgs as _, instances {
    all instances as _, sg {
    	all sg.applied.security_rule as _, sr {
        not (sr.destination_port_range == "80" and sr.source_address_prefix in disallowed_cidr_blocks) or (sr.access == "Deny")
    	}
    }
  }
}

main = rule {
  (block_allow_all) else true
}
```

---
name: tfc-create-an-org
# Create an Organization
.center[![:scale 70%](images/sandbox.png)]

Create a new organization for your own development work. Name it **yourname-sandbox**. We'll be using this later in the training.

???
**Okay, now everybody should create a new sandbox organization. Write those down too so I can upgrade them to trial organizations. This will just take a moment.**

Instructors, have your students write their org names on a piece of paper or the whiteboard. You'll need to go into the admin console and upgrade them all to trial organizations.

---
name: tfc-choose-an-org
# Select the Workshop Organization
.center[![:scale 70%](images/choose_training_org.png)]
Your instructor will invite you to the workshop organization. Once you've been invited you'll see a second organization in the org pull-down menu. Change from your sandbox organization into the workshop organization.

???
**For the first portion of this workshop we'll all be sharing the same sandbox. I've invited you all to this $TRAININGORG where you have the ability to create your own workspaces.**

---
name: tfc-chapter-3-review
# 📝 Chapter 3 Review
<br>
.contents[
In this chapter we:
* Looked at Terraform Cloud and Enterprise
* Signed up for a Terraform Cloud account
* Created a sandbox organization
* Joined the workshop organization
]

---
name: TFE-Chapter-4
class: center,middle
.section[
Chapter 4
Remote State
]

---
name: why-remote-state
# Why Remote State?
<br>
```tex
  "primary": {
      "id": "i-0413fe5b4509d65b1",
      "attributes": {
          "ami": "ami-06f2f779464715dc5",
          "arn": "arn:aws:ec2:us-west-2:753646501470:instance/i-0413fe5b4509d65b1",
```


Terraform stores information about the resources it has built in a **state file**. This important file contains all of the data that Terraform needs to change, update, and delete infrastructure. The local state file has some disadvantages:

* Sometimes contains secrets or sensitive data
* Can't collaborate because the file is on someone's laptop
* Risk of losing or deleting the state file
* No centralized record keeping

Let's migrate our local state file into Terraform Cloud where it will be encrypted and protected from unauthorized access.

---
name: tfcloud-remote-state
# Terraform Cloud Remote State
<br><br><br><br>
Terraform Cloud Remote State is free and available to all users. The requirements to get it set up and working are below.

* Free or paid Terraform Cloud account
* A **`.terraformrc`** (Unix/Linux) or **`terraform.rc`** (Windows) config file
* User access token stored in your config file
* Remote backend config file, name it **`remote_backend.tf`** for convenience.

.red[_Don't worry about creating any of these now, we'll do that in the next few slides._]

???
**You need two config files to get remote state working. First is your .terraformrc (or terraform.rc on Windows), and the second is a remote_backend.tf with the terraform block of code in it. The credentials file holds your token, while the config file tells terraform where to store your state file.  We'll be creating these two files in a moment.**

---
name: create-a-workspace-gui
# Create a New Workspace
.center[![:scale 80%](images/create_workspace_gui2.png)]

With paid and trial accounts, you must create a workspace before migrating to remote state. Make sure you are in the workshop organization (not your sandbox), then create a new workspace.

We will be discussing VCS integration in future section. You can skip this step now and simply provide a workspace name.
???
**Make sure you are in the shared workshop organization, not your personal sandbox org.**

---
name: change-to-local-exec
# Change to Local Execution
.center[![:scale 100%](images/change_to_local.png)]

Go into the **General** settings for your workspace and change the execution mode to **Local**. Save your settings.

???
**This is important. All we want to do is store our state file remotely for now. Later on we'll learn about remote execution.**

---
name: chapter-4-tfc-lab
.center[.lab-header[👩🏽‍🔬 Lab Exercise 4: Enable Remote State]]
<br><br>
In this lab exercise you will enable Terraform remote state on your workstation. There are three ingredients you'll need to make it work:

* A User Access Token for your config file
* A **terraform.rc** file located at `%APPDATA%\terraform.rc` (`~/.terraformrc` for Linux)
* A **remote_backend.tf** file in the hashicat-aws folder

We provided a remote_backend.tf.disabled and terraform.rc.example file. Find your user settings in the Terraform Cloud UI and figure out how to generate a token. Once you have a token, create your terraform RC file.

Bash:
```bash
touch ~/.terraformrc
```

Powershell:
```powershell
code $env:APPDATA/terraform.rc
```

???
%APPDATA% is a shortcut on Windows to your application data directory. You can also go directly to `C:\Users\hashicorp\AppData\Roaming`.



<!-- .center[![:scale 90%](images/get-started-tfe.png)]

Click on the **Get Started** button in the Terraform Cloud UI. Follow the instructions on the popup message to migrate your application into a new workspace. Name your token **`workshop-token`**. Call your remote backend config file **`remote_backend.tf`** -->

---
name: chapter-4-tfc-lab-solution-1
.center[.lab-header[👩🏽‍🔬 Lab Exercise 4: Solution Part 1]]
* Create a **user token**: https://app.terraform.io/app/settings/tokens
* Edit your **terraform.rc** config file, replacing where it says `REPLACE_ME` with your token.

```bash
nano ~/.terraformrc
```

```hcl
credentials "app.terraform.io" {
  token = "REPLACE_ME"
}
```

* Rename the **`remote_backend.tf.disabled`** file to **`remote_backend.tf`**. It should contain the following code. Replace `ORGNAME` and `YOURWORKSPACE` with your own settings.

```hcl
terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "ORGNAME"
    workspaces {
      name = "YOURWORKSPACE"
    }
  }
}
```

---
name: chapter-4-tfc-lab-solution-2
.center[.lab-header[👩🏽‍🔬 Lab Exercise 4: Solution Part 2]]
<br><br>
Run a **`terraform init`** command to migrate to remote state.  You should see output similar to what's below. Answer **`yes`** to the confirmation prompt:

Command:
```bash
terraform init
```

Output:
```tex
Initializing the backend...
Do you want to copy existing state to the new backend?
  Pre-existing state was found while migrating the previous "local" backend to the
  newly configured "remote" backend. No existing state was found in the newly
  configured "remote" backend. Do you want to copy this state to the new "remote"
  backend? Enter "yes" to copy and "no" to start with an empty state.

  Enter a value: yes

*Successfully configured the backend "remote"! Terraform will automatically
*use this backend unless the backend configuration changes.
```
???
Instructor note: You might want to walk through this with some or all of your students. Finding the right file path can be a little bit tricky on Windows machines.

---
name: chapter-4-tfc-lab-solution-3
.center[.lab-header[👩🏽‍🔬 Lab Exercise 4: Solution Part 3]]
<br><br>
Now when you run **`terraform apply`**, your state is automatically stored in your Terraform Cloud account. This feature is available to all free and paid tier users.

.center[![:scale 100%](images/remote_state_free.png)]

Enterprise users gain extra features like remote execution, secure variable storage, code reviews, and collaboration tools.

---
name: delete-state-file
# Delete Your State File
<br><br><br>
.red[**WARNING**: Make sure you have enabled remote state and confirmed that your state file is being stored in Terraform Cloud.]

Once you've confirmed that remote state is working, go ahead and delete the **`terraform.tfstate`**  and the **`terraform.tfstate.backup`** files from your local workspace directory.

Command:
```bash
rm terraform.tfstate*
```

???
**Now our state file is safely stored and encrypted in Terraform Cloud. There's actually a small Vault instance running under the hood that handles all our encryption needs.**

---
name: tfc-chapter-4-review
# 📝 Chapter 4 Review
<br>
.contents[
In this chapter we:
* Learned about Remote State
* Generated a Terraform Cloud Token
* Configured our terraform.rc file
* Enabled the remote state backend
* Migrated our state to TF Cloud
]

---
name: TFE-Chapter-5
class: center,middle
.section[
Chapter 5
Protecting Sensitive Variables
]

---
name: where-are-your-creds
# Where Are Your API Keys?
<br><br>
Terraform requires credentials in order to communicate with your cloud provider's API. These API keys should never, ever be stored directly in your terraform code. Config files and environment variables are a better option, but the credentials still live on your workstation, usually stored in plaintext.

Try these commands to view your API credentials.

Bash
```bash
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```

PowerShell
```powershell
echo $env:AWS_ACCESS_KEY_ID
echo $env:AWS_SECRET_ACCESS_KEY
```

???
**Note how our API keys are just sitting there in plain text. This isn't the most secure way to build cloud resources.**

---
name: a-better-way-creds
# A Better Way to Store Sensitive Data

Terraform Cloud can safely store your credentials and encrypt them for you. You can use this encrypted storage for passwords, TLS Certificates, SSH keys or anything else that should not be lying around in plain text.

.center[![:scale 100%](images/aws_encrypted_vars.png)]

.red[**NOTE:** _Don't worry if you don't recognize the varibles in the UI above, we'll be adding them in the upcoming lab._]

???
**Before we store our sensitive variables in Terraform Cloud, we must enable Remote Execution.**

You may also point out again that these credentials are only valid for 8 hours and
if anyone tries to check them into version control that hasn't happened since last week!
We will get alerts, and the token will be shutdown!
---
name: chapter-5-tfc-lab-enable-remote-execution
.center[.lab-header[👩🏻‍🏫 Lab Exercise 5a: Remote Execution]]
<br><br><br>
Before we migrate our sensitive API credentials into the application we need to enable remote execution. Under the **General** settings for your workspace, change the Execution Mode to **Remote**. Click the **Save Settings** button at the bottom of the page.

.center[![:scale 100%](images/remote_execution.png)]

???
**When remote execution is enabled, all of your variables are stored in Terraform Cloud, and the `terraform plan` and `terraform apply` commands now happen on the server instead of on your workstation. State is still stored remotely as before. Your command line simply becomes a tool for driving the remote execution.**

---
name: chapter-5-tfc-lab
.center[.lab-header[👩🏻‍🏫 Lab Exercise 5a: Sensitive Variables]]
<br><br><br>
Create Terraform Cloud **environment variables** for your AWS credentials. Make sure the `AWS_SECRET_ACCESS_KEY` is marked as **sensitive**. Here are the commands to see your credentials:

Access Key ID:
```bash
echo "AWS_ACCESS_KEY_ID" $AWS_ACCESS_KEY_ID
AWS_ACCESS_KEY_ID AKIAIOSFODNN7EXAMPLE
```

Secret Access Key:
```bash
echo "AWS_SECRET_ACCESS_KEY" $AWS_SECRET_ACCESS_KEY
AWS_SECRET_ACCESS_KEY wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

_**HINT**: You'll need to find the **Environment Variables** section of your workspace settings._

---
name: chapter-5a-tfc-lab-solution
.center[.lab-header[👩🏻‍🏫 Lab Exercise 5a: Solution]]
<br><br>
.center[![:scale 100%](images/aws_encrypted_vars.png)]
When you're done your **Environment Variables** section should look like this. Make sure you are not entering these as ordinary Terraform variables.

---
name: terraform-plan-remote
# Run Terraform Plan
Run a **`terraform plan`** command and see what happens:

**CLI:**
```bash
terraform plan
```

**Output:**
```tex
Running plan in the remote backend. Output will stream here. Pressing Ctrl-C
will stop streaming the logs, but will not stop the plan running remotely.
Preparing the remote plan...
To view this run in a browser, visit:https://app.terraform.io/app/hashicorp-workshop/seanc-catapp/runs/run-f7oFdL4vyxC5L7Zg
Waiting for the plan to start...
...
*Error: Required variable not set: prefix
```

Looks like we need to set that `prefix` variable again. With remote execution *all* your variables and settings need to be stored in the app.

???
**You need to run at least one terraform apply on the command line to activate remote execution.  Don't jump to the GUI controls just yet...**

---
name: set-prefix-variable
# Set Your Prefix Variable
.center[![:scale 100%](images/set_prefix_gui.png)]
Go back to the **Variables** settings again, this time create a regular Terraform variable called **`prefix`**. Replace `YOURNAME` with the prefix you stored in your `terraform.tfvars` file earlier.

???
**Note that this is a regular Terraform variable, not an environment variable. You can change any of the defaults found in variables.tf with these fields.**

---
name: terraform-apply-remote
# Run Terraform Apply
Run **`terraform apply`**:

**CLI:**
```bash
terraform apply -auto-approve
```

**Output:**
```tex
Running apply in the remote backend. Output will stream here. Pressing Ctrl-C
will stop streaming the logs, but will not stop the plan running remotely.

Preparing the remote plan...

To view this run in a browser, visit:
https://app.terraform.io/app/hashicorp-workshop/seanc-catapp/runs/run-1F94Y1fTNsf8GhhH
```

Remote execution is now enabled. The results of your apply will still stream back into your console window, but Terraform is now running in the cloud. You can also watch the Terraform apply output in the GUI.

???
**Now you can run terraform either from the command line or from the GUI.**

---
name: chapter-5b-tfc-lab
.center[.lab-header[🖱️ Lab Exercise 5b: Terraform UI Runs]]
<br><br><br><br><br>
Configure three more variables in your workspace. These are the same **`height`**, **`width`**, and **`placeholder`** variables that we used before.

Now kick off a run in the using the **Queue Plan** button. Watch the results of your run in the UI.

Once the plan has completed, click **Confirm and Apply** to apply the changes you made.

---
name: chapter-5b-tfc-lab-solution
.center[.lab-header[🖱️ Lab Exercise 5b: Solution]]
<br><br>
.center[![:scale 100%](images/variables_answer.png)]
The local variables on your workstation are no longer used. Variables are now all stored in your workspace.

---
name: tfc-chapter-5-review
# 📝 Chapter 5 Review
<br>
.contents[
In this chapter we:
* Viewed our AWS Credentials
* Enabled Remote Execution
* Moved our AWS Creds to TF Cloud
* Created a prefix variable
* Ran Terraform Apply from the GUI
]

---
name: TFE-Chapter-6
class: center,middle
.section[
Chapter 6
Sentinel Policy Enforcement
]

---
name: what-is-sentinel
# What is Sentinel?
```hcl
# Restricting region in AWS
aws_region_valid = rule {
  all region_values as rv {
	rv == "us-east-1"
  }
}
# Restricting machine types in GCP
gcp_allowed_machine_types = [
  "n1-standard-1",
  "n1-standard-2",
  "n1-standard-4",
]
# Restricting publisher in Azure
azure_allowed_publishers = [
  "MicrosoftWindowsServer",
  "RedHat",
]
```

Sentinel is HashiCorp's policy enforcement language. Sentinel policies are checked after **`terraform plan`** is run. Sentinel will intercept bad configurations *before* they go to production, not after.

Sentinel rules help enforce compliance and security requirements in the cloud.

???
**Think of all the dos and do-nots that you want to enforce in your cloud environments. Maybe you want to limit the sizes of virtual machines, or to force web applications to always use SSL. Sentinel rules can be customized for most common security and compliance requirements.**

Talk about Sentinel and some other things you can do with it.

---
name: enable-workspace-destroy
# Appetite for Destruction
For the next lab we'll need to destroy and recreate your lab environment. Terraform Cloud requires a special environment variable to enable destruction of infrastructure.

.center[![:scale 100%](images/aws_confirm_destroy.png)]

Create a new Environment Variable named **`CONFIRM_DESTROY`** and set the value to **`1`**.

???
**This is a safety switch, it's there to prevent us from shooting ourselves in the foot and deleting production.**

---
name: destroy-your-application
# Destroy Your Application
<br><br>
Either from the command line, or the GUI, destroy your web application.

**CLI:**
```bash
terraform destroy -force
```

**GUI:**
.center[![:scale 100%](images/destroy_gui.png)]

.red[_**Do not click the red Delete from Terraform Cloud button.** This will delete your entire workspace. Remember to confirm the destroy action from within the UI._]

---
name: instructor-enable-sentinel
# Sentinel Policy Enforcement 🤖
.center[![:scale 100%](images/kitt_scanner.gif)]

Your instructor will enable a Sentinel policy across the entire organization.

A robot now stands guard between your Terraform code and the AWS APIs.

Take a break or discuss Sentinel testing while **`terraform destroy`** is running.

???
Instructor notes: take a break here. Or do a side panel discussion on how Sentinel works. Either way you need to buy some time. While your students are on break, go into your organization settings and flip the all-instances-must-have-tags on and set the enforcement mode to hard-mandatory.

---
name: create-your-application
# Re-deploy Your Application
**CLI:**
```bash
terraform apply -auto-approve
```

**Output:**
```tex
Organization policy check:

Sentinel Result: false

Sentinel evaluated to false because one or more Sentinel policies evaluated
to false. This false was not due to an undefined value or runtime error.

1 policies evaluated.

## Policy 1: aws-vpcs-must-have-tags-and-enable-dns-hostnames.sentinel (hard-mandatory)
...

FALSE - aws-vpcs-must-have-tags-and-enable-dns-hostnames.sentinel:22:1 - Rule "vpc_hostnames_true"

TRUE - aws-vpcs-must-have-tags-and-enable-dns-hostnames.sentinel:14:1 - Rule "vpc_must_have_tags"

Error: Organization policy check hard failed.
```
Oh no! Our **`terraform apply`** failed. How can we fix our code?

---
name: chapter-6-tfc-lab
.center[.lab-header[👮🏿‍♀️ Lab Exercise 6: Enable DNS Hostnames]]
<br><br><br><br><br>
The Networking Team has a new requirement: All VPCs must have tags and must have `enable_dns_hostnames` set to `true`.

We have implemented a policy that disallows an AWS instance to be launched without tags or with `enable_dns_hostnames` set to `false`.

Fix the code on your local workstation so that it passes the Sentinel check and run `terraform apply`.

???
**I'm going to keep the organization view up here on the projector screen. Let's see how fast everyone can get their code compliant and have a clean terraform apply.**

Instructors: Have fun with this exercise. Pull up your organization's homepage on the projector screen. You can make a game out of it, see who gets their code compliant first.

---
name: chapter-6-tfc-lab-solution
.center[.lab-header[👮🏿‍♀️ Lab Exercise 6: Solution]]
<br><br><br><br><br>
Our new Sentinel policy looks through the Terraform plan output and searches for VPCs that have the `enable_dns_hostnames` property set to `false`. In order to pass the Sentinel test you must change your code to have your VPC's `enable_dns_hostnames` property be set to `true`, then run **`terraform apply`**. Your apply should now complete successfully.

Solution:
```hcl
resource "aws_vpc" "se_training_workstation" {
  cidr_block           = "${var.vpc_cidr_block}"
  enable_dns_hostnames = true
}
```
---
name: create-a-new-policy-0
# Create a New Sentinel Policy
.center[![:scale 70%](images/create_a_new_policy.png)]
Before we re-create your workspace, let's implement a simple Sentinel policy for our organization.

Under your **Organization** settings select **Policies** and then **Create a New Policy**.

---
name: create-a-new-policy-1
# Create a New Sentinel Policy
.center[![:scale 45%](images/aws_policy_name_and_mode.png)]

Name it **`restrict_allowed_instance_types`**. You can put whatever you like in the description.

The Sentinel code for your policy is on the next slide. Copy and paste it into the **Policy Code** field.

---
name: create-a-new-policy-2
# Sentinel Policy Code - Copy & Paste
<br><br><br><br>
```hcl
import "tfplan"

allowed_instance_types = [ "t2.nano", "t2.micro" ]

main = rule {
  all tfplan.resources.aws_instance as _, instances {
    all instances as _, r {
      r.applied.instance_type in allowed_instance_types
    }
  }
}
```

---
name: create-a-new-policy-3
# Create a New Sentinel Policy
.center[![:scale 60%](images/create_policy_button.png)]
<br><br>
Leave the Policy Sets box alone for now. We will create a policy set on the next slide.

Click **Create Policy** to proceed.


---
name: create-policy-set-0
# Create a Policy Set
.center[![:scale 60%](images/create_a_new_policy_set_gui.png)]
<br>
**Policy Sets** determine where your policies are applied. Policies can be applied to groups of workspaces, or to your entire organization.

Under **Policy Sets** select **Create a New Policy Set**.

---
name: create-policy-set-1
Create a Policy Set
<br><br>
.center[![:scale 50%](images/aws_policy_set_settings.png)]
<br><br><br>

Name your policy set **global_restrict_instance_type**.

Make sure **Policies enforced on all workspaces** is selected.

---
name: create-policy-set-2
# Create a Policy Set
.center[![:scale 60%](images/aws_add_policy_to_policy_set.png)]
<br>
Add the **`restrict_allowed_instance_types`** policy you created in the previous step to your policy set.

Click **Create Policy Set** at the bottom to save and activate your new policy.

Now your policy will be enforced for all workspaces across your sandbox organization.

---
name: tfc-chapter-6-review
# 📝 Chapter 6 Review
<br>
.contents[
In this chapter we:
* Destroyed our Application
* Enabled a Sentinel Policy
* Watched our Terraform Code Fail
* Fixed the Code to Pass Sentinel Tests
* Verified the New Policy
* Created our own Sentinel policy
]

---
name: TFE-Chapter-7
class: center,middle
.section[
Chapter 7
Version Control Systems and Terraform
]

---
name: whats-a-vcs
# What is a Version Control System (VCS)?
.center[![:scale 80%](images/tfc-vcs.webp)]
Version control systems are applications that allow users to store, track, test, and collaborate on changes to their infrastructure and applications. Terraform Cloud integrates with most common Version Control Systems.

---
name: tfc-infra-as-code-workflow
# Infrastructure as Code
<br><br>
Terraform Cloud can directly integrate with source code repos in GitHub Enteprise, Gitlab, and Bitbucket. This allows you to build simple DevOps workflows with code reviews, testing and approvals.

Until now all our code changes have been done on our workstation. Let's upgrade our workspace to use the repository fork we created earlier.

???
TODO: Add an image to this slide.

---
name: delete-the-app
# Delete the App
.center[![:scale 100%](images/queue_destroy_plan.png)]

First we need to move our workspace out of the training organization and into our sandbox organization.

1. Go into the **Destruction and Deletion** settings for your workspace.
2. Click on the **Queue Destroy Plan** button. When the run reaches the confirmation stage click **Confirm and Apply**.

Move on to the next slides while the destroy run proceeds.

???
Instructors: if anyone's workspace fails to delete, revert your sentinel policy back to 'advisory' and have them run it again. This was observed with Terraform 0.12 when trying to delete.

```
An error occurred: block_allow_all_http.sentinel:22:10: unsupported type for looping: undefined
```

---
name: switch-back-to-sandbox
# Change to Your Sandbox Org
<br>
.center[![:scale 70%](images/choose_org.png)]

Use the Organization pull-down menu to go back to your sandbox organization. This is a clean development environment where you can experiment with Terraform Cloud.

---
name: chapter-7a-tfc-lab
.center[.lab-header[👩🏼‍🔧 Lab Exercise 7a: Integrate with Github]]
<br><br>
.center[![:scale 70%](images/integrate_github.png)]
During this lab you'll follow the instructions on the Terraform docs site for connecting to Github. Visit the link below and carefully follow the instructions to integrate your Terraform Cloud organization with your GitHub account.

.center[https://www.terraform.io/docs/enterprise/vcs/github.html]

---
name: chapter-7a-tfc-lab-solution
.center[.lab-header[👩🏼‍🔧 Lab Exercise 7a: Solution]]
<br><br>
.center[![:scale 100%](images/vcs_success.png)]
If you successfully connected your Terraform Cloud organization to Github, you'll see the above text in the VCS Providers section of your organization settings.

Congratulations, you can now create repo-backed Terraform workspaces.

---
name: create-new-workspace
# Create a New Workspace
.center[![:scale 50%](images/create_repo_workspace.png)]
Create a new workspace. This time you'll see an option to choose a git repository to connect to. Find your forked copy of the **`hashicat-aws`** repo and click on **Create Workspace**.

---
name: update-remote-backend
# Update the Remote Backend
<br><br>
Update your **`remote_backend.tf`** file so that the organization matches your sandbox org:

```hcl
terraform {
  backend "remote" {
    hostname = "app.terraform.io"
*   organization = "YOURNAME-sandbox"
    workspaces {
      name = "YOURNAME-catapp"
    }
  }
}
```

Save the **`remote_backend.tf`** file.

---
name: migrate-remote-backend
# Migrate the State
Command:
```bash
terraform init
```

Output:
```tex
Terraform has detected that the configuration specified for the backend
has changed. Terraform will now check for existing state in the backends.

Acquiring state lock. This may take a few moments...
Do you want to copy existing state to the new backend?
  Pre-existing state was found while migrating the previous "remote" backend to the
  newly configured "remote" backend. No existing state was found in the newly
  configured "remote" backend. Do you want to copy this state to the new "remote"
  backend? Enter "yes" to copy and "no" to start with an empty state.

  Enter a value: yes

Releasing state lock. This may take a few moments...

*Successfully configured the backend "remote"! Terraform will automatically
*use this backend unless the backend configuration changes.
```

???
We're actually moving your state file from one organization to another. Cool!

---
name: switch-to-git-bash
# Switch to Git Bash
<br>
For the next lab we're going to change our local shell to Git Bash.

Click on the pulldown menu at the top of your terminal where it says:

**`1: powershell`**

Click on **Select Default Shell**.

.center[![:scale 30%](images/select_default_shell.png)]

---
name: switch-to-git-bash
# Switch to Git Bash
.center[![:scale 100%](images/select_git_bash_2.png)]

Change your default shell to Git Bash and launch a new Terminal window. The rest of the training commands will be run inside this shell. Note that your file paths look different under Git Bash:

Command:
```bash
pwd
```

Output:
```bash
/c/Users/hashicorp/Desktop/hashicat-azure
```

???
Terraform is a multi-platform tool and can be run on Mac or Windows, Bash or Powershell.

---
name: install-terraform-helper-0
# Install the Terraform Helper Tool (Linux)
Terraform Helper is a command line tool that makes it easier to manage Terraform Cloud workspaces and variables. The source code can be found at the following URL:

https://github.com/hashicorp-community/tf-helper

**Step 1**: Run the **`install_tfh.sh`** script inside of the **hashicat-aws/files** directory. You may simply copy and paste the commands below:

```bash
cd ~/hashicat-aws/files
./install_tfh.sh
source ~/.bash_profile
```

**Step 2**: Configure the required environment variables. _Replace with your own organization and workspace._

```bash
export TFH_org=ORGNAME
export TFH_name=WORKSPACENAME
```

_Instructions continue on the next slide..._

---
name: install-terraform-helper-1
# Install the Terraform Helper Tool
**Step 3**: Auto-generate your curlrc file with the curl-config helper subcommand:

Command:
```bash
tfh curl-config -tfrc
```

Bash Output:
```bash
/home/ubuntu/.tfh/curlrc generated from /home/ubuntu/.terraformrc
```

Powershell Output:
```powershell
/c/Users/hashicorp/.tfh/curlrc generated from /c/Users/hashicorp/.terraformrc
```

Now you are ready to use the **`tfh`** command line tool. Proceed to the next slide.

---
name: chapter-7b-tfc-lab
.center[.lab-header[⚗️ Lab Exercise 7b: Upload Variables]]
<br><br>
You'll need to recreate the environment variables and terraform variables in your workspace. This is fairly easy to do with the Terraform Helper tool. Run the following command, and _don't forget to change **prefix** to your own prefix_. The rest of the command can remain the same.

Command:
```bash
tfh pushvars -overwrite-all -dry-run false \
  -env-var "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" \
  -senv-var "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" \
  -var "prefix=CHANGEME"
```

Output:
```tex
Updating prefix type:terraform hcl:false sensitive:false value:yourprefix
Updating AWS_ACCESS_KEY_ID type:env hcl:false sensitive:false value:AKIA266GU7ZPMEXAMPLE
Updating AWS_SECRET_ACCESS_KEY type:env hcl:false sensitive:true value:REDACTED
```

???
Instructors: You must have the jq tool installed on your workstation to use the tfh tool.


---
name: chapter-7b-tfc-lab-solution
.center[.lab-header[⚗️ Lab Exercise 7b: Solution]]
<br><br>
.center[![:scale 100%](images/aws_encrypted_vars.png)]
You should now see all your variables stored safely in the Terraform Cloud console.

---
name: chapter-7c-tfc-lab-part-3
.center[.lab-header[🐱 Lab 7c: Add More Variables]]
<br><br><br>
**Extra Credit Lab:**

See if you can add your **height**, **width**, and **placeholder** variables to your workspace by editing the command we ran in on the last slide.

Read up on the **`-overwrite-all`** and **`-dry-run`** flags in the [TF Helper docs](https://github.com/hashicorp-community/tf-helper/blob/master/tfh/usr/share/doc/tfh/tfh_pushvars.md).

---
name: chapter-7c-tfc-lab-solution
.center[.lab-header[🐱 Lab 7c: Solution]]
<br><br><br>
Simply add more **`-var`** flags at the end of the command to update your variables.

Command:
```bash
tfh pushvars -overwrite-all -dry-run false \
  -env-var "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" \
  -senv-var "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" \
  -var "prefix=CHANGEME" \
  -var "placeholder=www.placecage.com" \
  -var "height=600" \
  -var "width=600"
```

NOTE: The **`\`** characters indicate that the command should continue on the next line. This entire block of text should be copied and pasted into the terminal all at once.

---
name: enable-auto-apply
# Enable Auto Apply
<br><br>
.center[![:scale 100%](images/enable_auto_apply.png)]
In some environments you may wish to enable auto apply.

This means that TFE will automatically apply changes when a plan is successful. Any push to the default branch of the source code repo will trigger a **`plan`** and **`apply`**.

Enable auto apply on your workspace now.

---
name: configure-git-bash
# Configure Git Identity
<br><br><br>
Before you can push changes to your fork of the hashicat-aws repo, you'll need to configure your email and username settings. Run the commands below with your own email address and name:

Commands:
```bash
git config --global user.email "ada@example.com"
git config --global user.name "Ada Lovelace"
```

---
name: chapter-7d-tfc-lab
.center[.lab-header[💾 Lab Exercise 7d: Push Change to VCS]]
<br><br>
Your boss has asked you to update the content on the website. Edit the **`files/deploy_app.sh`** script and add your own content between the BEGIN and END tags.

```html
  <!-- BEGIN -->
  <center><img src="http://${PLACEHOLDER}/${WIDTH}/${HEIGHT}"></img></center>
  <center><h2>Meow World!</h2></center>
  Welcome to ${PREFIX}'s app. Replace this text with your own.
  <!-- END -->
```

When you are done editing the file save it and push the change to your remote repo via the `git` CLI.

Trigger a new Terraform run from the UI. This must be done manually (or via the API) once. Future commits to the git repo will trigger builds automatically.

---
name: chapter-7d-tfc-lab-solution-1
.center[.lab-header[💾 Lab Exercise 7d: Solution Part 1]]
<br><br><br><br>

Commit your changes and push them to the remote repo via the `git` CLI.

```bash
git add files/deploy_app.sh
git commit -m "Updated website."
git push origin master
```
<br><br>
.center[![:scale 80%](images/git_triggered_run.png)]
You can see which git commit triggered the run in the Terraform Cloud UI.

???
Instructors:  Depending upon your students' familiarity with git, you may need to review some basic git commands here like `git add`, `git commit`, and `git push`.

---
name: tfc-chapter-7-review
# 📝 Chapter 7 Review
.contents[
In this chapter we:
* Connected our Organization to VCS
* Created a New Workspace
* Migrated Terraform State
* Installed the TFH Tool
* Uploaded Environment Variables
* Tested the Sentinel Policy
* Re-Deployed our Application from VCS
* Deleted Insecure Local Credentials
]

---
name: TFE-Chapter-8
class: center,middle
.section[
Chapter 8
VCS Collaboration for Teams
]

---
name: vcs-driven-workflow
# Collaboration With VCS
.center[![:scale 100%](images/git_workflow_tests.png)]

When your Terraform code is stored in a version control system, you unlock extra features like pull requests, code reviews and testing. Here's an example showing the tests that run on our training lab repo.

You can configure rules like requiring tests to pass, code reviews, approvals and more. Let's do a code collaboration exercise.

---
name: chapter-8a-tfc-lab
.center[.lab-header[👫 Lab Exercise 8a: VCS Collaboration]]
<br>
One of your team members needs to make a change to your shared dev environment. Break into pairs and exchange the URLs of your hashicat-aws repo forks. Take turns doing the steps below:

**Partner 1:**
1. Navigate to your partner's git repo URL.
2. Click on the **`files/`** directory then click on **`deploy_app.sh`**.
3. Click on the pencil ✏️ icon on the upper right side of the page.
4. Make some edits to your partner's webapp code.
5. Submit a pull request.

**Partner 2:**
1. Log onto GitHub and view your new pull request.
2. Post a comment about the proposed changes.
3. Merge the pull request to the master branch.
4. Pull up the Terraform Cloud UI and observe the git-triggered run.
5. Check your webapp and see the changes you approved.

Exchange roles and repeat the lab exercise.

---
name: chapter-8a-tfc-lab-solution
.center[.lab-header[👬 Lab Exercise 8a: Solution]]
<br>
.center[![:scale 100%](images/merge_pull_request.png)]

You can enable different pre-merge checks and options in your git repo settings. Explore the **Settings** >> **Branches** menu to learn more about Branch Protection Rules.

???
In the real world we might run a bunch of automated tests, and require one or more approvers to do a code review before any changes are merged.

---
name: tfc-chapter-8-review
# 📝 Chapter 8 Review
.contents[
In this chapter we:
* Edited a file on our partner's repo
* Created a fork and submitted a pull request
* Reviewed and discussed the pull request
* Merged changes into the code repo
* Triggered a Terraform run from a git merge
]

---
name: TFE-Chapter-9
class: center,middle
.section[
Chapter 9
Access Controls
]

---
name: terraform-rbac
# Role Based Access Controls (RBAC)
.center[![:scale 60%](images/teams_list.png)]

In the previous chapter we made a change by merging a code change into the source code repo. Your users can also collaborate within the Terraform UI.

Terraform Cloud is a multi-tenanted application that supports fine-grained access controls. You can create multiple organizations, each containing its own teams and users.

???
TODO: Find a better image for this slide.

---
name: chapter-9a-tfc-lab
.center[.lab-header[👭 Lab Exercise 9a: Share the Sandbox]]
<br><br>
This is another partner exercise. In this lab you'll invite your partner to your organization.

**Partner 1**:
1. Go into your organization's team settings and create a new team called **developers**.
2. Visit your workspace's **Team Access** menu and grant **write** access to your developers team.
3. Invite your partner to your organization's **developers** team.

**Partner 2**:
Verify that you are able to see your partner's organization and workspace.

Trade roles and repeat the lab exercise.

---
name: chapter-9a-tfc-lab-solution
.center[.lab-header[👭 Lab Exercise 9a: Solution]]
<br><br>
.center[![:scale 60%](images/team_workspace_acls.png)]
Users can be members of multiple organizations, and multiple teams within each organization. Teams are granted different levels of access to workspaces within the organization depending on their role.

You can learn more about workspace permissions on the [Terraform Enterprise Docs](https://www.terraform.io/docs/enterprise/users-teams-organizations/permissions.html)

???
TODO: Put a better image on this slide.

---
name: chapter-9b-tfc-lab
.center[.lab-header[🔒 Lab Exercise 9b: RBAC Controls]]
<br><br><br>
One of your team members needs a larger virtual machine size for load testing. This is another partner exercise.

**Partner 1**:
In Partner 2's workspace, create a new variable called **`instance_type`** and set it to **`t2.medium`**. Click on the **Queue Plan** button to trigger a new terraform plan. What happens? Are you able to override the Sentinel failure and continue?

**Partner 2**:
Log onto your workspace and navigate to the current run. Have a discussion with Partner 1 about why they need a larger instance. Agree upon a solution and redeploy the application.

Exchange roles and repeat the lab exercise.

---
name: chapter-9b-tfc-lab-solution
.center[.lab-header[🔒 Lab Exercise 9b: Solution]]
<br><br>
.center[![:scale 100%](images/t2micro_instance_type.png)]
The Sentinel policy you created earlier checks any AWS Instances that appear in the plan, and looks at the configured `instance_type`. This is compared to the list of approved types which includes only **t2.nano** and **t2.micro**. Anything outside of these two approved instance types will be flagged by Sentinel.

There's no single correct answer to this lab. You may decide that partner 1 doesn't need such a large instance for their development work. Or partner 2 might grant an exception and use their admin powers to override the Sentinel failure. Or perhaps the new instance type could be added to the Sentinel rule to allow it as a new option.

---
name: reset-environment
# Reset the Lab Environment
Before the next chapter we need to make some simple modifications to our **main.tf** and **outputs.tf** files.

In **main.tf** comment out everything below the first resource in the file:

```hcl
provider "aws" {
  region = "${var.region}"
}

# EVERYTHING BELOW HERE GETS COMMENTED OUT

# resource "tls_private_key" "hashicat" {
  # algorithm = "RSA"
# }

...

```

Comment out your entire **outputs.tf** file too:

```hcl
# output "catapp_url" {
  # value = "http://${aws_route53_record.hashicat.fqdn}"
# }
```
Save both files, commit them to git, and push to your remote repository. This will reset your environment by removing all resources we have created.

???
Instructor note: The next run will get stopped by your policy. Yes, it feels a bit weird and counterintuitive. That is just the way Sentinel works right now.

---
name: tfc-chapter-9-review
# 📝 Chapter 9 Review
<br>
.contents[
In this chapter we:
* Created a new team for developers
* Granted devs write access to our workspace
* Added our partner to the devs team
* Tested our Sentinel policy
* Collaborated on an infrastructure change
]

---
name: TFE-Chapter-10
class: center,middle
.section[
Chapter 10
Private Module Registry
]

---
name: private-module-registry
# TFE Private Module Registry
.center[![:scale 80%](images/aws_pmr.png)]

Terraform modules are reusable packages of Terraform code that you can use to build your infrastructure. Terraform Cloud includes a Private Module Registry where you can store, version, and distribute modules to your organizations and teams.

---
name: clean-up-workspace
# Terraform Apply
<br><br><br>
.center[![:scale 50%](images/rebuild_lab_environment.png)]
Trigger a terraform run from the GUI. Confirm that it's actually running before you go onto the next lab. You don't need to watch it finish. This run will ensure that you have an empty resource group for the next labs.

---
name: chapter-10a-tfc-lab
.center[.lab-header[📚 Lab Exercise 10a: Install a Module]]
<br><br><br>
This is an individual lab.

1. Visit the Terraform public module registry and navigate to the [AWS Workshop Fargate Module]().
2. Find the GitHub source code link on the page and click on it.
3. Fork the module repo into your own GitHub account
4. Back in your TFE organization, navigate to the **modules** section and add the AWS ECS Fargate Module to your private registry.

???
Updated to deploy an arcade game in a container.

---
name: chapter-10a-tfc-lab-solution
.center[.lab-header[📚 Lab Exercise 10a: Solution]]
<br><br>
.center[![:scale 100%](images/aws_add_a_module.png)]
If you have a valid VCS connection, the private module registry can find any git repositories that you have access to. These module repos can be imported into Terraform Cloud, where your users can easily access them.

---
name: use-a-public-module
# Use a Public Module
<br><br><br>
Add the following code to your main.tf file, right below the provider.

```terraform

provider "aws" {
  region = "us-west-2"
}

module "s3" {
  source  = "opsmag/s3/aws"
  version = "0.1.0"
  environment = "workshop"
  company_name = "hc-se-workshop"
  bucket_name = "YOUR_NAME"
  region = "us-west-2"
}
```

.center[_Setup instructions continue on the next slide..._]

---
name: use-a-private-module
# Use a Private (Your) Module
<br><br>
Add the following code to your main.tf file, right below the `networking` module. Be sure to replace **`YOURORGNAME`** with your own organization name.

```terraform
module "workshop-fargate" {
  source        = "app.terraform.io/hc-se-tfc-demo-neil/workshop-fargate/aws"
  version       = "0.0.2"
  prefix        = "YOUR_NAME"
  bucket_name   = "${module.s3.s3_bucket_id}"
}

output "alb_dns_name" {
    value = "${module.workshop-fargate.alb_dns_name}"
}
```

---
name: view-your-module-composite
# Run and View Your App Composed of Modules
<br><br><br><br>
Commit your code and push your changes to the remote repo. This will trigger a Terraform run. You should have a new application URL in the output:

```hcl
alb_dns_name = neil-lb-934610893.us-west-2.elb.amazonaws.com
```
???
Instructor note: You might see a git error message when you try to push. This is because your partner pushed changes to your repo, and you need to **`git pull`** his or her changes before you proceed.

If your students have any trouble with stuck state show them how to use the **`terraform state list`** and **`terraform state rm`** commands:

```bash
hashicorp@seanclab000 MINGW64 ~/Desktop/hashicat-aws (master)
$ terraform state list
module.web_app_container.azurerm_app_service_plan.main[0]

hashicorp@seanclab000 MINGW64 ~/Desktop/hashicat-aws (master)
$ terraform state rm module.web_app_container.azurerm_app_service_plan.main[0]
```


---
name: shall-we-play-a-game
.center[🕹️ Shall We Play a Game? 👾]

.center[![:scale 80%](images/welcome_arcade.png)]

.center[**Congratulations! You made it to the end of the workshop.**]

---
name: tfc-chapter-10-review
# 📝 Chapter 10 Review
<br>
.contents[
In this chapter we:
* Explored the public module registry
* Forked the container webapp module
* Added the module into our registry
* Used the module in our terraform code
* Pushed a change to the master branch
* Deployed a container application
]

---
name: before-you-go
# Before You Go...
Please run **`terraform destroy`** command to delete your lab environment(s) before you go. This helps us keep our cloud costs under control.

Command:
```bash
terraform destroy
```

Output:
```tex
Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

Destroy complete! Resources: 12 destroyed.
```

---
name: Feedback-Survey
# Workshop Feedback Survey
<br><br>
.center[
Your feedback is important to us!

The survey is short, we promise:

# http://bit.ly/hashiworkshopfeedback
]

---
name: additional-resources-tfe
# Additional Resources
If you'd like to learn more about Terraform Enterprise or Terraform Cloud visit the links below:

Terraform Enterprise Product Page
https://www.hashicorp.com/products/terraform/

Why Consider Terraform Enterprise Over Open Source?
https://www.hashicorp.com/resources/why-consider-terraform-enterprise-over-open-source

Terraform Enterprise Docs
https://www.terraform.io/docs/enterprise/index.html

Terraform AWS Provider Documentation
https://www.terraform.io/docs/providers/aws/

Link to this Slide Deck
https://bit.ly/hashiazure

---
name: TFE-Chapter-11
class: center,middle
.section[
⚔️   ~Chapter 11~   🐲
The Gauntlet
]

---
name: chapter-11-tfc-lab-0
.center[.lab-header[🏆 Lab Exercise 11: The Gauntlet]]
<br>
This challenging lab brings together everything you learned in previous chapters. Each partner should complete the setup, then your instructor will start the clock for **The Gauntlet**.

**Setup Part 1: Create a UAT Branch**
1. Go into your fork of the hashicat-aws repo and create a new branch called **`uat`**:
.center[![:scale 40%](images/uat_branch.png)]
2. Click on the **Settings** menu then click on **Collaborators**. Add your partner's GitHub username and click **Add Collaborator**.
3. Share the invite link with your partner. Accept your partner's invite link to join their repository as a collaborator.

.center[_Setup instructions continue on the next slide..._]

---
name: chapter-11-tfc-lab-1
.center[.lab-header[💎 Lab Exercise 11: The Gauntlet]]
<br>
**Setup Part 2: Add a Sentinel Policy**
1. Create a new Sentinel policy called **enforce_https**
2. Copy the code in the **`files/aws-vpc-must-have-tags-and-enable-dns-hostnames.sentinel`** file into the policy code field.
3. Set the policy enforcement level to soft-mandatory.
4. Create a policy set to apply the policy globally across all workspaces.
5. If you need a refresher on policies and policy sets head back to [Chapter 7](#create-a-new-policy-0)

.center[_Setup instructions continue on the next slide..._]

---
name: chapter-11-tfc-lab-2
.center[.lab-header[🧙🏾‍♂️ Lab Exercise 11: The Gauntlet]]
<br>
**Setup Part 3: Protect the Master (production) Branch**

.center[![:scale 90%](images/protect_master.png)]

1. Click on the **Branches** menu and click on the  **Add Rule** button.
2. Type **master** into the **Branch name pattern** field.
3. Check the following boxes:
```
☑️ Require pull request reviews before merging
☑️ Require status checks to pass before merging
 -  ☑️ sentinel/yourorghere/yourworkspacehere
 -  ☑️ atlas/yourorghere/yourworkspacehere
```
4. Click the **Create** button at the bottom of the page.

---
name: chapter-11-tfc-lab-3
.center[.lab-header[🧝‍♀️ Lab Exercise 11: The Gauntlet]]
<br>
**Setup Part 4: Set Up UAT and Production**

1. Back in the TFE console, create a new workspace called **webapp-uat** and connect it to the **uat** branch of your repo.
2. Use the tfh tool to upload all your variables into the new workspace.  **Pick a new prefix for UAT!**
```bash
export TFH_name=webapp-uat
tfh pushvars -overwrite-all -dry-run false \
  -senv-var "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" \
  -senv-var "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" \
  -var "prefix=yourprefix"
```
3. In Visual Studio Code clone a copy of your **partner's** repository:
```bash
cd Desktop
git clone https://github.com/mypartner/hashicat-aws uat-webapp
cd uat-webapp
git checkout uat
code -r .
```

---
name: chapter-11-tfc-lab-4
.center[.lab-header[💰 Lab Exercise 11: The Gauntlet]]
<br>
You are now ready to run **The Gauntlet**.

**The Scenario**: You are a sysadmin at the Palace Arcade. The company has just been acquired by larger rival Pizza Planet. Pizza Planet management has asked your team to update the website to match the new company brand and logo. Pizza Planet's security team also requires that all public-facing websites run only in SSL (https only) mode.

**Your Mission**: Update the content of the website in UAT, make sure all Sentinel tests pass, and then submit a pull request to get your changes into production.

Change the **`container_image`** parameter in your Terraform code to **`scarolan/pizzaplanet`**.

Your instructor will start the timer once everyone is ready. How fast can you get through **The Gauntlet**?

---
name: before-you-go
# Before You Go...
Please run **`terraform destroy`** command to delete your lab environment(s) before you go. This helps us keep our cloud costs under control.

Command:
```bash
terraform destroy
```

Output:
```tex
Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

Destroy complete! Resources: 12 destroyed.
```

---
name: Feedback-Survey
# Workshop Feedback Survey
<br><br>
.center[
Your feedback is important to us!

The survey is short, we promise:
s
http://bit.ly/hashiworkshopfeedback
]
