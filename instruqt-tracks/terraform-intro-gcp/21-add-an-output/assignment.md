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
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 10000
---
Open the **outputs.tf** file on the "Code Editor" tab. Note the catapp_url output in the file.

Add a second output for the `network_ip` of your web server. It's going to look a lot like the first output but will instead output the internal IP address instead of the external one.

Name your output `catapp_ip`.

You may refer to the docs page to see what types of outputs are valid:

[Terraform GCP Docs - Click Here](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#attributes-reference)
[Terraform Outputs Docs - Click Here](https://www.terraform.io/docs/configuration/outputs.html)

Be sure to save the changes to the **outputs.tf** file.

Run the Terraform refresh command to view your new output:

```
terraform refresh
```

You can run the Terraform output command to view all your outputs:

```
terraform output
```

Unfortunately, you cannot use the URL with the internal IP to access the web app since your browser is not within the internal GCP network. But you can use the public URL shown in the `catapp_url` output.