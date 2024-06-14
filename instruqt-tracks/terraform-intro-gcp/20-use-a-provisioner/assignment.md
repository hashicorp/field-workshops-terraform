---
slug: use-a-provisioner
type: challenge
title: "\U0001F6E0️ Use a Provisioner"
teaser: |
  Terraform works great with many different provisioning tools including Chef, Puppet, Ansible, Bash, and Powershell.
notes:
- type: text
  contents: Terraform provisioners run once at creation time. They do not run on subsequent
    applies, except in special circumstances. (Like this training lab...)
- type: text
  contents: We've made some special adjustments to force the provisioner to run every
    time you type terraform apply. This is so you can practice playing with provisioners
    without destroying and recreating your virtual machine every time you make a change.
- type: text
  contents: |-
    ```
    ______________________
    < Cows love Terraform! >
     ----------------------
             \   ^__^
              \  (oo)\_______
                 (__)\       )\/\
                     ||----w |
                     ||     ||
    =============================
    ```
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
Open the `main.tf` file on the "Code Editor" tab. Scroll down until you find the `remote-exec` provisioner block.

Add the following two lines at the end of the inline list of commands:

```
"sudo apt -y install cowsay",
"cowsay Mooooooooooo!",
```

After copying them into your buffer, it will be easier to paste them if you hide the assignment by clicking the ">" icon . Click it again to redisplay the assignment. Be sure to save the file.

This might be a good time to use the `terraform fmt` command to line up the commands nicely.

Now apply your changes:

```
terraform apply -auto-approve
```

Scroll back through the log output. You should see an ASCII art cow saying "Moooooooo!"