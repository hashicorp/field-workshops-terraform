# Terraform Cloud Workshops - Instructor Guide

This guide will prepare you to deliver a 3/4 to full day [Terraform Cloud on AWS/Azure/GCP Workshop](https://hashicorp.github.io/workshops).

Because the content is almost identical, we will cover the instructions for all three major cloud vendors (Azure/AWS/GCP) in one document.

This workshop content is suitable for HashiCorp prospects and customers. The workshop is a combination of lecture slides and hands-on labs that introduce Terraform Cloud features and is targeted toward intermediate users. The workshop may be presented in-person, over the web, or as a self-guided tutorial.

The workshop alternates between lectures with accompanying slides and hands-on lab exercises. New concepts that are introduced in the slides are reinforced in the labs. As an instructor you should be well familiar with the slide deck and training labs. Go through the course and make sure you understand all of the major concepts and lab exercises.

When possible you should attend a live training session to observe and learn from another instructor. We will also have video recordings of this workshop available soon. Also be sure to join these Slack channels where you can get help and ask questions: #proj-instruqt and #se-workshops

### Prerequisites
Prerequisites for these workshops are as follows:

* Complete one of the Intro to Terraform workshops (or equivalent experience)
* A Terraform Cloud account
* A trial-enabled organization in Terraform Cloud
* A Github.com account

We strongly recommend having your participants sign up for terraform cloud *before* the training so you can upgrade their organizations, and also know how many people are committed to attending the workshop. If this is not possible you'll need to make sure you have an admin handy who can upgrade organizations on the day of training.

**Work with your local SME or Terraform Cloud admin to get your organizations upgraded to trials.**

### Email invitation
Here is some boilerplate text you can use or customize when inviting or announcing your workshop:

```
Terraform Cloud on XXXXX
A hands-on technical workshop

Supercharge your Cloud infrastructure management with Terraform Cloud.

Here's the workshop syllabus showing the topics we will cover:

1. OSS to Cloud/Enterprise
🌥️ Terraform Cloud Overview
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
⚙️ Private Module Registry
🏗️ API Driven Workflows

5. Extra Resources
⚗️ Bonus Lab
🌐 Useful Links

Prerequisites:
* Complete one of the Intro to Terraform workshops
* Have a Terraform Cloud account
* Organization in Terraform Cloud with trial features enabled
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

https://instruqt.com/hashicorp/tracks/terraform-cloud-aws<br>
https://instruqt.com/hashicorp/tracks/terraform-cloud-azure<br>
https://instruqt.com/hashicorp/tracks/terraform-cloud-gcp<br>

Go through your track from start to finish and make sure you understand everything. Students may have questions during the labs. When presenting a workshop be sure to give enough time for all your participants to go through the labs.

#### Creating Instruqt Invites
Once you've gotten an invite to the HashiCorp organization you can create temporary invite links for your students:

1. Click on the **Invites** link at the top of the page.
2. Click on the **New+** button to create a new invite.
3. Create a descriptive title for internal use. Example: "Atlanta Intro to Terraform on Azure Workshop"
4. Select the track you want to make available.
5. Set the invite to expire in a month or two.
6. Make the track available to your user for at least a week.
7. Do not enable **Allow Anonymous** setting if you want to be able to track users progress and emails.

### Configuring the Instruqt Pools
We recommend that you configure Instruqt pools for each Instruqt track used in this workshop 1-2 hours before your workshop begins. Please see this Confluence [doc](https://hashicorp.atlassian.net/wiki/spaces/SE/pages/511574174/Instruqt+and+Remark+Contributor+Guide#InstruqtandRemarkContributorGuide-ConfiguringInstruqtPools) for instructions.

### The Live Demo
After chapter 1 there is a slide that says *Live Demo*. You can use an instruqt track to do a brief Terraform demo for your participants.

#### Demo Setup
You can use the same instruqt track that the students will be using to do this demo. Make sure you've gone through the entire track yourself and have your own organization, fork of the hashicat-aws repo, and sentinel policy in place. Once you have done these steps it's easy to create a new demo:

1. Start your own copy of the Terraform Cloud on AWS track
2. Echo out your AWS credentials and set them as environment variables in TFC:
```
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```
3. Open a browser tab to your fork of the hashicat-aws git repo. Edit the main.tf file and make sure your aws_instance resource is missing the `Department` and `Billable` tags.
4. Make sure you remove the VPC file (vpc.tf) from your hashicat-aws repo. This will make the demo take longer and may break if the regions aren't set up right.
5. Begin your demo dialog:

#### Demo Talk Track
**This is a brief demo showing off some of the features of Terraform cloud. You'll get to work with all these features during the hands-on labs today.**

**Pretend I'm a brand new developer and I want to spin up a copy of my company's web application that I can use for testing. I have my own fork of the code here on github. This is the hashicat-aws application. Like the name implies, it provides kittens as a service. You give it a placeholder URL, a height, and a width, and you get a cat. Neat huh?**

**Let's hop over to Terraform Cloud and take a look at my workspace. Here you can see the most recent terraform runs and their status, along with the exact git commit hash that led to each run being triggered. All changes are recorded, and only code that passes our sentinel policies is allowed to run.**

**Before I build anything I might want to configure some variables to adjust my infrastructure settings. Here you can see some terraform variables, prefix and region. These will determine the names of my resources and the region they will be deployed in.**

**Down bottom you see the Environment Variables. These are system shell variables that are injected into the terraform cloud container at runtime. You can optionally encrypt sensitive environment variables such as these AWS keys. Note that these are write-only. Once you encrypt a variable by marking it sensitive, you won't see it here in plaintext again. These are dynamic AWS credentials that are good for only a few hours. You can paste them in manually or use the API to auto-populate them from HashiCorp Vault.**

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

**Now if I pop back over to Terraform Cloud you can see that a new run has triggered based on the change I just made. Terraform Cloud watches that master branch for any changes and automatically picks them up. I still have a chance to review the run in the UI here. You can see that my policy check is now passing, which will make the finance people happy, and I can continue building my dev environment.**

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
0:10 - 0:50 - Terraform Cloud Lecture & Demo<br>
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
The bonus lab is extra content you can share with participants if you feel they're ready for it. This is a loosely structured lab with minimal setup instructions. No details are provided for commands like "git add, git commit, git push". The student is expected to know how to create a git branch, commit changes to it, push those changes, and create a pull request. They also need to know how to set up branch protection and understand how Terraform Cloud interacts with git repos and directories. In the challenge there is a sentinel policy that blocks security groups from allowing unrestricted (0.0.0.0/0) access to the web app (AWS) or restricts the size of the VM you can build (Azure and GCP). The participants need to figure out how to update their terraform code, commit their changes to a dev branch, push the changes to the remote dev branch, then ensure that the dev workspace runs correctly, and finally create a pull request to merge to master. As an instructor you should go through this lab and be familiar with it if you plan to teach it.
