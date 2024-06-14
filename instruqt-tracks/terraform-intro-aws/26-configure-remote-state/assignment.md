---
slug: configure-remote-state
type: challenge
title: "\U0001F39B️ Configure Remote State"
teaser: |
  The terraform command line tool can store its state in HCP Terraform. All that is required is a user token.
notes:
- type: text
  contents: |-
    With *local* execution mode the Terraform commands and variables all remain
    on your workstation.

    With *remote* execution mode Terraform runs in a HCP Terraform
    container environment. All variables must be configured in the cloud environment with this method.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-aws
- title: Credentials File
  type: code
  hostname: workstation
  path: /root/.terraform.d/credentials.tfrc.json
difficulty: basic
timelimit: 10000
---
During this challenge we'll configure HCP Terraform as a remote state backend, and then migrate our existing state file to HCP Terraform.

Edit the "remote_backend.tf" file and replace the YOURORGANIZATION placeholder with your org name. Be sure to save the file.

Let's generate a new **user token** for use on your workstation. Visit the User Settings > Tokens page in HCP Terraform:

https://app.terraform.io/app/settings/tokens

Click on the **Create an API token** button. You can name the token whatever you like. Copy the entire token using your mouse or the small copy-paste icon.

Back in the Instruqt track, you need to add your API token to a file called "credentials.tfrc.json". Select the "Credentials File" tab and open the `/root/.terraform.d/credentials.tfrc.json` file directly.

Replace the part that says YOURTOKEN with what you copied from HCP Terraform. Be sure to save the file.

Your token is now safely stored in the `/root/.terraform.d/credentials.tfrc.json` file.

Now run `terraform init` to migrate your state to HCP Terraform.

```
terraform init
```

Type "yes" when it prompts you to migrate your state into HCP Terraform.

Your state is now safely stored in HCP Terraform. You can verify this on the "States" tab of your workspace in the TFC UI.

Run a `terraform apply -auto-approve` and watch your state file evolve with each change. You can browse through previous state files with the HCP Terraform UI.