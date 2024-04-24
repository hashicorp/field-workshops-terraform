---
slug: versioned-infrastructure
id: u80q33z53pnm
type: challenge
title: "\U0001F4BB Version Controlled Infrastructure"
teaser: |
  The team has grown and you need to implement code reviews. HCP Terraform can connect to popular Version Control Systems to enable collaboration and testing.
notes:
- type: text
  contents: "As Terraform usage continues to increase across the organization, your
    team needs a better way to store and organize everyone's Terraform code. Until
    now you haven't had much testing or code review for infrastructure changes. Jane,
    the QA lead, introduces herself:\n\n>\U0001F469‍\U0001F3A4 Hi sysadmin, we're
    trying to implement better quality assurance around our infrastructure deployment
    process. Can you help me add the hashicat-aws GitHub repository to the workspace
    so we can implement code reviews?"
- type: text
  contents: |-
    Once you connect a VCS repository to your HCP Terraform workspace, **all** changes to the code must be stored in the VCS before Terraform will execute them. This ensures that you have no unauthorized changes to your infrastructure as code.

    In addition it allows you to enable features like code reviews, pull requests, and automated testing of your code.
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
In order for different teams and individuals to be able to work on the same Terraform code, you need to use a Version Control System (VCS). HCP Terraform can integrate with the most popular VCS systems including GitHub, GitLab and Bitbucket.

You will need a free GitHub.com account for this challenge. We recommend using a personal account for training instead your work account (if you have one).

In this challenge your first task is to create a fork of the hashicat-aws repository. Visit this URL and click on the **Fork** button in the upper right corner to create your own copy of the repo.

https://github.com/hashicorp/hashicat-aws

**Note:** If you ran this track in the past and already forked the repository, please delete your fork and re-fork it to make sure you are using the latest version and that it does not have changes which you will push to it later in this track. You can delete a repository by clicking on the "Settings" menu of it, scrolling all the way to the bottom of the page, clicking the "Delete this repository" button in the "Danger Zone" section, typing the full repository name, and then clicking the "I understand the consequences, delete this repository" button. Then re-fork the repository as above.

Run the following commands to update your git configuration for your own repository. Don't forget to replace YOURGITUSER with your own git username in the second command.

```
git remote remove origin
git remote add origin https://github.com/YOURGITUSER/hashicat-aws
```
If the second command is split across two lines after copying it from the assignment and you are unable to edit it, try making your browser window wider or hiding the assignment termporarily so it fits on one line.

Also run these commands:

```
git pull
git branch --set-upstream-to=origin/master master
git config --global core.editor "vi"
```

Next use these commands to set your email and name:
```
git config --global user.email "you@example.com"
```

```
git config --global user.name "Your Name"
```

To complete your `git` operations, please commit and push your modified remote_backend.tf file with these commands on your "Shell" tab:

```
git add .
git commit -m "Added remote backend"
git push origin master
```

Note that you'll have to provide your GitHub username and personal access token in order to complete the `git push` command.

If you have two-factor authentication enabled and don't remember your personal access token,  you'll need to create a new one. To do that, log onto GitHub and visit the Tokens page:

https://github.com/settings/tokens

Then click on **Personal Access Tokens** and generate a new token for the workshop. Give it at least the `repo | public_repo` scope, but you can grant the entire `repo` scope and other scopes if desired. You can delete the token afterwards if you like. This token enables you to push changes from your workstation to your public fork of the hashicat-aws repository.

Now that you have your own copy of the hashicat-aws repo to work with, follow the **Configuring GitHub Access** section of the HCP Terraform documentation to connect your GitHub account to your Terraform Organization.

https://www.terraform.io/docs/cloud/vcs/github.html

Make sure you configure an **OAuth** connection for your organization and not the GitHub App for a single workspace! Once you've configured GitHub access for your organization, you can update your workspace to use your hashicat-aws repository as the source for all Terraform runs. Go into the **Settings > Version Control** settings page for your workspace. Connect your workspace to the fork of your hashicat-aws repository on GitHub.

Be sure to expand the "Advanced options" section of the "Version Control" page and enable the "Automatic speculative plans" feature before clicking the "Update VCS settings" button.

The first VCS-backed apply should trigger immediately. Click on the Runs tab to view the run in action.

Congratulations, all Terraform changes must now go through version control before they are used in your workspace. This enables you to do code reviews before any changes are pushed to production. It also provides a valuable record of any and all changes made to the code that built your infrastructure. This can prevent configuration drift and undocumented changes.

Click the **Check** button to let Jane know she can clone the hashicat-aws repo for QA testing.