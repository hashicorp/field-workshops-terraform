---
slug: vcs-collaboration
id: fpri25yhry3y
type: challenge
title: "\U0001F46C Collaborating with VCS"
teaser: |
  Now that you've got your version control system configured with HCP Terraform, you can collaborate on changes to your Terraform built infrastructure.
notes:
- type: text
  contents: "The marketing team at ACME is running a special promotion next week and
    they need you to push a change to the hashicat website. If you're doing an instructor
    led class you can pair up with a fellow student for this exercise. Alternatively
    you can do the exercise on your own.\n\n>\U0001F468\U0001F3FB‍\U0001F9B2 Hey sysadmin
    friend, we need to push a change to the hashicat website. Can you please update
    the placeholder text with some snappy marketing slogans?"
- type: text
  contents: VCS-backed workspaces enable features like code reviews and automated
    tests that must pass before any changes can be approved for production.
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
In this challenge you'll make a small change to the code that deploys the hashicat-azure application, and then create a "Pull Request", which is simply a way of proposing a change and optionally allowing others to review your changes.

Find a partner, or if you're alone you can do this exercise solo. Exchange github usernames and browse to the other person's fork of the hashicat-azure repository. For example:

https://github.com/YOURNAME/hashicat-azure

**Please do NOT issue your pull request against the hashicorp/hashicat-azure repository!**

Browse to the `files/deploy_app.sh` file and click on the small pencil icon in the upper right corner of the text area. This will allow you to edit the file right in your browser.

Replace the following text with your own catchy marketing slogan for ACME.

```
Welcome to ${PREFIX}'s app. Replace this text with your own.
```

At the bottom of the screen, select the option that says "Create a new branch for this commit and start a pull request." Then, click the "Propose changes" button. Finally, submit a pull request by clicking the "Create pull request" button.

You'll notice that a check is run against your HCP Terraform workspace. If you right-click the "Details" link of the check and then open the link in a new tab, you'll see the speculative plan that has been run in your workspace.

However, if you do open the link, you might need to refresh the GitHub page in order to see that the check has passed and so that the "Merge pull request" button will be enabled.

Your partner should now review and approve the pull request. Or, if you're working alone you can review your own pull request and merge the changes.

Once you've merged your changes to the master branch, watch the Terraform run that starts in the HCP Terraform UI.