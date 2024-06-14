---
slug: add-an-output
type: challenge
title: "\U0001F5A8️ Add an Output"
teaser: |
  Outputs are used to convey useful information such as IP addresses, application URLs or other useful data.
notes:
- type: text
  contents: You can mix plain text along with Terraform data in your outputs. Outputs
    can be used to convey useful information to your users at the end of a run.
- type: text
  contents: The `terraform refresh` command will sync your state file with what exists
    in your infrastructure. A refresh command will not change your infrastructure.
- type: text
  contents: The `terraform output` command can be run any time you want to see your
    Terraform outputs again. Run `terraform output <output_name>` to view a single
    output.
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
Open the **outputs.tf** file on the "Code Editor" tab.

Add a second output for the `ip_address` of your web server. It's going to look almost exactly like the first output but will instead output an IP address instead of a DNS name.

Name your output `catapp_ip`.

You may refer to the docs page to see what types of outputs are valid:

[Terraform Azure Docs - Click Here](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip#attributes-reference)
[Terraform Outputs Docs - Click Here](https://www.terraform.io/docs/configuration/outputs.html)

Be sure to save the changes to the **outputs.tf** file.

Run the terraform refresh command to view your new output:

```
terraform refresh
```

You can run the Terraform output command to view all your outputs:

```
terraform output
```

You can click on either URL to use the web app.