---
slug: gcp-credentials
type: challenge
title: "\U0001F510 Connecting Terraform to GCP"
teaser: |
  Connecting to GCP with Google Credentials.
notes:
- type: text
  contents: Did you know HCL stands for "HashiCorp Configuration Language"?
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
In order to authenticate to GCP and build resources, Terraform requires you to provide a set of credentials, backed by an appropriate IAM policy.

For this training environment, we have prepared some temporary GCP credentials and stored them as an environment variable. Terraform will automatically read and use the environment variables that are configured in your shell environment.

Run the following command on the "Shell" tab:

```
echo $GOOGLE_CREDENTIALS | jq
```

*Do not ever store your credentials in source code files*, as they can be accidentally exposed or copied to a public repository.