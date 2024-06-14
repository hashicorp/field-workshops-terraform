---
slug: hcp-terraform-setup
type: challenge
title: ☁️ HCP Terraform Setup
teaser: |
  HCP Terraform offers unlimited free Terraform state storage for users. Safeguard your state files by storing them remotely in HCP Terraform.
notes:
- type: text
  contents: HCP Terraform remote state storage is free for all users.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 10000
---
During this challenge and the next one, you'll use the remote state feature of HCP Terraform to store your state file in the cloud. In order to do this you'll need a HCP Terraform account. Click on the URL below and sign up for a free account if you don't have one already:

https://app.terraform.io/signup/account

If you already have an account you can simply sign in with your existing credentials.

Once you're signed into HCP Terraform create a new organization called YOURNAME-training. Replace YOURNAME with your own name or other text.

Next you'll be prompted to create a workspace. You can skip the VCS integration step by clicking the "CLI-driven workflow" panel. Name your workspace **hashicat-gcp**.

**Note:** If you already have a **hashicat-gcp** workspace, please delete the workspace by selecting the **Settings >> Destruction and Deletion** menu, clicking the "Delete from HCP Terraform" button, typing "hashicat-gcp" to confirm, and then clicking the "Delete workspace" button. Then re-create it as above. Doing this avoids possible problems with mis-matched state versions when executing local runs after having executed remote runs. This could happen if you played the [HCP Terraform with GCP](https://play.instruqt.com/hashicorp/tracks/terraform-cloud-gcp) track and then played this track.

Run `terraform version` on the "Shell" tab and then set the **Terraform Version** to match on the workspace's **Settings >> General** settings page.

Also, change the **Execution Mode** to **Local**.

Be sure to save your settings by clicking the "Save settings" button at the bottom of the page! This will allow us to run Terraform commands from our workstation with local variables, which we'll do in the next challenge.