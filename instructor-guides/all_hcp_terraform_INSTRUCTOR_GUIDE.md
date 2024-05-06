# HCP Terraform Workshops - Instructor Guide

This guide will prepare you to deliver a 3/4 day [HCP Terraform on AWS/Azure/GCP Workshop](https://hashicorp.github.io/workshops).

Because the content is almost identical, we will cover the instructions for all three major cloud vendors (Azure/AWS/GCP) in one document.

This workshop content is suitable for HashiCorp prospects and customers. The workshop is a combination of lecture slides and hands-on labs that introduce HCP Terraform features and is targeted toward intermediate users. The workshop may be presented in-person, over the web, or as a self-guided tutorial.

The workshop alternates between lectures with accompanying slides and hands-on lab exercises. New concepts that are introduced in the slides are reinforced in the labs. As an instructor you should be well familiar with the slide deck and training labs. Go through the course and make sure you understand all of the major concepts and lab exercises.

When possible you should attend a live training session to observe and learn from another instructor. We will also have video recordings of this workshop available soon. Also be sure to join these Slack channels where you can get help and ask questions: #proj-instruqt and #se-workshops

### Prerequisites
Prerequisites for these workshops are as follows:

* Complete one of the Intro to Terraform workshops (or equivalent experience)
* An HCP Terraform account
* A trial-enabled organization in HCP Terraform
* A Github.com account

Participants may sign up for an HCP Terraform account *before* the training, however they will have the option of creating an account during the workshop. Users will be instructed to create a new 14 day *trial* organization in the Instruqt track. They should NOT be using an existing organization. 

**Work with your local SME or HCP Terraform admin to get your organizations upgraded to trials.**

### Scheduling your workshop
Please add all workshops, both public and private, to the shared instruqt-workshops Google calendar as follows:

1. Create a new event on the instruqt-workshops calendar and set the name to the name of your workshop which could match a name being used by Field Marketing if it is public or the name of a specific customer and a product if it is private. **Note that this calendar event should be separate from the one you send to workshop attendees.**
2. Set the begin and end times of the event to the begin and end times of your workshop.
3. Include the following information in the description:
    1. The name of the host (probably yourself) after "Host:"
    2. The names of presenters after "Presenters:"
    3. A list of tracks that your workshop will use after "Tracks:", listing the URL of each track on its own line. **Please do not list links to Instruqt invites.**

Before saving the event, be sure to set the calendar as "instruqt-workshops" instead of your own personal calendar.

### Email invitation
Here is some boilerplate text you can use or customize when inviting or announcing your workshop:

```
HCP Terraform on XXXXX
A hands-on technical workshop

Supercharge your Cloud infrastructure management with HCP Terraform.

Here's the workshop syllabus showing the topics we will cover:

1. Community Edition to HCP/Enterprise
🌥️ HCP Terraform Overview
👨🏽‍🏫 Review the Basics
🔗 Configure Remote State

2. Security and RBACs
🔐 Protect Sensitive Variables
🛡️ Work With Access Controls

3. VCS & Policy Enforcement
🕸️ Connect to VCS
👬 Collaboration with VCS
👮 Sentinel Policy Enforcement

4. Terraform Modules & API
⚙️ Terraform Private Registry
🏗️ API Driven Workflows

5. Extra Resources
⚗️ Bonus Lab
🌐 Useful Links

Prerequisites:
* Complete one of the Intro to Terraform workshops
* Have an HCP Terraform account
* Organization in HCP Terraform with trial features enabled
* A github.com account

```

### Markdown Slide Decks
The slide decks for these workshops are published here:

#### https://hashicorp.github.io/workshops

#### Navigation
Use the arrow keys (up/down or left/right) to navigate back and forth between slides.

Press the `P` key to enter presenter mode and reveal the speaker notes.

Press the `C` key to pop open an external window that will stay synced with your speaker notes window. This is useful for keeping notes on your laptop while showing the presentation on the projector.

#### RemarkJS
The slide deck for this training is written completely in [Markdown](https://guides.github.com/features/mastering-markdown/) using the [RemarkJS](https://remarkjs.com/#1) framework. This allows us to publish slide decks from a source code repository. The slide deck is easy to maintain, lightweight, and can be accessed from anywhere. Updates and changes to the deck can be made quickly and efficiently by simply editing the markdown source files. If you find any mistakes or issues with the slides please add them to our issue tracker:

https://github.com/hashicorp/field-workshops-terraform/issues

### Instruqt Labs
At certain points in the slide deck there are links to the lab exercises. [Instruqt](https://instruqt.com/hashicorp) is our lab platform. The lab exercises are stored in private tracks so you'll need to log onto instruqt and request access to join the `members` team to see these links. Join the #proj-instruqt channel in Slack to request access.

Go through your track from start to finish and make sure you understand everything. Students may have questions during the labs. When presenting a workshop be sure to give enough time for all your participants to go through the labs.

### v2 (new) tracks

https://play.instruqt.com/hashicorp/tracks/terraform-cloud-aws-v2<br>
https://play.instruqt.com/hashicorp/tracks/terraform-cloud-azure-v2<br>
https://play.instruqt.com/hashicorp/tracks/terraform-cloud-gcp-v2<br>

### v1 (legacy) tracks
https://play.instruqt.com/hashicorp/tracks/terraform-cloud-aws<br>
https://play.instruqt.com/hashicorp/tracks/terraform-cloud-azure<br>
https://play.instruqt.com/hashicorp/tracks/terraform-cloud-gcp<br>


#### Creating Instruqt Invites
Once you've gotten an invite to the HashiCorp organization you can create temporary invite links for your students:

1. Click on the **Invites** tab under https://play.instruqt.com/hashicorp. (Note that you must be have the Content Contributor role within the Instruqt HashiCorp organization to create invites. If you don't have that, see this [link](https://hashicorp.atlassian.net/wiki/spaces/SE/pages/511574174/Instruqt+and+Remark+Contributor+Guide#InstruqtandRemarkContributorGuide-GettingAccess).)
2. Click on the **Create** button to create a new invite.
3. Create a descriptive title such as "Acme HCP Terraform Workshop".
4. Select the track you want to make available. Typing "HCP Terraform" will help you find the right track in the filtered list.
5. Leave "How many times can this invite be used?" set to 0.
6. Set the invite to expire in one month.
7. Leave "How many times can the track be played?" set to 0.
8. Make the track available to your user for 1 month.
9. Do not enable the **Allow anonymous** setting if you want to be able to track which users played the track based on their emails.

### Preparation Steps
We recommend you perform the following steps before TA-ing or teaching any of the TFC workshops if you have previously done so:

1. Delete your fork of the "hashicat-aws", "hashicat-azure", or "hashicat-gcp" repository and then re-fork it from https://github.com/hashicorp/hashicat-aws, https://github.com/hashicorp/hashicat-azure, or https://github.com/hashicorp/hashicat-gcp. This will ensure that you have the latest version without changes that you pushed while running through the workshop in the past.
2. Delete your fork of the https://github.com/hashicorp/tfc-workshops-sentinel repository and re-fork it. This will ensure that you have the latest version.
3. Delete your "hashicat-aws", "hashicat-azure", or "hashicat-gcp" workspace from your TFC organization.

### Skipping in the HCP Terraform tracks
HashiCorp employees (if members of the Instruqt HashiCorp organization) can now skip ahead in the TFC tracks. This has actually been the case for some time, but had never previously been documented. In actuality, the skipping would not have worked very well since the solve script needed to support skipping were not fully implemented.

We have not yet enabled skipping for end-users even though Instruqt now supports that. It is debatable whether allowing end-users to skip challenges is really desireable. They'll learn more if they don't skip.

Skipping for HashiCorp users is enabled through the combination of a `fastforward` script written by the first challenge's solve script and the remaining solve scripts which looks for a file, "/root/skipconfig.json", created by that script if a user runs it.

So, if you would like to skip challenges while running one of these tracks, you should do the following:

1. Run the `fastforward` script during a challenge (preferably the first). Just type `fastforward`.
2. This script will prompt you to enter your TFC organization, the name of your TFC workspace, your TFC token, your GitHub user ID, your GitHub personal access token, your GitHub user name (first and last names), your GitHub email, and an OAuth ID for a VCS connection in your TFC organization.
3. Providing all of those will enable later solve scripts in the current TFC track to properly skip ahead to later challenges.

To actually skip one or more challenges while running one of the TFC tracks, return to the track's home page and click the "Skip to" button of the challenge you wish to skip to.

Please note the following restrictions on skipping:
* Do not skip the first challenge since that will cause the track to clone a slightly different version of the hashicat application intended for use with CircleCI tests.
* You must have already forked the `hashicat-aws`, `hashicat-azure`, or `hashicat-gcp` repository from the hashicorp GitHub organization into your own personal GitHub organization before trying to skip past the "Version Controlled Infrastructure" (versioned-infrastructure) challenge.
* You must have already set up a VCS Connection in your TFC organization before trying to skip past the "Version Controlled Infrastructure" (versioned-infrastructure) challenge.
* You must have already forked the `tfc-workshops-sentinel` repository with Sentinel policies from the HashiCorp GitHub organization into your own personal GitHub organization with before trying to skip past the "Terraform Compliance with Sentinel" (a-sentinel-stands-guard) challenge.
* You must have already forked and published the following Terraform modules into your TFC organization's Terraform Private Registry before trying to skip past the "Terraform Private Registry" (private-module-registry) challenge:
    * https://registry.terraform.io/modules/terraform-aws-modules/s3-bucket/aws for AWS
    * https://registry.terraform.io/modules/Azure/network/azurerm for Azure
    * https://registry.terraform.io/modules/terraform-google-modules/network/google for GCP

Note that in the rest of this section, "*" is a placeholder for "aws", "azure", or "gcp", depending on which of the TFC tracks you are running.

The solve scripts will do the following for you when skipping:
* Configure your "credentials.tfrc.json" and "remote_backend.tf" files, create the "hashicat-*" workspace and configure it to use local execution, update your "terraform.tfvars" file, and do the first `terraform init` and `terraform apply -auto-approve` (in the "Safekeeping Your Terraform State" solve script).
* Convert your "hashicat-*" workspace to use remote execution, create workspace variables (both environment and Terraform), and trigger your first remote run with `terraform apply -auto-approve` (in the "Securing Cloud Credentials" solve script).
* Create the `admins`, `developers`, and `managers` teams in your organization if they don't already exist and assign them team permissions in your "hashicat-*" workspace (in the "Working with Teams in HCP Terraform" solve script).
* Execute various `git` commands, push your modified "remote_backend.tf" file to your fork of the "hashicat-*" repository, and update your workspace to use your VCS connection to that repository (in the "Version Controlled Infrastructure" solve script). This will trigger another run.
* Create the "tfc-workshops-sentinel-aws", "tfc-workshops-sentinel-azure", or "tfc-workshops-sentinel-gcps" Sentinel policy set in your organization, attach your "hashicat-*" workspace to it, add tags to your VM in your "main.tf" file and execute `git` commands including two `git push` commands to push the tags one at a time to your fork of the "hashicat" repository (in the "Terraform Compliance with Sentinel" solve script). Each `git push` will trigger another run; the first will fail the Sentinel policy check while the second will pass it.
* Write out a new file that uses a Terraform module and execute several `git` commands including `git push` to add the module to your workspace (in the "Terraform Private Registry" solve script). This will also trigger a run against your workspace.
* Execute TFC API commands to add variables to your workspace (in the "API Driven Workflows" solve script). (Technically, the script should also use the TFC API to trigger another run, but we've left this out to speed things up.)

Finally, we want to emphasize again that skipping is currently only enabled for members of the Instruqt HashiCorp organization.

### Configuring the Instruqt Pools
We recommend that you configure Instruqt pools for each Instruqt track used in this workshop 1 hour before you plan to use the track. Please see this Confluence [doc](https://hashicorp.atlassian.net/wiki/spaces/SE/pages/511574174/Instruqt+and+Remark+Contributor+Guide#InstruqtandRemarkContributorGuide-ConfiguringInstruqtPools) for instructions.

### The Live Demo
After chapter 1 there is a slide that says *Live Demo*. You can use an instruqt track to do a brief Terraform demo for your participants.

#### Demo Setup
You can use the same instruqt track that the students will be using to do this demo. Make sure you've gone through the entire track yourself and have your own organization, fork of the hashicat-aws repo, and sentinel policy in place. Once you have done these steps it's easy to create a new demo:

1. Start your own copy of the HCP Terraform on AWS track
2. Echo out your AWS credentials and set them as environment variables in TFC:
```
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```
3. Open a browser tab to your fork of the hashicat-aws git repo. Edit the main.tf file and make sure your aws_instance resource is missing the `Department` and `Billable` tags.
4. Make sure you remove the VPC file (vpc.tf) from your hashicat-aws repo. This will make the demo take longer and may break if the regions aren't set up right.
5. Begin your demo dialog:

#### Demo Talk Track
**This is a brief demo showing off some of the features of HCP Terraform. You'll get to work with all these features during the hands-on labs today.**

**Pretend I'm a brand new developer and I want to spin up a copy of my company's web application that I can use for testing. I have my own fork of the code here on github. This is the hashicat-aws application. Like the name implies, it provides kittens as a service. You give it a placeholder URL, a height, and a width, and you get a cat. Neat huh?**

**Let's hop over to HCP Terraform and take a look at my workspace. Here you can see the most recent terraform runs and their status, along with the exact git commit hash that led to each run being triggered. All changes are recorded, and only code that passes our sentinel policies is allowed to run.**

**Before I build anything I might want to configure some variables to adjust my infrastructure settings. Here you can see some terraform variables, prefix and region. These will determine the names of my resources and the region they will be deployed in.**

**Down bottom you see the Environment Variables. These are system shell variables that are injected into the HCP Terraform container at runtime. You can optionally encrypt sensitive environment variables such as these AWS keys. Note that these are write-only. Once you encrypt a variable by marking it sensitive, you won't see it here in plaintext again. These are dynamic AWS credentials that are good for only a few hours. You can paste them in manually or use the API to auto-populate them from HashiCorp Vault.**

**New and advanced users can utilize the GUI to trigger infrastructure builds. Let's do that now by clicking on this Queue Plan button. I'm going to put "new dev environment" down as the reason for the build. Now notice that a new terraform plan has kicked off. This is the dry run. terraform is figuring out if any of the infrastructure already exists from a previous run, and then it will build or change everything to match what's in the code. That is, unless we fail a sentinel policy...**

**Oh dear it looks like we have some non-compliant terraform code that has blocked the build. This is Sentinel. Sentinel can inspect every terraform plan to ensure that users don't break the rules or build things that they shouldn't. In this case we have forgotten to tag our AWS instances with the mandatory tags, "Billable" and "Department". Since this is a hard-mandatory policy, we can't override it. We have to fix our code and get it compliant in order to proceed.**

**We'll go back over to our github repo and edit the main.tf file. In the real world you probably won't be editing files directly on the master branch of your repo, what you'd do is test this change in a branch first, have someone review the change, and then merge the change to master. But for a demo it's fine.**

INSTRUCTOR NOTE: Have your code commented and ready to go like this. That way you can quickly uncomment the required tags and save the file.

```
  tags = {
    Name = "${var.prefix}-hashicat-instance"
#     Department = "devops team"
#     Billable = "true"
  }
```

**Now if I pop back over to HCP Terraform you can see that a new run has triggered based on the change I just made. HCP Terraform watches that master branch for any changes and automatically picks them up. I still have a chance to review the run in the UI here. You can see that my policy check is now passing, which will make the finance people happy, and I can continue building my dev environment.**

**I'll click Confirm & Apply and we'll start building.**

If you want you can paste an emoji in along with your confirm message. Have fun with it.

**And away we go. Terraform is building a bunch of network infrastructure and deploying my hashicat application onto a new aws instance in {REGION}. This application has been specially customized for training; it takes about 3-4 minutes to run the first time, then subsequent terraform apply commands only take 15-20 seconds. You might not use terraform this way in the real world but it's great for workshops because you can get a lot of terraform runs done in a short time without tearing down and rebuilding everything.**

**Oh look, our apply looks like it's finished. Let's see what we built.**

INSTRUCTOR NOTE: You might have to queue another plan here to get the app URL to refresh. This is normal, and if anyone asks you can say it's because the website re-provisions itself on every terraform run (which is not the default or how you'd do it in production.) Just wave your hand slowly and say "This is not the URL you're looking for."

**Ok let's try a re-provision and see if the app loads this run. Ah, much better! Look at these cat(s). Now I can run terraform over and over again with different variables to make changes to the dev environment. For example, if we go into the variables and set the placeholder to placedog.net, let's see what we get...**

Create a new variable called `placeholder` and set it to `placedog.net`. Queue up another run and approve it.

**Note that the terraform run goes pretty quickly now. This is because we're running a custom provisioner that kicks off on every single run. If I reload the page I now get a picture of a dog instead of a cat.**

**This has been a brief demo of a simple infrastructure as code workflow that you can use to get started with Terraform. We'll take a short break and when we return you'll get to do some hands on exercises in the first lab.**

### Timing
The following schedule assumes you have a group of participants who are somewhat new to Terraform. You should budget between five to six hours for this workshop. This is meant as a guideline, you can adjust as needed.

0:00 - 0:10 - Wait for attendees to arrive, intros, coffee<br>
0:10 - 0:50 - HCP Terraform Lecture & Demo<br>
0:50 - 1:00 - Break<br>
1:00 - 1:20 - Review the Basics / Remote State<br>
1:20 - 2:00 - Lab #1<br>
2:00 - 2:20 - Security & RBACs<br>
2:20 - 3:00 - Lab #2<br>
3:00 - 4:00 - Lunch<br>
4:00 - 4:20 - VCS & Policy Enforcement<br>
4:20 - 5:00 - Lab #3<br>
4:00 - 5:20 - Terraform Modules & API<br>
5:20 - 6:00 - Lab #4<br>
6:00 - 6:30 - Optional Bonus Lab, Wrap-up

### The Bonus Lab
The bonus lab is extra content you can share with participants if you feel they're ready for it. This is a loosely structured lab with minimal setup instructions. No details are provided for commands like "git add, git commit, git push". The student is expected to know how to create a git branch, commit changes to it, push those changes, and create a pull request. They also need to know how to set up branch protection and understand how HCP Terraform interacts with git repos and directories. In the challenge there is a sentinel policy that blocks security groups from allowing unrestricted (0.0.0.0/0) access to the web app (AWS) or restricts the size of the VM you can build (Azure and GCP). The participants need to figure out how to update their terraform code, commit their changes to a dev branch, push the changes to the remote dev branch, then ensure that the dev workspace runs correctly, and finally create a pull request to merge to master. As an instructor you should go through this lab and be familiar with it if you plan to teach it.
