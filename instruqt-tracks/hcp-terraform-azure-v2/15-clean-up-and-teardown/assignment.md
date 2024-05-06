---
slug: clean-up-and-teardown
id: sl4ke0e7vmxm
type: challenge
title: Clean up
teaser: |
  Use this last challenge to clean up your resources.
notes:
- type: text
  contents: |-
    1. Destroy infrastructure.
    2. Remove HCP Terraform Configurations
    3. Delete GitHub repository
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

  t > a img {
    display: inline-block;
  }

  w {
    display: inline-flex;
    border-radius: 5px;
    background-color: rgba(250,250,250,1);
    color: #584ED5;
    padding: 2px 10px 2px 5px;
    font-size: 12px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 24px;
  }

  w > img {
    display: inline-block;
    max-height: 20px;
  }

  .tab {
    display: inline-block;
    margin-left: 30px;
  }
</style>
Congratulations, you've learned all the major features of HCP Terraform.

Destroy hashicat infrastructure
===

- Get Workspace ID
```bash
# Get the worspace ID for
# hashicat-azure
export WORKSPACE_ID=$(curl -s \
  --header "Authorization: Bearer $TFC_TOKEN" \
  --header "Content-Type: application/vnd.api+json" \
  https://app.terraform.io/api/v2/organizations/$ORG/workspaces \
  | jq -r '.data|.[]|select(.attributes.name | contains("hashicat-azure"))|.id'
)

```

- Delete the deployment
```bash
# Automate the deployment
# with a destroy data template
cd /root/terraform-api
sed -i "s/WORKSPACE_ID/$WORKSPACE_ID/g" destroy_payload.json

# API Call FTW
curl \
  --header "Authorization: Bearer $TFC_TOKEN" \
  --header "Content-Type: application/vnd.api+json" \
  --request POST \
  --data @destroy_payload.json \
  https://app.terraform.io/api/v2/runs


```

- Ensure that the `hashicat-azure` deployment **Triggered Destroy** finishes.

- On the HCP Terraform portal, navigate to <x>Projects & workspaces</x>-<x>[[ Instruqt-Var key="TF_WORKSPACE" hostname="workstation" ]]</x>-<x>Overview</x> to confirm. Please see the example image below.

![Destroy Workspace](../assets/workspace_destroy.png)


Remove HCP Terraform Configurations
===
- Remove workspace, variables, users, policies, VCS, private module

```bash
cd /root/hcp-terraform
terraform destroy -auto-approve


```

Remove GitHub Repository
===
- Remove your GitHub repository

```bash
cd /root/terraform-github
terraform destroy -auto-approve


```

- The repository for the Azure Blob Storage Module needs to be deleted manually.