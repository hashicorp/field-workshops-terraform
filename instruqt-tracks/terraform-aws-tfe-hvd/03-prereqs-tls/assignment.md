---
slug: prereqs-tls
type: challenge
title: "\U0001F4DA Create Acme TLS prereqs"
teaser: Welcome to this HashiCorp workshop on the Terraform Enterprise Hashicorp Validated
  Design (HVD) module.
notes:
- type: text
  contents: |
    Terraform Acme provider tls setup prereq

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
difficulty: basic
timelimit: 5000
enhanced_loading: null
---

This lab we are going to do some of the initial set up.

First we need to create a AWS hosted zone this relies on the Instruqt env var ``

The following command output is needed to enable the labs. Your instructor will provide the `<instructor provided>` string!

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

While the instructor populates the DNS delegation, you need to update the provided variables file in the module example folder

in the terminal tab
```
cd /src/modules/terraform-acme-tls-aws-main/examples/main
```

In the code editor tab navigate to the folder `~/src/modules/terraform-acme-tls-aws-main/examples/default` .

We are going to edit the variables file as follows

1. copy or rename the file `terraform.tfvars.example` to `terraform.auto.tfvars`
2. Update the code that follows, replacing `<instructor provided>` as previously provided. The following command exposes `INSTRUQT_PARTICIPANT_ID`

```
echo $INSTRUQT_PARTICIPANT_ID
```

```
route53_public_zone_name = "<INSTRUQT_PARTICIPANT_ID>.<instructor provided>.sbx.hashidemos.io"
tls_cert_fqdn            = "tfe.${INSTRUQT_PARTICIPANT_ID}..<instructor provided>.sbx.hashidemos.io"
tls_cert_email_address   = "username@hashicorp.com"
create_cert_files        = true
add_cert_filename_prefix = true
aws_region               = "us-west-1"
```

From the terminal tab in the `~/src/modules/terraform-acme-tls-aws-main/examples/default`  folder

```
terraform init
terraform plan
```

This should plan successfully. IF so...

```
terraform apply --auto-approve
```

you should see the resources created and you should now have a folder of certs at `/certs/ for the next lab.




