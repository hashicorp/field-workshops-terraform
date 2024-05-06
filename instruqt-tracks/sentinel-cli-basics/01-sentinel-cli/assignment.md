---
slug: sentinel-cli
type: challenge
title: The Sentinel CLI
teaser: Learn about the Sentinel CLI commands.
notes:
- type: text
  contents: |-
    [Sentinel](https://docs.hashicorp.com/sentinel) allows customers to implement policy-as-code in the same way that Terraform implements infrastructure-as-code.

    The Sentinel Command Line Interface (CLI) allows you to apply and test Sentinel policies including those that use mocks generated from HCP Terraform and Terraform Enterprise plans.
- type: text
  contents: |-
    We've launched the Sentinel CLI 0.24.0 on a Ubuntu VM running in GCP so that you don't need to download or install it.

    If you would like to see syntax highlighting in the editor for Sentinel policies, we suggest selecting "ruby" in the language drop-down at the bottom of the editor.

    After learning how to use the Sentinel CLI in the first challenge, you will run a very simple policy in the second challenge.
tabs:
- title: Terminal
  type: terminal
  hostname: sentinel
difficulty: basic
timelimit: 1200
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
    justify-content: center;
    height: 24px;
    align-items: center;
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

The Sentinel Command Line Interface (CLI) allows you to apply and test Sentinel policies including those that use mocks generated from HCP Terraform plans.

Let's start with some basic Sentinel commands, running them in the <t><img src="../assets/shell.png"/>Terminal</t> tab on the left.

Check the version of Sentinel running on your machine:
```
sentinel version
```

See the list of Sentinel CLI commands:
```
sentinel
```

Get help for the `sentinel apply` command:
```
sentinel apply -h
```
Please read the output to learn about the `apply` command.

Note that you can also use the `-help` and `--help` flags instead of `-h`.

Get help for the `sentinel test` command:
```
sentinel test -h
```
Please read the output to learn about the `test` command.

The `sentinel apply` and `sentinel test` commands both evaluate a Sentinel policy, but the latter tests it against multiple test case files.
