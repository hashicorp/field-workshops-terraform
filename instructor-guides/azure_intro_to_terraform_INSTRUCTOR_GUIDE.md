# Intro to Terraform on Azure - Instructor Guide

This guide will prepare you to deliver a half-day [Introduction to Terraform on Azure Workshop](https://hashicorp.github.io/field-workshops-terraform/slides/azure/terraform-oss). This workshop content is suitable for HashiCorp community members, prospects and customers. The workshop is a combination of lecture slides and hands-on labs that introduce new users to Terraform features. This workshop focuses on open-source features and is targeted toward new users. The workshop may be presented in-person, over the web, or as a self-guided tutorial.

The workshop alternates between lectures with accompanying slides and hands-on lab exercises. New concepts that are introduced in the slides are reinforced in the labs. Participants will learn both the theory and practice of Terraform. As an instructor you should be well familiar with the slide deck and training labs. Go through the course and make sure you understand all of the major concepts and lab exercises.

When possible you should attend a live training session to observe and learn from another instructor.

### Prerequisites
Prerequisites are minimal. All that is required to participate in the workshop is a web browser and Internet access. No software needs to be downloaded or installed. Self-contained lab environments run on the Instruqt platform, and markdown-based slide decks are published as Github Pages websites.

The Instruqt lab environment includes an embedded version of Visual Studio Code. This ensures the workshop participants have a familiar, easy-to-use text editor for working with Terraform.

Commands can be run on the "Shell" tab or in a terminal within the VS Code Editor.

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
Introduction to Terraform on Azure
A hands-on technical workshop

Learn how to build and manage your Azure Cloud infrastructure with HashiCorp Terraform. Terraform is a multi-cloud provisioning tool that can build any type of infrastructure. Terraform is easy for beginners and powerful for experts. Join us for a half-day training that will get you up and running quickly with Terraform on Azure.

Topics covered in the workshop include:

* Infrastructure as Code
* Introduction to Terraform
* Terraform Architecture
* Terraform Use Cases
* Terraform Basics
* Provisioning a web application stack on Azure

The only prerequisites for this workshop are a web browser and willingness to learn.
```

### Markdown Slide Deck
The slide deck for this training is published here:

#### https://hashicorp.github.io/field-workshops-terraform/slides/azure/terraform-oss

Shortened URL:
#### https://git.io/JeuCI

#### Navigation
Use the arrow keys (up/down or left/right) to navigate back and forth between slides.

Press the `P` key to enter presenter mode and reveal the speaker notes.

Press the `C` key to pop open an external window that will stay synced with your speaker notes window. This is useful for keeping notes on your laptop while showing the presentation on the projector.

#### RemarkJS
The slide deck for this training is written completely in [Markdown](https://guides.github.com/features/mastering-markdown/) using the [RemarkJS](https://remarkjs.com/#1) framework. This allows us to publish slide decks from a source code repository. The slide deck is easy to maintain, lightweight, and can be accessed from anywhere. Updates and changes to the deck can be made quickly and efficiently by simply editing the markdown source files. If you find any mistakes or issues with the slides please add them to our issue tracker:

https://github.com/hashicorp/field-workshops-terraform/issues

### Hands-on Labs
At certain points in the slide deck there are links to the lab exercises. [Instruqt](https://instruqt.com/hashicorp) is our lab platform. Lab exercises can be completed anonymously, but if users want to keep track of their progress they should create accounts on the Instruqt website. There is one long instruqt track that is broken into sections for each lab:

https://play.instruqt.com/hashicorp/tracks/terraform-intro-azure

Go through this track start to finish and make sure you understand all the challenges. Students may have questions during the labs. When presenting a workshop be sure to give enough time for all your participants to go through the labs. Remember that this is probably their first time working a tool like Terraform.

### Preparation Steps
We recommend you perform the following steps before TA-ing or teaching this workshop if you have previously done so:

1. Delete your fork of the "hashicat-azure" repository and then re-fork it from https://github.com/hashicorp/hashicat-azure. This will ensure that you have the latest version without changes that you pushed while running through the workshop in the past.
2. Delete your "hashicat-azure" workspace from your TFC organization.

### Skipping in the Intro to Terraform Tracks
HashiCorp employees (if members of the Instruqt HashiCorp organization) can skip ahead in the Intro to Terraform tracks. This has actually been the case for some time, but had never previously been documented.

To actually skip one or more challenges while running one of this track, return to the track's home page and click the "Skip to" button of the challenge you wish to skip to.

We have not yet enabled skipping for end-users even though Instruqt now supports that. It is debatable whether allowing end-users to skip challenges is really desireable. They'll learn more if they don't skip.

#### Creating Instruqt Invites
Once you've gotten an invite to the HashiCorp organization you can create temporary invite links for your students:

1. Click on the **Invites** tab under https://play.instruqt.com/hashicorp. (Note that you must be have the Content Contributor role within the Instruqt HashiCorp organization to create invites. If you don't have that, see this [link](https://hashicorp.atlassian.net/wiki/spaces/SE/pages/511574174/Instruqt+and+Remark+Contributor+Guide#InstruqtandRemarkContributorGuide-GettingAccess).)
2. Click on the **Create** button to create a new invite.
3. Create a descriptive title such as "Acme Intro to Terraform (Azure) Workshop".
4. Select the track you want to make available. Typing "Intro to Terraform" will help you find the right track in the filtered list.
5. Leave "How many times can this invite be used?" set to 0.
6. Set the invite to expire in one month.
7. Leave "How many times can the track be played?" set to 0.
8. Make the track available to your user for 1 month.
9. Do not enable the **Allow anonymous** setting if you want to be able to track which users played the track based on their emails.

### Configuring the Instruqt Pools
We recommend that you configure Instruqt pools for each Instruqt track used in this workshop 1 hour before you plan to use the track. Please see this Confluence [doc](https://hashicorp.atlassian.net/wiki/spaces/SE/pages/511574174/Instruqt+and+Remark+Contributor+Guide#InstruqtandRemarkContributorGuide-ConfiguringInstruqtPools) for instructions.

### The Live Demo
After chapter 1 there is a slide that says *Live Demo*. You can use an instruqt track to do a brief Terraform demo for your participants, or insert your own demo here. Follow these steps to do the demo in instruqt:

#### Setup
1. Right before you start the training, visit https://instruqt.com/hashicorp/tracks/terraform-intro-azure and start the track. You do not have to complete the track, we're just using Instruqt to stand up a demo environment. Open the `/root/hashicat-azure` folder with VSC. Copy the *.completed files from the exercises directory and overwrite main.tf and outputs.tf. On the "Shell" tab, run `terraform init; terraform apply -auto-approve`. Open the Meow World application in another browser tab. Open the Azure portal and navigate to your resource group in the UI (In the Team Solutions Engineering subscription). Azure credentials for https://portal.azure.com are in the **INSTRUQT_AZURE_SUBSCRIPTION_TERRAFORM_USERNAME** and **INSTRUQT_AZURE_SUBSCRIPTION_TERRAFORM_PASSWORD** environment variables. You are now ready to demo.  

2. Walk through the demo scenario. You can use this talk track as a guideline or create your own.

> Welcome to CatCorp. We deliver cats as a service. At CatCorp we use Terraform to provision our web application. This is our website which is running on Azure Cloud. Let's take a look at the code that was used to provision and set up this website.

Show off the Meow World website. Pivot over to the Visual Studio Code editor. You can hide the instruqt notes to make the editor more visible. Hit CTRL+ (CTRL Plus) a few times to enlarge the text for easier viewing.

> Terraform is a simple, declarative language that can be used to describe any type of infrastructure. Think of these as building blocks that you can configure and stack on top of one another until you have built everything you need. These resources can refer to one another, even if you don't know what IP address or name they will have yet. This is made possible by the terraform variable and object notation.

Scroll through the main.tf file and point out some of the resources that are being built with code.

> Every setting in the Azure API is available via these parameters. Further down the file you can see our provisioners. This is where we configure the application after the server has been launched. You could run Chef, Puppet, Ansible or even simple shell commands like we're doing here. These commands upload some files, ensure that the apache web server is installed, and runs a simple installer script. We can adjust the height, width and placeholder image on our website using these variables here.

> There are eight components in this terraform code. They are a resource group, a virtual network, a security group, a network interface, a subnet, a public IP address, a virtual machine, and a special resource called a "null resource". These eight pieces make up everything we need to run this web application. Just imagine if you had dozens or hundreds of components to manage. This can get out of hand very quickly. Fortunately terraform keeps it all neat and tidy. Everything we build with terraform can just as easily be decomissioned when we're doing with it. Terraform destroy will wipe out everything we built.

> Let's re-deploy our web application with some different variables. I'm going to change the height and width of the image on our website:

Run an apply with some different variables:
```
terraform apply -auto-approve -var height=1000 -var width=1200
```

> This terraform code has been optimized to re-deploy our application on every run. What's happening now is terraform is checking the state of my network, security groups, and vm settings. In the real world you probably would not use Terraform in this way (forcing a redeploy of the application every run). But for demo and learning purposes it helps us get some practice running terraform apply and seeing instant feedback.

> Now suppose we have a junior developer or sysadmin delete some security group rules.

Log onto the Azure portal and find your resource group. Go inside and select the Security Group. Delete the HTTP and HTTPS security group rules, effectively blocking access to the website. (It can take 1-2 minutes for this to take effect.) You can either show it off or hand-wave past it and state "This blocks access to the website, which will become unavailable in about 2 minutes unless I fix this"

> Oops, we've locked ourselves out of the website by making manual changes in the GUI! Let's see if terraform can help fix this mess.

```
terraform plan
```

Show the diff in the terraform log output, pointing out where it puts back the security groups.

> See how it wants to put back the security group into the proper configuration? This is sometimes called idempotence. Terraform will always try to put your infrastructure into the correct state. That might mean changing something in place, or deleting it and recreating it. Let's go ahead and fix our security group:

```
terraform apply -auto-approve
```

> Terraform has put the security groups back in their correct configuration and restored access to our web application. And access is restored!

> This was a brief demo showing what Terraform open source can do. In a moment you'll get some hands on experience with terraform and Azure.

### Timing
The following schedule assumes you have a group of participants who are brand new to Terraform. You should budget between three and four hours for this workshop. This is meant as a guideline, you can adjust as needed.

0:00 - 0:10 - Wait for attendees to arrive, intros, coffee<br>
0:10 - 0:40 - Introduction to Terraform and Demo<br>
0:40 - 0:55 - Terraform Basics<br>
0:55 - 1:25 - Lab 1<br>
1:25 - 1:30 - Break<br>
1:30 - 1:45 - Terraform in Action, Organizing Your TF Code<br>
1:45 - 2:15 - Lab 2<br>
2:15 - 2:30 - Provisioning<br>
2:30 - 3:00 - Lab 3<br>
3:00 - 3:15 - State & Cloud<br>
3:15 - 3:45 - Lab 4<br>
3:45 - 4:00 - Wrap-up<br>
