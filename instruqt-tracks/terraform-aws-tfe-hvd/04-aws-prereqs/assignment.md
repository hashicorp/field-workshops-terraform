---
slug: aws-prereqs
type: challenge
title: "\U0001F4DA Populate the AWS prereqs"
teaser: Welcome to this HashiCorp workshop on the Terraform Enterprise Hashicorp Validated
  Design (HVD) module.
notes:
- type: text
  contents: |
    Terraform AWS provider to populate AWS infrastructure and KV secrets

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

This lab we are going populate our secret store, and create some network boundaries in AWS.





