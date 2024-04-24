---
slug: protecting-sensitive-variables
id: m38q8t5bj5s4
type: challenge
title: "\U0001F510 Securing Cloud Credentials"
teaser: |
  Your team has started building cloud infrastructure on Azure, but the security team is concerned about protecting access to everyone's cloud credentials.
notes:
- type: text
  contents: "After a few weeks on the job you're starting to get into the rhythm of
    things. Write some code, run some tests, deploy the website. Everything's going
    great until someone's Azure secrets are accidentally pushed to a public code repository.
    You get this email from William, the lead infosec admin at ACME:\n\n>\U0001F46E\U0001F3FF‍♂️
    Hello junior admin, we ran a remote scan on your laptop last night and found some
    unsecured Azure credentials. We need you to move those off your laptop and store
    them in HCP Terraform by the end of the day."
- type: text
  contents: "\U0001F914 Did you know?\n\nThousands of API and cryptographic keys and
    secrets are leaking on GitHub every day!\n\nhttps://nakedsecurity.sophos.com/2019/03/25/thousands-of-coders-are-leaving-their-crown-jewels-exposed-on-github/\n\nWhen
    you store your API keys as sensitive variables they are encrypted and stored in
    an instance of HashiCorp Vault. These keys are only decrypted in a trusted, secure
    container that runs the Terraform command."
- type: text
  contents: "\U0001F469\U0001F3FC‍\U0001F4BB Remote Execution, Local Code\n\nRemote
    Execution allows you to use the same Terraform commands that you're familiar with,
    but the run and all your variables are safely stored in your HCP Terraform workspace.
    This can be helpful when you're upgrading tools that were originally written for
    Terraform Community Edition.\n\nWith Remote Execution your Terraform code is still
    stored on your local machine and sent to the server each time you run."
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
After the Azure credentials issue, the security team is tightening down access to your Azure account. API creds must now be secured as stored variables in HCP Terraform. Your task is to find your Azure credentials, and move them into your workspace as secure environment variables.

In order to complete this challenge you'll need to do the following:

1. Find your Azure credentials with the following command:
```
env | grep ARM
```
2. The four environment variables you need are `ARM_CLIENT_ID`, `ARM_CLIENT_SECRET`, `ARM_TENANT_ID`, and `ARM_SUBSCRIPTION_ID`.
3. Update the **Execution Mode** settings in your workspace to **Remote** on the Settings > General tab.
4. Change the **Apply Method** to "Auto apply" on the same page. This will save you the trouble of having to approve every Terraform run manually. Remember to click the **Save settings** button at the bottom of the page!
5. Set **Environment Variables** for your Azure credentials on the Variables tab and mark the **ARM_CLIENT_SECRET** as **Sensitive**. The other three environment variables may remain in plaintext.
6. Set **Terraform Variables** for your `prefix` and `location`. Learn more about these variables by looking in the variables.tf file. Set the same values you used in your terraform.tfvars file to avoid all the resources being destroyed and re-created (unless you like waiting longer). NOTE: You *must* configure these variables on the remote workspace, as they will no longer be read from your local terraform.tfvars file.

Test your work by running `terraform init`. Your backend configuration will be updated for remote execution.

Next try running `terraform plan`. This will trigger what's known as a speculative plan. You can view this plan by copying the link from your "Shell" tab. This plan will not show up in your ordinary terraform runs that are triggered via the UI or API. A copy of the plan output will be streamed back to your "Shell" tab.

Run a terraform apply. This apply **will** show up if you navigate to the runs page in the HCP Terraform UI.

```
terraform apply
```

Congratulations, your Azure credentials are now safely encrypted and stored in your HCP Terraform workspace.

You can continue to run `terraform plan` and `terraform apply` in your "Shell" tab, but the execution is now done in HCP Terraform.