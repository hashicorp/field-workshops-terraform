---
slug: prereqs-tls
type: challenge
title: "\U0001F4DA Review HVD Module"
teaser: Welcome to this HashiCorp workshop on the Terraform Enterprise Hashicorp Validated
  Design (HVD) module.
notes:
- type: text
  contents: |
    Terrform Acme provider tls setup

    The modules usage requires providing the prerequisite requirements which we will also be creating with Terraform on AWS.
tabs:
- title: Code Editor
  type: service
  hostname: tfe-hvd-workstation
  port: 8443
- title: Terminal
  type: terminal
  hostname: tfe-hvd-workstation
- title: AWS Console
  type: service
  hostname: cloud-client
  path: /
  port: 80
- title: AWS Provider
  type: website
  url: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
  new_window: true
difficulty: basic
timelimit: 5000
enhanced_loading: null
---

This lab we are going to do some of the initial set up.

First we need to create a AWS hosted zone this relies on the Instruqt env var ``

The following command output is needed to enable the labs.

```
aws route53 create-hosted-zone --name ${INSTRUQT_PARTICIPANT_ID}.<instructor provided>.sbx.hashidemos.io --caller-reference 1-1-1
```

You now need to have a little patience and provide the following from the above command response to your instructor

```
#example truncated output.
   "DelegationSet": {
        "NameServers": [
            "ns-3.awsdns-00.com",
            "ns-1686.awsdns-18.co.uk",
            "ns-716.awsdns-25.net",
            "ns-1522.awsdns-62.org"
        ]
```


