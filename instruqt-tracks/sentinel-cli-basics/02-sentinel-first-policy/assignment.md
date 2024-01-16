---
slug: sentinel-first-policy
type: challenge
title: Run Your First Sentinel Policy
teaser: Apply and test your first Sentinel policy.
notes:
- type: text
  contents: |-
    The Sentinel ["apply"](https://docs.hashicorp.com/sentinel/commands/apply) command lets you evaluate Sentinel policies

    The Sentinel ["test"](https://docs.hashicorp.com/sentinel/commands/test) command lets you test a Sentinel policy against multiple test cases

    Both commands use [Sentinel CLI configuration files](https://docs.hashicorp.com/sentinel/commands/config)
tabs:
- title: First Policy
  type: code
  hostname: sentinel
  path: /root/sentinel/require-even-number.sentinel
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/require-even-number/
- title: Terminal
  type: terminal
  hostname: sentinel
difficulty: basic
timelimit: 2400
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
    align-items: center;
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
Now that you are familiar with the Sentinel CLI commands, let's apply and test your first Sentinel policy.

1 - Apply the Policy
===
- Take a look at the `require-even-number.sentinel` policy on the <t><img src="../assets/code.png"/>First Policy</t> tab. This checks that a parameter called `the_number` is an even integer; it's default value is 1.

- Apply the `require-even-number.sentinel` policy with the default value of 1 on the <t><img src="../assets/shell.png"/>Terminal</t> tab:
```
sentinel apply require-even-number.sentinel
```
> [!WARNING]
> This will fail since 1 is an odd number.

- Apply the `require-even-number.sentinel` policy with a value of 2:
```
sentinel apply -param the_number=2 require-even-number.sentinel
```
> [!WARNING]
> This will pass since 2 is an even number.

- Run that command again, but add `-trace` before the name of the policy to make Sentinel print more information:
```
sentinel apply -param the_number=2 -trace require-even-number.sentinel
```
> [!NOTE]
> Adding `-trace` causes the `sentinel test` command to print output from any of the policy's `print` statements even when a test case passes.

2 - Test the Policy
===
Now, we will test the policy with the `sentinel test` command using test cases. For any policy, the test cases must be placed under the directory `test/<policy>` under the directory containing the policy where `<policy>` is the name of the policy without the `.sentinel` extension.

- Edit the `fail.hcl` test case for the `require-even-number.sentinel` policy on the <t><img src="../assets/code.png"/>Test Cases</t> tab, replacing `<an_odd_number>` with any odd number.

- Edit the "pass.hcl" test case for the "require-even-number.sentinel" policy on the <t><img src="../assets/code.png"/>Test Cases</t> tab, replacing `<an_even_number>` with any even number.

- Test the `require-even-number.sentinel` policy against both test cases on the <t><img src="../assets/shell.png"/>Terminal</t> tab:
```
sentinel test -run=number -verbose
```
> [!WARNING]
> Both test cases should pass and show you the numbers that were used.


> [!NOTE]
> When specifying a policy with the `-run` argument, you can match any portion of the policy name. Often, you will want to use something that only matches a single policy in the current directory.

Congratulations on completing the track. That was easy!
