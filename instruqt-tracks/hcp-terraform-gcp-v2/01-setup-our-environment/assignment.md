---
slug: setup-our-environment
id: noly3kbyvobp
type: challenge
title: |
  Getting Started - Explore the lab
teaser: |
  Get to know your working environment.
notes:
- type: text
  contents: |-
    Welcome to your first day as a systems administrator at ACME.

    These are some of your coworkers:

    <center><table cellpadding=20>
      <tr>
        <td>
        Hiro - Product Manager<br>
        Aisha - Database Admin<br>
        William - InfoSec Lead<br>
        Lars - Lead Developer<br>
        </td>
        <td>
        Robin - Operations Admin<br>
        Jane - Quality Assurance<br>
        Gaurav - Network Admin<br>
        Karen - Finance
        </td>
      </tr>
    </table></center>
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
    max-height: 24px;
  }
  c {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: black;
  }
  c > img {
    max-width: 200px;
    max-height: 200px;
  }
</style>
Welcome to your first day as an infrastructure admin at ACME Inc. After employee orientation, you sit down at your workstation and start your workday.

In your workstation, there are two folders where you interact during the exercise:

1. The <t><img src="../assets/folder.png"/>hashicat-gcp</t> folder contains Terraform code for the application deployment.

2. The <t><img src="../assets/folder.png"/>hcp-terraform</t> folder provides utility code to set up your HCP Terraform resources.

---
There are other folders that contain utilities for the exercises. We exclude them from the Code Editor for simplicity. You do not need to edit anything in them.

- The <t><img src="../assets/folder.png"/>terraform-github</t> folder contains Terraform code to automate management tasks in your GitHub organization.
- The <t><img src="../assets/folder.png"/>terraform-api</t> folder contains Terraform code and JSON templates to automate API exercises.
- The <t><img src="../assets/folder.png"/>scripts</t> folder contains interactive Bash scripts to assist you in select exercises.

Code Editor
===

- Use the <t><img src="../assets/web.png"/>Code Editor</t> tab to work with your Terraform code.

- Find the notification for recommended extensions in your code editor.

![VSCode Extensions](../assets/vscode-extensions.png)

- Install and explore the extensions for this project.

- Close all the tabs when you are ready to move on.

<c><img src="../assets/close_vs_code_tabs.gif"/></c>

---

- Move back to the <t><img src="../assets/vsc-explorer-icon.png"/></t> Explorer.

- Expand the <t><img src="../assets/folder.png"/>hashicat-gcp</t> folder and open the file <t><img src="../assets/readme.png"/>README.md</t>.

- Add some text at the bottom, then close and re-open the file.

- Note that your code editor is pre-configured with **Auto Save** to keep your changes automatically.

- Please explore the Terraform code for the `hashicat-gcp` application.

Terminal
===

- Explore the <t><img src="../assets/shell.png"/>Terminal</t> tab where you execute Terraform commands.

- Copy and paste the following command:

```bash
terraform


```

---

Congratulations, you are familiar with the lab environment.

When ready, click the <v>Check</v> button to continue.