---
slug: azure-credentials
type: challenge
title: Connecting Terraform to Azure Cloud
teaser: |
  Safely connect to the Azure APIs using a service principal.
notes:
- type: text
  contents: |-
    Microsoft has a great tutorial for setting up Azure credentials on your laptop or virtual workstation:
    https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-install-configure
- type: text
  contents: |-
    Azure Cloud Shell is another easy way to get started with Terraform. With Azure Cloud Shell, Terraform is pre-installed and ready to go.
    https://docs.microsoft.com/en-us/azure/virtual-machines/linux/terraform-install-configure#use-azure-cloud-shell
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
Terraform needs credentials to be able to connect to Azure and build resources.

We've pre-installed some temporary credentials in your Instruqt training environment. These credentials are stored as environment variables. You should never store sensitive API keys inside your source code.

Terraform can automatically read and use the environment variables that are in your shell environment.

Run the following command on your "Shell" tab to see your temporary credentials:
```
env | grep ARM_CLIENT
```
You should see valid Azure credentials. If not, return to the track home page by clicking the **Close** button, stop the track, and then restart it.

*Do not ever store your credentials in source code files*, as they can be accidentally exposed or copied to a public repository.