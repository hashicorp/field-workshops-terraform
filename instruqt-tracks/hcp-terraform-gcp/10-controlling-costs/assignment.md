---
slug: controlling-costs
id: lomyzo5rvp5z
type: challenge
title: $ Controlling Costs with Cost Estimation
teaser: |
  Developers in your organization are running large VMs that are costing a lot of money. You need a way to restrict the costs of each workspace.
notes:
- type: text
  contents: "Developers often run bigger VMs than are really necessary. Karen from
    finance pays you a visit to see if you can help:\n\n>\U0001F469\U0001F3FC‍\U0001F4BC\U0001F4C8
    Hello sysadmin, we got a really big GCP bill last month and would like you to
    inform developers using HCP Terraform about estimated monthly costs of their workspaces
    before they apply runs. Can you do that?"
- type: text
  contents: |-
    You can learn more about HCP Terraform's Cost Estimation feature with these links:

      *  https://www.terraform.io/docs/cloud/cost-estimation/index.html
      * https://www.terraform.io/docs/enterprise/admin/integration.html#cost-estimation-integration
- type: text
  contents: |-
    Note that Sentinel can be used to prevent runs from being applied if estimated monthly costs or their increases are too high.

    See the following example Sentinel policies:
      * [limit-proposed-monthly-cost.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-proposed-monthly-cost.sentinel)
      * [limit-cost-by-workspace-name.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-cost-by-workspace-name.sentinel)
      * [limit-cost-and-percentage-increase.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-cost-and-percentage-increase.sentinel)
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 1800
---
In this challenge you'll use HCP Terraform's [Cost Estimation](https://www.terraform.io/docs/cloud/cost-estimation/index.html) feature to inform developers what the estimated monthly costs of their hashicat-gcp workspace will be.

Enabling Cost Estimation across all workspaces of an organization in HCP Terraform is very easy. All you need to do is visit the "Settings | Cost estimation" page of your organization and check the "Enable Cost Estimation for all workspaces" checkbox.

Note that in Terraform Enterprise, you also need to provide cloud credentials for the clouds for which you want cost estimates. See this [link](https://www.terraform.io/docs/enterprise/admin/integration.html#cost-estimation-integration).

To see a cost estimate for your hashicat-gcp workspace, just trigger a new run in it by clicking the `Actions` drop-down and then selecting "Start a new plan". You will then see the estimated monthly cost of the workspace which is based on the costs of the `google_compute_instance` resource provisioned for the hashicat-gcp workspace.

A complete list of GCP resources for which cost estimates are available in HCP Terraform is [here](https://www.terraform.io/docs/cloud/cost-estimation/gcp.html).

Finally, note that Sentinel's [tfrun](https://www.terraform.io/docs/cloud/sentinel/import/tfrun.html) import can be used to prevent runs from being applied when workspaces would incur excessive monthly costs or cost increases.

See the following example Sentinel policies:
  * [limit-proposed-monthly-cost.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-proposed-monthly-cost.sentinel)
  * [limit-cost-by-workspace-name.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-cost-by-workspace-name.sentinel)
  * [limit-cost-and-percentage-increase.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-cost-and-percentage-increase.sentinel)