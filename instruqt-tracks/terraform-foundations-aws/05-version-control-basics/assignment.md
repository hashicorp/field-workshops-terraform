---
slug: version-control-basics
type: challenge
title: "\U0001F4DA Version Control System (VCS) Basics"
teaser: |-
  Great, we have code but how do we scale and collaborate on changes?

  ◉ What is a VCS?

  ◉ HCP Terraform VCS Workflow

  ◉ Managing infrastructure changes in VCS
notes:
- type: text
  contents: |
    Version Control, Revision Control, Source Control, Source Code Management are all synonymous. Version control systems
    are used for software configuration management. It tracks and manages changes to source code over time. Version control
    systems keep track of every modification and allows you to revert changes to any point in time.

    For our labs today, we will be using GitLab, which is a Git based Distributed VCS. This is just a way of saying that
    they entire code based for your project is mirrored to your local computer for local development.

    We will be using GitLab to promote a change to our web app through Development into Stage and then into Production.
- type: image
  url: https://hc-fto.github.io/te-terraform/TTE-101/images/gitflow.png
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
  url: https://hashicorp.github.io/field-workshops-terraform/slides/multi-cloud/hcp-terraform/version-control/#2
- title: HCP Terraform
  type: external
  url: https://app.terraform.io
difficulty: basic
timelimit: 5000
---
[<ins>**Version Control Systems (VCS)**</ins>](https://www.terraform.io/docs/state/remote.html)

We setup a GitLab server for this part of the labs.  The foundational configurations for HCP Terraform and GitLab have been setup as well. This includes setting up the
webhook integration between them which allows information to be shared between the two tools. We've also added GitLab groups to simulate a Development Team and a Network
Team, committed our application code to projects/repositories in these groups, and added branches to represent various application environments. Finally we've added these
projects/repositories to HCP Terraform in the form of "Workspaces".

HashiCat is a new project that we added for this part of the labs. This will create a simple webserver that we can use to promote changes between environments with
HCP Terraform.

We've set the foundation for you, so that you can focus on the operational workflows and the power that comes along with them.  Let's start with the VCS...

[<ins>**GitLab CE**</ins>](https://about.GitLab.com/stages-devops-lifecycle/)

In the Terminal there will be some additional information. It should look similar to this...

```
Temporary GitLab Server: http://<ip-addr>/
Username: root
Password: i-<RandomNumber>
```

Click on the URL and login with the provided username and password. After logging in, you will see a list of the projects
that we will be working with.

`HashiCat AWS` is the new project we will be working with in this challenge

`Terraform AWS WebApp Networking` is our module example from our tflabs project

`Terraform Labs` are your labs. We have been tracking your updates and created a project for you to explore

Select the `Terraform Labs` project. You will see an identical directory structure from our local project that you can
explore.

Select the `Commits` link underneath our project title. You should see four commits from today...one from each challenge.

Select "Student Challenge 1 Updates". This will show you what was removed and what was added. This will tell us when configurations were
changed, and by whom. This can be a powerful tool for troubleshooting and change control.

Select `Browse files` button in the upper right. This allows you to view the files from this particular point in time. You may have noticed that
our state file was pushed into our repository. This is something that can easily happen by mistake.

Select the `terraform.tfstate` file. Then in the upper right, select `Blame`. From here, you can see what changes occurred
for each commit, who did it and when. Using HCP Terraform would keep these state files centralized outside of the project and
encrypted with HashiCorp Vault.

Select the `GitLab` logo in the upper left. This will take you back to our project list.

Select `HashiCat AWS`. We will be working with this project for the remainder of the lab.

Select the pulldown menu that is labeled `master`. From there you will see three branches of our project. You can think of
a branch as a copy of the codebase that you can make changes to without impacting other branches. Keep this in mind as we look
at our HCP Terraform setup for our new HashiCat application.

[<ins>**HCP Terraform**</ins>](https://app.terraform.io/app/organizations)

When you navigate to HCP Terraform you will see a new Organization named `Terraform-Foundations-<RandomString>` in the top left pull down menu.
In this new organization you will have three new workspaces, one for each environment. Each of these workspaces are connected to our
GitLab VCS and to the respected branches that we covered in the previous step.

If all of your workspaces are not "Applied", please wait until they complete.

Select the `HashiCat-Development` workspace. Let's review the current workspace configuration.

From the `Overview` page there will be an `Outputs` tab. There should be two outputs that were created, `catapp_ip` and `catapp_url`. Each
HCP Terraform workspace will have unique outputs for each environment. When you navigate to these URL's, the HashiCat webpage will indicate
which environment they are in.

Variables are set for the AWS credentials and prefix, similar to the previous challenges. There is also a variable named "environment" that
labels our resources appropriately. This will be the same variable that outputs in our HashiCat web page.

Select `Settings` and `Version Control`. You can see that we are connected to our GitLab hashicat-aws project that we reviewed
earlier. The `VCS branch` will denote which branch in GitLab that this workspace will be watching for changes. Since our triggering
is set to `Always trigger runs`, any changes to our hashicat-aws project in the development branch of GitLab will trigger this
workspace to run.

Each workspace is setup with it's respected variable for environment and watching that respected branch of our hashicat-aws project.

<ins>**Operational Changes**</ins>

Let's look how a change promotion would look in this configuration we outlined. We are going to start in our "Development" environment
and move, or promote, that change to our other environments. Make sure you have both GitLab and HCP Terraform web pages up. We will
start in GitLab..

Select the `HashiCat AWS` project, if you are not already there.

From the branches list (pulldown menu that says master), choose `Development`

Select the `Files` folder and the `deploy_app.sh`.

Click on the blue `Edit` button. We will just use the GitLab web editor for simplicity.

On line 14, add a message after the "Welcome" message. Add a "Commit message" below that describes your change.

When you're done click on `Commit Changes`

Navigate back out to HCP Terraform. You should see that your `HashiCat-Development` workspace is running. If you were not quick enough
to see it applying, you can look at the `Runs`. There will be a new run with your message that was triggered.

Refresh your HashiCat Development web page to confirm that your updates are now displayed.

Now that we have our change in our development environment and we did our testing to confirm our application is functional, let's promote this
change to our stage environment.

Navigate back to GitLab. You should still be on the development branch viewing the `deploy_app.sh` file that we edited. Click on the
`Create merge request` blue button. We will be merging our changes we made in the development branch to our staging branch.

In the `New Merge Request` menu, select `Change branches`. Our source branch will default to "Development". Change the target branch to
`stage` and select `Compare branches and continue`

Update the Title to `Promote to Stage` and add a short description of your change.

For "Assignee" select `Assign to me`. We currently do not have users and groups setup in our environment but in a real world scenario
we can put security controls around this approval process.

On the bottom of the page, select `Changes`. This will show you what files and what lines in those files are different between the development
and stage branches. These are the changes that will be merged into our target branch.

Select `Submit merge request`. We now have an opened merge request. In our lab, approvals are optional but we could require multiple approvers
before any changes get applied. We could deny the request and put a comment with details regarding why we denied it.

Right click on the green check-mark next to `Pipeline`. Open this link in a new tab. Under pipelines select the `HCP Terraform` green check-mark.
As a merge request reviewer, you can use this to review the Terraform plan that was ran by the GitLab pipeline.

We peer reviewed the changes everything looks good. Now go back to the tab we left open with our merge request and select the green `Merge` button

Notice that another pipeline was started under where the merge button was. It will have incremented by +1. Right click on this new pipeline and
open it in a new tab. You can use the external pipeline to link out to HCP Terraform to review the apply. We could have also been watching
the HCP Terraform workspace list to see our workspaces auto apply from our merge request.

You can open the stage URL of our HashiCat app to confirm that our changes have been added.

The process to promote our change into our production environment would be identical. Please feel free to walk through the promotion to production or
add more changes. These environments are isolated so feel free to experiment and ask your instructor any questions you may have.

When you are done, be sure to click `Check` in Instruqt to finish your labs. This will remove the `Terraform-Foundations` organization for you and
clean up any other configurations we added.
