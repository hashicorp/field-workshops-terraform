---
slug: fun-with-variables
type: challenge
title: "\U0001F436 Fun With Variables"
teaser: |
  Variables give the consumers of your Terraform code an easy way to customize their infrastructure.
notes:
- type: text
  contents: |-
    Terraform variables have five levels of precedence. 1=highest 5=lowest:

    1. Command line flag - run as a command line switch
    1. Configuration file - set in your terraform.tfvars file
    1. Environment variable - part of your shell environment
    1. Default Config - default value in variables.tf
    1. User manual entry - if not specified, prompt the user for entry
- type: text
  contents: |-
    Here are some other fun placeholder sites you can try with the **placeholder** variable:

    placedog.net<br>
    placebear.com<br>
    www.fillmurray.com<br>
    www.placecage.com<br>
    placebeard.it<br>
    loremflickr.com<br>
    baconmockup.com<br>
    placeimg.com<br>
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-azure
difficulty: basic
timelimit: 10670
---
There are several ways to configure Terraform variables. So far we've been using the **terraform.tfvars** file to set our variables. Try re-deploying your application with different **height** and **width** variables on the command line. Reload the webapp after each apply to observe any changes.

```
terraform apply -auto-approve -var height=600 -var width=800
```

Next try setting an environment variable that Terraform can read. Run this command to set the placeholder variable:

```
export TF_VAR_placeholder=placedog.net
```

Run another `terraform apply -auto-approve` command:

```
terraform apply -auto-approve
```

Now try it again with the same variable set differently on the command line:

```
terraform apply -auto-approve -var placeholder=placebear.com
```

Which variable took precedence? Why?

See this [doc](https://www.terraform.io/docs/configuration/variables.html#variable-definition-precedence) if you're unsure.