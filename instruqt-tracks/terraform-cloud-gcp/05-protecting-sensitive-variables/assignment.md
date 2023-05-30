---
slug: protecting-sensitive-variables
id: l3jxpewxvsyg
type: challenge
title: "\U0001F510 Securing Cloud Credentials"
teaser: |
  Your team has started building cloud infrastructure on GCP, but the security team is concerned about protecting access to everyone's cloud credentials.
notes:
- type: text
  contents: "After a few weeks on the job you're starting to get into the rhythm of
    things. Write some code, run some tests, deploy the website. Everything's going
    great until someone's GCP credentials are accidentally pushed to a public code
    repository. You get this email from William, the lead infosec admin at ACME:\n\n>\U0001F46E\U0001F3FF‍♂️
    Hello junior admin, we ran a remote scan on your laptop last night and found some
    unsecured Google Cloud credentials. We need you to move those off your laptop
    and store them in Terraform Cloud by the end of the day."
- type: text
  contents: "\U0001F914 Did you know?\n\nThousands of API and cryptographic keys and
    secrets are leaking on GitHub every day!\n\nhttps://nakedsecurity.sophos.com/2019/03/25/thousands-of-coders-are-leaving-their-crown-jewels-exposed-on-github/\n\nWhen
    you store your API keys as sensitive variables they are encrypted and stored in
    an instance of HashiCorp Vault. These keys are only decrypted in a trusted, secure
    container that runs the Terraform command."
- type: text
  contents: "\U0001F469\U0001F3FC‍\U0001F4BB Remote Execution, Local Code\n\nRemote
    Execution allows you to use the same Terraform commands that you're familiar with,
    but the run and all your variables are safely stored in your Terraform Cloud workspace.
    This can be helpful when you're upgrading tools that were originally written for
    Terraform Open Source.\n\nWith Remote Execution your Terraform code is still stored
    on your local machine and sent to the server each time you run."
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 1800
---
After the GCP credentials issue, the security team is tightening down access to your GCP project. API creds must now be stored as encrypted variables in Terraform Cloud. Your task is to find your Google credentials, and move them into your workspace as a secure environment variable.

In order to complete this challenge you'll need to do the following:

1. Find your GCP credentials with the following command. The command will output a long string of JSON all on a single line. You'll need this string in step 4.

```
echo $GOOGLE_CREDENTIALS
```
2. Update the **Execution Mode** settings in your workspace to **Remote** on the Settings > General tab.
3. Change the **Apply Method** to "Auto apply" on the same page. This will save you the trouble of having to approve every Terraform run manually. Remember to click the **Save settings** button at the bottom of the page!
4. Set an **Environment Variable** called `GOOGLE_CREDENTIALS` for your GCP credentials and mark it as **Sensitive**.
5. Set **Terraform Variables** for your `prefix`, `region`, and `zone` on the Variables tab. Set the same values you used in your terraform.tfvars file to avoid all the resources being destroyed and re-created (unless you like waiting longer). NOTE: You *must* configure these variables on the remote workspace, as they will no longer be read from your local terraform.tfvars file.
6. Set a **Terraform Variable** called `project` with your project id which you can find with the following command:

```
echo $TF_VAR_project
```
You had not needed to include this when running in local mode because the setup script for this track had exported an environment variable called `TF_VAR_project` and set it to your project ID for you. But environment variables are not read from your local environment when running in remote mode.

Test your work by running `terraform init`. Your backend configuration will be updated for remote execution.

Next try running `terraform plan`. This will trigger what's known as a speculative plan. You can view this plan by copying the link from your "Shell" tab. This plan will not show up in your ordinary terraform runs that are triggered via the UI or API. A copy of the plan output will be streamed back to your "Shell" tab.

Run a terraform apply. This apply **will** show up if you navigate to the runs page in the Terraform Cloud UI.

```
terraform apply
```

Congratulations, your GCP credentials are now safely encrypted and stored in your Terraform Cloud workspace.

You can continue to run `terraform plan` and `terraform apply` in your "Shell" tab, but the execution is now done in Terraform Cloud.