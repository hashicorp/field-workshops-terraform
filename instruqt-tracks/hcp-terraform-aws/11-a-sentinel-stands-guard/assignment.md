---
slug: a-sentinel-stands-guard
id: oqo9lrxivmfu
type: challenge
title: "\U0001F6E1️ Terraform Compliance with Sentinel"
teaser: |
  Developers in your organization are building cloud resources without tagging them properly. You need a way to enforce tagging on all your AWS instances that are built with Terraform. Meet Sentinel, the governance engine for Terraform.
notes:
- type: text
  contents: "Developers love working in the cloud but sometimes they forget to tag
    their instances with the right billing and department codes. Karen from finance
    pays you a visit to see if you can help:\n\n>\U0001F469\U0001F3FC‍\U0001F4BC\U0001F4C8
    Hello sysadmin, we got a really big AWS bill last month and we have no idea how
    much we can bill back to the department who requested this stuff. I have a report
    that is supposed to show this stuff but it only works if everybody tags their
    resources properly. Can you make sure all your folks are properly tagging their
    cloud resources?"
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-aws
difficulty: basic
timelimit: 1800
---
In this challenge you'll use Sentinel to enforce a rule that requires any AWS instance created in your account to have the correct billable and department tags.

### Challenge Setup

1. Create a fork of the following GitHub repo, which contains several Sentinel Policy Sets that you can use in your own organization. As you did with the hashicat-aws repo, use the **Fork** button in the upper right corner of the screen to create your own copy.

https://github.com/hashicorp/tfc-workshops-sentinel

**Note:**: If you previously forked this repository before 9/20/2020, please delete your fork and re-fork it to ensure that you are using newer versions of the policies that use the Sentinel v2 imports.

Before moving on, please look at the [enforce-mandatory-tags](https://github.com/hashicorp/tfc-workshops-sentinel/blob/master/aws/enforce-mandatory-tags.sentinel) policy. This policy requires all EC2 instances to have `Department` and `Billable` tags. It uses some functions from a Sentinel module in a different repository called [terraform-sentinel-policies](https://github.com/hashicorp/terraform-sentinel-policies). You'll find many useful Sentinel policies and functions in it.

2. Go into the **Organization Settings** for your training organization and click on **Policy Sets**.

3. Use the **Connect a new policy set** button to connect your new GitHub repo to your organization. Remember, the repository is named **tfc-workshops-sentinel**.

4. Under **Description** you can enter "Sentinel Policies for our AWS resources".

5. In the **More Options** menu set the **Policies Path** to `/aws`. This tells HCP Terraform to use the AWS specific policies that are stored in the repo.

6. Leave everything else at its default setting and click on the **Connect policy set** button at the bottom of the page.

You are now ready to begin the challenge.

### The Challenge

You'll first need to run a `git pull` command to pull in the changes you made in the "Collaborating with VCS" challenge:

```
git pull
```

Then, add the **Department** tag with a value of "devops" to the `aws_instance` resource in your main.tf file. Be sure to save the file.

Then run the following commands to push the change to your forked repository:

```
git add .
git commit -m "Added the first tag"
git push origin master
```

These commands mean "add all your changes, commit them to the local git repo, then push them to the master branch of the remote repo." Note that you will have to provide your GitHub credentinals for the `git push` command.

A plan that successfully runs will be followed by a Sentinel policy check against the enforce-mandatory-tags.sentinel policy. This policy will fail because you have (intentionally) not yet added the **Billable** tag to your aws_instance resource. As a consequence, you will not be able to apply the run.

Now, add the **Billable** tag to the aws_instance resource in your main.tf file with a value of "true" and then run these commands to push the change to your repository:

```
git add .
git commit -m "Added the second tag"
git push origin master
```

This time, the Sentinel policy should pass because your EC2 instance now has both tags.

Each time you push a change to master, you'll trigger a new Terraform run. Keep trying until you pass the Sentinel policy check.