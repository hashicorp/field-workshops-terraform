---
slug: private-module-registry
id: x5eg8xokurgm
type: challenge
title: Private Module Registry
teaser: |
  Some of your users want a simple way to deploy Azure Backup Storage for our application. Use the Private Module Registry, in which you can store standard, re-usable Terraform code for IaC consumers.
notes:
- type: text
  contents: |-
    Most of the devops team is using Terraform to build and configure their
    infrastructure. Recently users from outside the team have been requesting help
    building their own workspaces.

    Gaurav, the database admin, asks for your help:

    > Our team needs to configure Azure Storage for backups and I heard something about Terraform modules for this. Can you help us set up a template for new Azure Storage for backup?
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
    height: 24px;
  }

  w > a img {
    display: inline-block;
  }

.tab {
  display: inline-block;
  margin-left: 30px;
}
</style>

In this challenge you'll learn to use the Private Module Registry, which allows you to store and version re-usable modules of Terraform code.

1- Terraform Registry
===

The Terraform Registry is an interactive resource for discovering a wide selection of integrations (providers), configuration packages (modules), and security rules (policies) for use with Terraform.

- Instead of writing this module from scratch, you can use a trusted Azure Blob Storage module from the public Terraform Registry.

- Visit the [Terraform Azure Backup Storage](https://registry.terraform.io/modules/ravensorb/azure-backup/azurerm/latest) page on the Terraform Registry to review a popular module.

- By default, we can use the module with the following code snippet:

```bash
module "azure-backup" {
  source  = "ravensorb/azure-backup/azurerm"
  version = "1.0.2"
  resource_group_name = "${var.prefix}-public"
}
```

- Add the code snippet to your hashicat-azure deployment:

  - Use the <t><img src="../assets/web.png"/>Code Editor</t> tab and expand the <t><img src="../assets/folder.png"/>hashicat-azure</t> folder.

  - Open the <t><img src="../assets/tf-icon.png"/>main.tf</t> file and add the snippet to the end of the file.

  - Use the <t><img src="../assets/shell.png"/>Terminal</t> tab to update your deployment with the module settings.

```bash
cd /root/hashicat-azure
git add .
git commit -m "Added Backup Storage module"
git push origin main


```

- On the Terraform Cloud portal, navigate to <x>Workspaces</x>-<x>hashicat-azure</x>-<x>Runs</x> and, on the <x>Current Run</x> note the application of the new **module**. Please see the example image below.

![Workspace Public Module](../assets/workspace_public_module.png)

This provides an adequate technical solution. However, Gaurav and the development team need to lock down the attributes for the Azure Blob Storage, and the customization must be held privately to avoid vulnerable exposures.

2- Private Registry
===
Terraform Cloud's private registry works similarly to the public Terraform Registry and helps you share Terraform providers and Terraform modules across your organization.

- Visit the [Terraform Azure Backup Storage](https://registry.terraform.io/modules/ravensorb/azure-backup/azurerm/latest) page on the Terraform Registry to work with the module. Complete the following steps:

<span class="tab"></span>1 - Follow the <x>Source Code</x> link
<br><span class="tab"></span>2 - <x>Fork</x> the repository
<br><span class="tab"></span>3 - Uncheck <x>Copy the master branch only</x>
<br><span class="tab"></span>4 - Use <x>Create Fork</x> to create a copy

- For reference, please see the example image below.

![Module Fork](../assets/module_fork.gif)

With a private copy of the module, you can customize the content to enforce business rules, technical requirements and security guidelines.

---

The private registry uses your configured Version Control System (VCS) integrations and defers to your VCS provider for most management tasks.

To implement this private module in your Private Registry do the following:

- Use the <t><img src="../assets/web.png"/>Code Editor</t> tab and expand the <t><img src="../assets/folder.png"/>terraform-cloud</t> folder.

- Open the file <t><img src="../assets/tf-icon.png"/>terraform.tfvars.tf</t> and ensure value for the variable `module_repo` matches your own module repository name.

- Open the file <t><img src="../assets/tf-icon.png"/>main.tf</t> and note the code snippet to automate the integration on (lines 349-362).

- Use the <t><img src="../assets/shell.png"/>Terminal</t> tab to register your Private Registry with the following command:

```bash
cd /root/terraform-cloud
terraform apply -auto-approve


```

---

Your Terraform modules can be imported to your Private Module Registry using a workflow method in the Terraform Cloud portal.

You do not need to perform these actions with the selected Terraform module, but you can experiment with your own Terraform modules.

- On the Terraform Cloud portal, navigate to <x>Registry</x>-<x>Modules</x> and use <x>Publish</x>.

- Follow the workflow:

<w><img src="../assets/one.png"/>Connect to VCS</w> - pick your GitHub VCS provider <x>HashiCat Workshop</x>

<w><img src="../assets/two.png"/>Choose a repository</w> - select the repository with your copy of the <x>terraform-azurerm-backupstorage</x>

<w><img src="../assets/three.png"/>Confirm Selection</w> - with <m>Publish Module</m>.

- For reference, please see the example image below.

![Private Registry Register Module](../assets/pmr_register_module.gif)

The main difference between these two methods is automation. In this workshop, we prefer to perform the operation with code to maintain automated control with code. Creating a Private Module entry manually means you have to maintain and document the process it manually.

3- Implement and Manage
===

- Use the <t><img src="../assets/web.png"/>Code Editor</t> tab and expand the <t><img src="../assets/folder.png"/>hashicat-azure</t> folder.

- Revise the `module "backupstorage"` code snippet in the file <t><img src="../assets/tf-icon.png"/>main.tf</t> and update with a reference to your Private Module registry. The code currently reads:

```bash
module "azure-backup" {
  source = "ravensorb/azure-backup/azurerm"
  version = "1.0.2"
  resource_group_name = "${var.prefix}-public"
}
```

- Update the code with the example below. Notice the update to the module reference with your Terraform Cloud and your Organization name.

```bash
module "backupstorage" {
  source = "app.terraform.io/[[ Instruqt-Var key="TF_ORG" hostname="workstation" ]]/azure-backup/azurerm"
  version = "1.0.2"
  resource_group_name = "${var.prefix}-private"
}
```

- Use the <t><img src="../assets/shell.png"/>Terminal</t> tab to update your deployment with the module settings.

```bash
cd /root/hashicat-azure
git add .
git commit -m "Added Backup Storage private module"
git push origin main


```

- The end result is the implementation of a private module that supports your decision criteria.

- On the Terraform Cloud portal, navigate to <x>Workspaces</x>-<x>hashicat-azure</x>-<x>Runs</x> to view the effective changes.

- For reference, please see the example image below.

![Private Module](../assets/pmr_private_module.png)

- The logs reflect the change from the use a public module on the Terraform Registry, to a private module on `app.terraform.io/[[ Instruqt-Var key="TF_ORG" hostname="workstation" ]]`.

---
Fantastic work, Sysadmin! You are helping your team tremendously. You can share the following:

- Gaurav and the development team can use a standardized template for deploying Azure Blob Storage.

- The Azure Blob Storage module is held privately, with properties that match ACME's guidelines.

- Gaurav and the development do not need to code Terraform. They consume pre-approved artifacts only.

Use the <v>Check</v> button below to update the teams involved and your manager.