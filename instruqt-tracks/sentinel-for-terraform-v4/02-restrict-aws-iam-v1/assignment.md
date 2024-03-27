---
slug: restrict-aws-iam-v1
type: challenge
title: Exercise 2a
teaser: |
  Restrict AWS IAM access keys (first version).
notes:
- type: text
  contents: |-
    In this challenge, you will write the first version of a second Sentinel policy for Terraform.

    We recommend reviewing the following slides from the Sentinel-for-Terraform-v4.pptx presentation at this point.
- type: text
  contents: '![Slide 111](../assets/exercise-2a/slide-111.png)'
- type: text
  contents: '![Slide 112](../assets/exercise-2a/slide-112.png)'
- type: text
  contents: |-
    We've made things easier by writing most of the policy for you and by providing the test cases and mocks that you need to test it.

    Your task is to complete and test a Sentinel policy that requires that all AWS IAM access keys provisioned by Terraform's AWS Provider include a PGP key.
- type: text
  contents: |-
    Don't worry if you don't know much about AWS. You can find the information you need in this URL: https://registry.terraform.io/providers/hashicorp/aws/latest/docs

    You can use the filter link at the top of the left-hand menu on that page to search for resources that have "access". There is only one good match that also has "key". Click on it to see what attributes are available for it.

    You'll also find the documentation for the [strings](https://docs.hashicorp.com/sentinel/imports/strings) import useful.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/require-access-keys-use-pgp-a/
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

In this challenge and the next, you will write a second Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that requires that all AWS IAM access keys provisioned by Terraform's AWS Provider include a PGP key that starts with "keybase:". This means that a specific attribute on a specific resource of that provider must start with "keybase:".

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the First Version
===
1. Open the `require-access-keys-use-pgp-a.sentinel` policy on the "Policies" tab.
    - You'll see several placeholders in angular brackets throughout the policy.
    - You need to replace those placeholders with suitable Sentinel expressions.

2. Replace `<resource_type>` in the call to the `find_resources` function in the `require-access-keys-use-pgp-a.sentinel` policy with a suitable resource type from the AWS provider.
    - If you did not read the second screen while this challenge was loading, we suggest you read it now by clicking on the note icon in the upper right corner and then clicking the right arrow icon.
    - Click the X icon to return to the challenge.

Now that you have found the documentation page for the resource you are restricting, you can determine the specific attribute that is used to set a PGP key on an AWS IAM access key.

3. Replace `<attribute>` with that attribute in the call to the `filter_attribute_does_not_have_prefix` function in the `require-access-keys-use-pgp-a.sentinel` policy.

The `filter_attribute_does_not_have_prefix` function in the `tfplan-functions.sentinel` module does the following things:
  * Iterates over all resources in the list passed to it.
  * Calls the `evaluate_attribute` function to evaluate the value of the specified attribute for the current resource and uses the `else null` expression to convert the `undefined` value into `null` to cover the case that the resource did not have the attribute defined.
  * Checks if the value is `null`.
  * Uses the boolean expression `not strings.has_prefix(v, prefix)` to determine if the attribute does not start with the prefix (which in our case is "keybase:").
  * Adds violating resources to the `violators` map and corresponding violation messages to the `messages` map.
  * If `prtmsg` is `true`, prints warning messages for violators.
  * Returns a map with the `violators` and `messages` maps and their common length.

Understanding this code will help you complete the `require-access-keys-use-pgp-b.sentinel` policy in the next challenge after you successfully complete and test the `require-access-keys-use-pgp-a.sentinel` policy.

4. You now need to replace `<condition>` in the `main` rule of the `require-access-keys-use-pgp-a.sentinel` policy with a condition that will make the rule return `true` when there are no violations.
    - You have already seen the condition in the slides and in exercise 1.

Examine the Test Cases and Mocks
===
Open the test cases and mock files on the "Test Cases" tab. You'll see that we've actually included 3 fail test cases with 3 corresponding mock files.

Using multiple fail test cases allows us to test multiple ways in which a policy could fail. In this case, we're testing the attribute of interest to see if it is `null`, missing, or has an invalid value that does not start with "keybase:".

All 3 fail test cases expect the main rule to return `false`. Of course, we've also included a pass test case and a corresponding mock file that does include the desired attribute with an allowed value. The pass test case expects the main rule to return `true`.

The mock files are simplified versions of mocks generated from plans of HCP Terraform runs done against Terraform code that used the AWS provider to create an AWS IAM access key.

Test the First Version
===
Now, you should test your policy with this command on the "Sentinel CLI" tab:
```
sentinel test -run=pgp-a.sentinel -verbose
```
Setting the `-run` argument to `pgp-a.sentinel` will only match the desired policy and avoid running any other policies. All 4 test cases should pass with green output. Additionally, the 3 fail test cases should print violation messages.

If that is not the case, you will need to edit the `require-access-keys-use-pgp-a.sentinel` policy and test the policy again until all 4 test cases pass.

In the next challenge, you'll complete a more complex version of the policy.
