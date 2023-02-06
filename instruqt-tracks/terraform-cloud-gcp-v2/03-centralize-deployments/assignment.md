---
slug: centralize-deployments
id: k69scdti468a
type: challenge
title: Safekeeping Your Terraform State
teaser: |
  Deploy your application to Google Cloud. Execute Terraform commands locally and use Terraform Cloud to store and synchronize Terraform State.
notes:
- type: text
  contents: |-
    It's Monday morning and you're the first one into the office. Most of your teammates were up late  last night fixing an outage.

    Senior operations admin, Robin, shows up at your desk.

    > Last night we had trouble rebuilding the website because the deployment code is locked on Lars' laptop, and Lars is on vacation. Can you configure Terraform Cloud to deploy the application and centralize its dependencies?
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

/* Lightbox credit: Alex Rosenkranz
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
The objective of this challenge is to configure remote state using your Terraform Cloud account.

- When you perform the deployment of the `hashicat-gcp` application, the Terraform code executes on your workstation.

- We want to centralize and secure the associated Terraform state of your deployment in your Terraform Cloud workspace.

1- Configure the workspace backend
===
- Use the <t><img src="../assets/web.png"/>Code Editor</t> tab and expand the <t><img src="../assets/folder.png"/>hashicat-gcp</t> folder.

- Open the file <t><img src="../assets/tf-icon.png"/>remote_backend.tf</t> and confirm your organization name, and your workspace name.

- Edit the file <t><img src="../assets/tf-icon.png"/>terraform.tfvars</t>:

  * Set the `prefix` variable to your name or a prefered pseudonym. If you use multiple words, use hyphens or underscores between words, and keep it all lower case.

  * Optionally modify the `region` to a valid Google Cloud region such as "us-east-1", "us-west-1", "eu-west-2", or "ap-southeast-1".

2- Deploy the hashicat application
===
- In the <t><img src="../assets/shell.png"/>Terminal</t> tab execute the following commands:

```bash
# Move to our Terraform workspace
cd /root/hashicat-gcp

# Initialize the workspace locally.
terraform init

# Execute the plans and applies on this
# workstation. At this stage, Terraform
# Cloud is only used to store and
# synchronize state.
terraform apply -auto-approve


```

- When completed, you can follow the `catapp_ip`, or the `catapp_url`, link to open the application instance.

3- See results in Terraform Cloud
===
- On the Terraform Cloud portal, navigate to <x>Projects & workspaces</x>-<x>[[ Instruqt-Var key="TF_WORKSPACE" hostname="workstation" ]]</x>-<x>Overview</x> and click on <x>Outputs</x>. Please see the example image below.

<a href="#workspace_outputs">
  <img alt="example" src="../assets/workspace_outputs.png" />
</a>

<a href="#" class="lightbox" id="workspace_outputs">
  <img alt="example" src="../assets/workspace_outputs.png" />
</a>

- From the user interface, you can follow the `catapp_ip`, or the `catapp_url`, link to open the application instance.

- On the Terraform Cloud portal, navigate to <x>Projects & workspaces</x>-<x>[[ Instruqt-Var key="TF_WORKSPACE" hostname="workstation" ]]</x>-<x>States</x>. Please see the example image below.

<a href="#workspace_state">
  <img alt="example" src="../assets/workspace_state.png" />
</a>

<a href="#" class="lightbox" id="workspace_state">
  <img alt="example" src="../assets/workspace_state.png" />
</a>

- Open the state file to view your deployment data.

---

Well done!

- You successfully deployed the `hashicat-gcp` application.

- The Terraform state is stored securely in the Terraform Cloud platform.

Report to Robin by clicking the <v>Check</v> button for this challenge.