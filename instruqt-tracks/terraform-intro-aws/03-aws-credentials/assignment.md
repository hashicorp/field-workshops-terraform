---
slug: aws-credentials
type: challenge
title: "\U0001F510 Connecting Terraform to AWS"
teaser: |
  Connecting to AWS with Access Keys and Secret Keys.
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
  path: /root/hashicat-aws
difficulty: basic
timelimit: 10000
---
In order to authenticate to AWS and build resources, Terraform requires you to provide a set of credentials, backed by an appropriate IAM policy.

For this training environment, we have prepared some temporary AWS credentials and stored them as environment variables. Terraform will automatically read and use the environment variables that are configured in your shell environment.

Run the following commands on the "Shell" tab:

```
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```
You should see valid AWS keys. If not, return to the track home page by clicking the **Close** button, stop the track, and then restart it.

*Do not ever store your credentials in source code files*, as they can be accidentally exposed or copied to a public repository.