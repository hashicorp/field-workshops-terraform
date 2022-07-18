---
slug: terraform-cloud-setup
id: xkegpjvvhefh
type: challenge
title: ☁️ Terraform Cloud Setup
teaser: |
  Terraform Cloud offers unlimited free Terraform state storage for users. Safeguard your state files by storing them remotely in Terraform Cloud.
notes:
- type: text
  contents: Terraform Cloud remote state storage is free for all users.
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
Sign up for a free Terraform Cloud account at the following URL:

https://app.terraform.io/signup/account

If you already have an account you can simply sign in with your existing credentials.

Once you're signed into Terraform Cloud, you'll see a screen with several options. Please click the "Not right now, skip questions" link and confirm that you want to skip the questions. Then create a new organization.

Next you'll be prompted to create a workspace. Select the "CLI-driven workflow" panel, type **hashicat-azure**, enter a description such as "HashiCat for Azure", and click the "Create workspace" button.

No really...you *must* name your workspace **hashicat-azure**. If you don't, the exercises will break. Do not attempt to name it something else.

**Note:** If you already have a **hashicat-azure** workspace, please delete the workspace by selecting the workpace-level **Settings >> Destruction and Deletion** menu, clicking the "Delete from Terraform Cloud" button, typing "hashicat-azure" to confirm, and then clicking the "Delete workspace" button. Then re-create it as above. Doing this avoids possible problems with mis-matched state versions when executing local runs after having executed remote runs. This could happen if you already played this track in the past.

DO NOT SKIP THIS NEXT STEP:

Run `terraform version` on the "Shell" tab and then set the **Terraform Version** to match on the workspace's **Settings >> General** settings page.

Also, change the **Execution Mode** to **Local**.

Be sure to save your settings by clicking the "Save settings" button at the bottom of the page! This will allow us to run Terraform commands from our workstation with local variables.

Enable a free 30 day trial of Terraform Cloud's "Team & Governance" plan by navigating to your project's **Settings** menu and then to **Plan and billing**, select **Change Plan**, select the "Trial Plan" radio button, and click the "Start your free trial" button.

Or, if you have an existing account where you've already used a trial, provide your instructor with your organization's name. They will upgrade your organization to unlock a 30 day free trial of all paid features.

Before you click the **Check** button, did you change your Execution Mode to Local? This is an easy step to miss so we mention it twice.