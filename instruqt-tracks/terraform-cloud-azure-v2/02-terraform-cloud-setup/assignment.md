---
slug: terraform-cloud-setup
id: w8vu1yshu8f4
type: challenge
title: Terraform Cloud Setup
teaser: |
  Customize your Terraform Cloud resources.
notes:
- type: text
  contents: |
    With your Terraform Cloud account

    1. Create a new Terraform Cloud Organization
    2. Enable a Trial of the "Standard" plan features
    3. Create a new personal account token
    4. Create a dedicated workspace
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
    height: 24px;
    border-radius: 5px;
    border: 1px solid rgba(151,159,175,1);
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

o {
  color:#BA55D3;
  padding: 0 5px;
  font-weight: bold;
  text-decoration: none;
}

o:hover {
  text-decoration: underline;
}

lb {
  display: flex;
  color: #222;
  background-color: lightblue;
  padding: 10px;
  margin: 10px 10px 10px 1px;
  border-radius: 3px;
  box-shadow: 2px 2px 10px;
}

w {
  display: inline-flex;
  border-radius: 5px;
  border: 1px solid rgba(88,78,213,1);
  background-color: rgba(250,250,250,1);
  color: #584ED5;
  padding: 2px 10px 2px 5px;
  font-size: 14px;
  /* font-weight: bold; */
  align-items: center;
  justify-content: center;
  height: 24px;
}

</style>
The first step to begin work with your deployment tasks is to set up your Terraform Cloud resources.

## Create a HashiCorp Cloud Platform Account

===

Follow these step-by-step instructions:

1. Sign up for a free HCP Account by visiting https://portal.cloud.hashicorp.com/sign-in

2. If you already have an account, sign in using your existing credentials and goto Step 5

3. **Accept the services agreements** and click **Continue**

4. Complete the on-screen instructions to verify your email address.

5. When prompted to **Set up your Organization**, we recommended using the default name provided.

6. Navigate to **Services > Terraform** and click on the **Continue to Terraform Cloud** link to access https://app.terraform.io

7. Select **Continue with HCP account** to sign in using your HCP credentials.

8. If prompted to create a new HCP-linked account, click  **Continue**

9. Once you are in the Terraform Cloud portal, you should be prompted to Choose your setup workflow:

  * Select  **Start from Scratch** 
  * Name your organization.  We recommend using the prefix  used to create the HCP Organization.
  * Click **Create an organization**

or

If you are using a pre-existing account:

  * Select your current organization at the bottom of the navigation menu
  * Click **Create new organization**
  * Name your organization.  We recommend using the prefix  used to create the HCP Organization.
  * Click **Create an organization**

10. When prompted to Create a workspace:

* Select the **CLI-driven workflow** 
* Name the workspace anything you want to
* Description is optional 
* Click **Create workspace**
	
## Activate the Terraform Cloud Standard Plan

===

1. To activate the Standard plan features required for the lab:

* From the Projects & workspaces dashboard, navigate to **Settings > Organizational Settings > Plan & Billing** 
* Click **Edit plan**
* Select **Standard Plan** then Click  **Next**
* Select **Pay-as-you-go** then Click **Next**
* On the final screen click **Activate plan** (Do not enter any CC information)

Please see the example images below.

![Enable Trial](../assets/enable_trial_2.png)

![Enable Trial](../assets/enable_payg.png)

![Enable Trial](../assets/activate_trial.png)

**Common issues**:

* You have an existing account and already used a trial:
  * Create a different organization and unlock the Standard plan features.
* You have an existing account and see an upgrade message at the top of the screen:
  * Upgrade your account to the new Free tier in order to continue with the workshop.
* You get an error message about your TFC account not being linked to HCP:
  * Create an HCP account and link it to Terraform Cloud.

Please ask your workshop leader for assistance if you have any issues creating accounts and activating the plan.

## Terraform Cloud Token

===

* Use this <o>[link](https://app.terraform.io/app/settings/tokens?source=terraform-login)</o> to create a new user token. When prompted, click  **Generate Token** to generate the new token.

* <lb>Make sure to save your Terraform Cloud token. It will not be displayed again.</lb>

* Move to the <t><img src="../assets/shell.png"/>Terminal</t> tab and store your Terraform Cloud Token locally with the following command:

```bash
terraform login


```

## Terraform Cloud Workspace

===

Use local Terraform utility deployment code to create and configure a new Terraform Cloud Workspace:

* Use the <t><img src="../assets/web.png"/>Code Editor</t> tab and expand the <t><img src="../assets/folder.png"/>terraform-cloud</t> folder and open the file <t><img src="../assets/tf-icon.png"/>terraform.tfvars</t>

* Replace the `YOUR_ORGANIZATION` placeholder with your Terraform Cloud organization name.

* We default the name of your Terraform Cloud workspace to `hashicat-azure`. You can choose a different name at this time.

---

* Move to the <t><img src="../assets/shell.png"/>Terminal</t> tab and execute the following commands:

```bash
cd /root/terraform-cloud
terraform init

# The following creates a workspace in
# Terraform Cloud called "hashicat-azure"
# ... unless the default is changed.
terraform apply -auto-approve


```

* From the Terraform Cloud portal, navigate to **Projects & workspaces > hashicat-azure > Settings > General**

* Note that your new workspace is configured for **Local** execution.

Please see the example image below.

![New Workspace](../assets/new_workspace.png)

---

Congratulations, you are ready to start working with Terraform on Azure. We will use the `hashicat-azure` example app in the rest of the challenges as you learn new Terraform skills.

Click the <v>Check</v> button to continue.

