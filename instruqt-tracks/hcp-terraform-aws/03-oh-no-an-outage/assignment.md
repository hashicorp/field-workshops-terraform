---
slug: oh-no-an-outage
id: sfj49jpkkys7
type: challenge
title: "\U0001F4D2 Safekeeping Your Terraform State"
teaser: |
  An unexpected outage has taken down one of the production websites. It took longer than expected to recover because the Terraform state file was stored on someone's laptop. HCP Terraform's remote state feature is here to help.
notes:
- type: text
  contents: "It's Monday morning and you're the first one into the office. Most of
    your teammates were up late fixing last night's outage. Eventually senior operations
    admin Robin shows up at your desk.\n\n>\U0001F9D3 Hey kiddo, how are you doing?
    Listen, I want your help with something. Last night we had trouble rebuilding
    the website because the Terraform state file was stored on Lars' laptop. And guess
    what, Lars is on vacation for the next two weeks. Why don't you help me configure
    remote state on this application so this doesn't happen again?"
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
timelimit: 1800
---
Your task is to configure remote state using your HCP Terraform account. In order to complete this challenge you'll need the following:

1. A free HCP Terraform account - log in at https://app.terraform.io<br>
2. An HCP Terraform organization. You just created this in the previous exercise.<br>
3. A workspace named **hashicat-aws** with its Execution Mode set to **Local** (not Remote)<br>
4. A *user* token for authentication<br>
5. A `remote_backend` config stored in your workspace<br>

Let's generate a new **user token** for use on your workstation. Visit the User Settings > Tokens page in HCP Terraform:

https://app.terraform.io/app/settings/tokens

Click on the **Create an API token** button. You can name the token whatever you like. Copy the entire token using your mouse or the small copy-paste icon.

Back in the Instruqt track, you need to add your API token to a file called "credentials.tfrc.json". Select the "Credentials File" tab and open the `/root/.terraform.d/credentials.tfrc.json` file directly.

Replace the part that says YOURTOKEN with what you copied from HCP Terraform. Be sure to save the file.

Your token is now safely stored in the "credentials.tfrc.json" file.

Return to your Code Editor tab and edit the "remote_backend.tf" file, replacing the `YOURORGANIZATION` placeholder with your organization name. Save the file.

Also, please edit the "terraform.tfvars" file, setting `prefix` to your name (first and last with or without a hyphen between them and all lower case) and setting `region` to a valid AWS region such as "us-east-1", "us-west-1", "eu-west-2", or "ap-southeast-1".

See this [page](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions) for a list of valid AWS regions.

Uncomment the variable values by removing "# " from each line. Be sure to save the file after editing it.

The variables are actually declared in the "variables.tf" file. The "terraform.tfvars" file is just being used to set values for them.

Once you've got all the pieces in place, try running a `terraform init` and then `terraform apply` command on the "Shell" tab.

```
terraform init
terraform apply
```

Remember to type *yes* on the "Shell" tab when you are prompted by Terraform to confirm the apply.

When the `terraform apply` finishes, you should see output like this:
```
Apply complete! Resources: 13 added, 0 changed, 0 destroyed.

Outputs:
catapp_ip = "http://52.0.34.113"
catapp_url = http://ec2-107-22-209-41.compute-1.amazonaws.com
```
Please click on the second URL to test that your application is working.

To see a valid value for the `catapp_ip` output, you sometimes might first need to run `terraform refresh`.

Additionally, you should see a new state file on the "States" tab of your HCP Terraform workspace.

Note: If you ran terraform locally before configuring the remote backend, you might have a local state file called `terraform.tfstate`. If so, please delete it by running `rm terraform.tfstate`.

Report back to Robin with the *Check* button below once you've successfully deployed the hashicat application with remote state enabled.

If you'd like to see the hashicat application in your web browser, simply copy the link from the output of your Terraform run, and paste it into the URL bar in another tab or window.