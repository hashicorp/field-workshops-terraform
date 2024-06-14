---
slug: terraform-init-provider
type: challenge
title: "\U0001F3E1 Terraform Init - Install the Providers"
teaser: |
  Terraform needs a provider to talk to cloud APIs. The provider is the bridge that connects Terraform core to your infrastructure providers.
notes:
- type: text
  contents: |-
    The Terraform core program isn't very useful by itself. Terraform needs the help of a *provider* to be able to talk to cloud APIs. Terraform has hundreds of different providers. You can browse the provider list here:

    https://registry.terraform.io/browse/providers

    Today we'll be using a few different providers, but the main one is the *gcp* provider.
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
We have downloaded some Terraform code for the HashiCat application. We'll be using this source code for the rest of the track.

Before we can do anything with Terraform we need to initialize our workspace. Run the following command on your "Shell" tab:
```
terraform init
```

The `terraform init` command scans your Terraform code, identifies any providers that are needed, and downloads them.

Run the following command to verify that the google provider was installed under the ".terraform" directory::

```
ls .terraform/providers/registry.terraform.io/hashicorp
```

This hidden directory is where all modules and plugins are stored.