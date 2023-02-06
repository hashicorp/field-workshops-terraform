---
slug: controlling-costs
id: 4d5o5rlix4xr
type: challenge
title: Controlling Costs with Cost Estimation
teaser: |
  Developers in your organization are running large VMs that are costing a lot of money. You need a way to restrict the costs of each workspace.
notes:
- type: text
  contents: |-
    Developers often run bigger VMs than are really necessary. Karen from
    finance pays you a visit to see if you can help:

    > Hello sysadmin, we got a really big AWS bill last month. Finance would like to
    inform developers using Terraform Cloud about estimated monthly costs of their
    Cloud resources before they deploy. Can we do that?
- type: text
  contents: |-
    You can learn more about Terraform Cloud's Cost Estimation feature with these links:

      * https://www.terraform.io/docs/cloud/cost-estimation/index.html
      * https://www.terraform.io/docs/enterprise/admin/integration.html#cost-estimation-integration
- type: text
  contents: |-
    Note that Sentinel can be used to prevent runs from being applied if estimated monthly costs or their increases are too high.

    See the following example Sentinel policies:
      * [Limit proposed monthly costs](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-proposed-monthly-cost.sentinel)
      * [Limit costa by workspace](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-cost-by-workspace-name.sentinel)
      * [Limit costs and percentage increase](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/cloud-agnostic/limit-cost-and-percentage-increase.sentinel)
tabs:
- title: Code Editor
  type: service
  hostname: workstation
  port: 8443
- title: Terminal
  type: terminal
  hostname: workstation
difficulty: basic
timelimit: 1800
---
<style>
  v {
    display: inline-flex;
    color: white;
    background-color: rgb(17, 158, 111);
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    border-radius: 2px;
    height: 24px;
  }

  r {
    display: inline-flex;
    color: white;
    background-color: #c73445;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    border-radius: 2px;
    height: 24px;
  }

  m {
    display: inline-flex;
    color: white;
    background-color: #584ED5;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    border-radius: 2px;
    height: 24px;
  }

  x {
    display: inline-flex;
    border-radius: 5px;
    border: 1px solid rgba(151,159,175,1);
    /* background-color: rgba(151,159,175,1); */
    /* background-color: rgba(30,38,55,1); */
    color: rgba(151,159,175,1);
    padding: 2px 10px 2px 10px;
    font-size: 14px;
    letter-spacing: 1.2px;
    align-items: center;
    justify-content: center;
    height: 24px;
  }

  t {
    display: inline-flex;
    border-radius: 5px;
    background-color: rgba(30,38,55,1);
    color: rgba(151,159,175,1);
    padding: 2px 10px 2px 5px;
    font-size: 14px;
    letter-spacing: 1.2px;
    align-items: center;
    justify-content: center;
    height: 24px;
  }

  t > img {
    display: inline-block;
  }

/*
  Lightbox credit: Alex Rosenkranz
  https://gist.github.com/arosenkranz/3359c65fbfda36f17f622ff624b74aea
*/

.lightbox {
  display: none;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
}

.lightbox:target {
  display: flex;
}

.lightbox img {
  max-height: 100%
}
</style>

In this challenge you are setting up [Cost Estimation](https://www.terraform.io/docs/cloud/cost-estimation/index.html). Terraform Cloud provides cost estimates for many resources found in your Terraform configuration.

- For each resource an hourly and monthly cost is shown, along with the monthly delta.

- The total cost and delta of all estimable resources is also shown.

1- Enable Cost Estimation
===
Enabling Cost Estimation across all workspaces of an organization in Terraform Cloud is very easy.

- The Team & Governance plan enables cost estimation by default. You can enable or disable the feature in your organization's settings.

- On the Terraform Cloud portal, navigate to <x>Settings</x>-<x>Cost Estimation</x> and check the <x>Enable Cost Estimation for all workspaces</x> box. Please see the example image below.

<a href="#org_cost_estimation">
  <img alt="example" src="../assets/org_cost_estimation.png" />
</a>

<a href="#" class="lightbox" id="org_cost_estimation">
  <img alt="example" src="../assets/org_cost_estimation.png" />
</a>

- **Note**: In Terraform Enterprise, you need to provide Cloud credentials for the platform for which you want cost estimates. See this [link](https://www.terraform.io/docs/enterprise/admin/integration.html#cost-estimation-integration).

2- Test Cost Estimation
===
When enabled, Terraform Cloud performs a cost estimate for every run. Estimated costs appear in the run UI as an extra run phase, between the plan and apply.

- To see a cost estimate for your hashicat-aws workspace, trigger a new run.

- On the Terraform Cloud portal, navigate to <x>Projects & workspaces</x>-<x>[[ Instruqt-Var key="TF_WORKSPACE" hostname="workstation" ]]</x>, choose <x>Actions</x> and <x>Start new run</x>. Please see the example image below.

<a href="#workspace_new_run">
  <img alt="example" src="../assets/workspace_new_run.png" />
</a>

<a href="#" class="lightbox" id="workspace_new_run">
  <img alt="example" src="../assets/workspace_new_run.png" />
</a>

- You will then see the estimated monthly cost of the workspace which is based on the costs of the AWS resources provisioned for the hashicat-aws workspace. Please see the example image below.

<a href="#workspace_cost_estimation">
  <img alt="example" src="../assets/workspace_cost_estimation.png" />
</a>

<a href="#" class="lightbox" id="workspace_cost_estimation">
  <img alt="example" src="../assets/workspace_cost_estimation.png" />
</a>

A complete list of AWS resources for which cost estimates are available in Terraform Cloud is [here](https://www.terraform.io/docs/cloud/cost-estimation/aws.html).

---
Outstanding work! The team can see cost estimates before implementation. You can add to your notes the following:

- Everyone involved can have cost visibility.

- Cost estimates are available for multiple Cloud platforms.

Share your notes with Karen with the <v>Check</v> button below.
