---
slug: restrict-aws-iam-v2
type: challenge
title: Exercise 2b
teaser: |
  Restrict AWS IAM access keys (second version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a second version of the second Sentinel policy for Terraform.

    We've made things easier by writing most of the policy for you and by providing the test cases and mocks that you need to test it.

    Your task is to complete and test a Sentinel policy that requires that all AWS IAM access keys provisioned by Terraform's AWS Provider include a PGP key.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/require-access-keys-use-pgp-b/
- title: Sentinel CLI
  type: terminal
  hostname: sentinel
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

In this challenge, you will write a second version of the second Sentinel policy for Terraform.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the Second Version
===
Completing the `require-access-keys-use-pgp-a.sentinel` policy should have been fairly easy since it had the same structure as the `restrict-ec2-instance-type.sentinel` and `restrict-vault-auth-methods.sentinel` policies. Almost all the exercises in this track could be solved with short policies that call functions that we have already defined. However, if you only called those functions, you would not learn how to write similar functions yourself.

So, we would like you to pretend that the generic `filter_attribute_does_not_have_prefix` function did not exist and write your own Sentinel code to handle the specific needs of the exercise.

1. Open the `require-access-keys-use-pgp-b.sentinel` policy and observe that it also has several placeholders in angular brackets that need to be replaced.

2. In the assignment of the `pgp_key` variable, replace `<expression>` with Sentinel code that will convert `key.change.after.pgp_key` to `null` if it is missing.

3. Then replace `<condition_1>` with a condition that tests if the `pgp_key` attribute was null.
    - This condition should use the `pgp_key` variable. (We're only testing if it was null since if it had been missing (undefined), it would already have been converted to null.)

4. Next, replace `<condition_2>` with a condition that tests if the `pgp_key` variable does **not** start with "keybase:".
    - While there are several ways of doing this, please use the "strings" import which is also used in the `filter_attribute_does_not_have_prefix` function that was used by the `require-access-keys-use-pgp-a.sentinel` policy.

Note that this version of the policy sets `violations` to `length(violatingIAMAccessKeys)` instead of `violatingIAMAccessKeys["length"]` since `violatingIAMAccessKeys` is just a regular map without a key called `length` as had been the case when it was returned by the filter function.

Test the Second Version
===
Finally, test your policy:
```
sentinel test -run=pgp-b.sentinel -verbose
```
All 4 test cases should pass with green output. Additionally, the 3 fail test cases should print violation messages.

If that is not the case, you will need to edit the `require-access-keys-use-pgp-b.sentinel` policy and test the policy again until all 4 test cases pass.
