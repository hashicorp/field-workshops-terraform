---
slug: restrict-vault-auth-methods
type: challenge
title: Exercise 1
teaser: |
  Restrict Vault authentication methods.
notes:
- type: text
  contents: |-
    [Sentinel](https://docs.hashicorp.com/sentinel) allows customers to implement policy-as-code in the same way that Terraform implements infrastructure-as-code.

    The Sentinel Command Line Interface (CLI) allows you to apply and test Sentinel policies including those that use mocks generated from HCP Terraform and Terraform Enterprise plans.

    You should run the **Sentinel CLI Basics** track before starting this track.
- type: text
  contents: |-
    We've launched the Sentinel CLI 0.24.1 on a Ubuntu VM running in GCP so that you don't need to download or install it.

    If you would like to see syntax highlighting in the editor for Sentinel policies, we suggest selecting "ruby" in the language drop-down at the bottom of the editor.

    In this track, you will complete and test policies that have been mostly written for you but have placeholders in angular brackets that you must replace with suitable Sentinel code. When doing this, do not keep the angular brackets, but do keep any quotes that might surround them.
- type: text
  contents: |-
    Please be sure to review all the notes screens before each challenge and to open the links in them in browser tabs outside of the Instruqt UI.

    The information in the notes and links will help you solve the challenges. We're intentionally giving you links instead of the actual information to simulate what you will have to do in the real world.

    When someone asks you to write a Sentinel policy that makes sure all S3 buckets are encrypted, they probably won't tell you which Terraform resource provisions an S3 bucket or which of its attributes determine its encryption. You're going to have to figure these things out on your own by searching for and reading relevant documentation.
- type: text
  contents: |-
    In this challenge, you will write your first Sentinel policy for Terraform.

    We recommend reviewing the [restrict-ec2-instance-type.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/aws/restrict-ec2-instance-type.sentinel) policy and the following slides from the Sentinel-for-Terraform-v4.pptx presentation at this point.
- type: text
  contents: '![Slide 105](../assets/exercise-1/slide-105.png)'
- type: text
  contents: '![Slide 106](../assets/exercise-1/slide-106.png)'
- type: text
  contents: '![Slide 107](../assets/exercise-1/slide-107.png)'
- type: text
  contents: '![Slide 108](../assets/exercise-1/slide-108.png)'
- type: text
  contents: '![Slide 109](../assets/exercise-1/slide-109.png)'
- type: text
  contents: '![Slide 110](../assets/exercise-1/slide-110.png)'
- type: text
  contents: We've made things easier by writing most of the policy for you and by
    providing the test cases and mocks that you need to test it after you complete
    it.
- type: text
  contents: |-
    Your task is to complete and test a Sentinel policy that restricts the Vault authentication methods (backends) provisioned by Terraform's Vault Provider.

    Don't worry if you don't know much about Vault. You'll find what you need in these URLs:
    https://registry.terraform.io/providers/hashicorp/vault/latest/docs/resources/auth_backend
    https://www.vaultproject.io/docs/auth

    If you look at the links for various Vault auth methods under the second of these links, you'll see that the `vault auth enable` command always specifies the auth method type with a single lower-case string identical to or similar to the full name of the auth method. These strings are also what the Terraform Vault Provider uses when creating Vault auth methods.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/restrict-vault-auth-methods/
- title: Sentinel CLI
  type: terminal
  hostname: sentinel
difficulty: basic
timelimit: 3600
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

In this challenge, you will write your first Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that restricts the Vault authentication methods (backends) provisioned by the `vault_auth_backend` resource of Terraform's Vault Provider to the following choices: Azure, Kubernetes, GitHub, and AppRole.

We've made things easier by writing most of the policy for you and by providing the test cases and mocks that you need to test it.
- The policy uses the `find_resources` and `filter_attribute_not_in_list` functions from the `tfplan-functions.sentinel` module in the `/root/sentinel/common-functions/tfplan-functions` directory.
- This module was copied from [tfplan-functions.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/common-functions/tfplan-functions/tfplan-functions.sentinel).

> [!NOTE]
> The import statement uses the alias `plan` for the "tfplan-functions" import to keep lines that use it shorter. This also makes it clear which file the module is derived from.

At this point, we recommend you look at the tree diagram in the [Import Overview](https://www.terraform.io/docs/cloud/sentinel/import/tfplan-v2.html#import-overview) for the `tfplan/v2` import that these functions use.

Terraform and Sentinel documentation often refer to the `attributes` of resources and data sources, but these include two different things:
  - The `arguments` which are the inputs to the resources and data sources and are specified in Terraform code.
  - The `exported attributes` which cannot be set in the Terraform code but are instead returned by the providers that provision the resources or read the data sources.

When you search a Terraform resource or data source document for `attributes` to restrict, you will mostly be interested in its `arguments`.

When referring to an attribute in the `tfplan/v2` import, you have to use the attribute's key in the `after` map of the `change` collection of a resource or data source contained in the `resource_changes` collection. In other words, a policy evaluating attribute "x" with the `tfplan/v2` import ultimately ends up using an expression like `rc.change.after.x`.

In this example, `rc` is an iterator variable defined in a `for` loop or in a `filter` or `all` expression that iterates over a collection of resources. Actual code will often use a different variable. The common functions used in this track and in the hashicorp/terraform-sentinel-policies repository hide a lot of this from you, but it is good to understand what they are doing under the covers.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the Policy
===
1. Open the `restrict-vault-auth-methods.sentinel` policy on the "Policies" tab.
    - You'll see several placeholders in angular brackets throughout the policy.
    - You need to replace those placeholders with suitable Sentinel expressions.
    - In this and the remaining challenges, please do **not** edit the mock files; that would be cheating!

2. Replace `<method1>`, `<method2>`, `<method3>`, and `<method4>` in the `allowed_methods` list with suitable values.
    - If you did not read the second screen while this challenge was loading, we suggest you read it now by clicking on the note icon in the upper right corner and then clicking the right arrow icon.
    - Click the X icon to return to this challenge.
    - Be sure to check the Vault auth method pages to see what the correct values are and note that case matters.

3. Next, you need to replace `<resource_type>` in the call to the "find_resources" method.

4. Next, replace `<attribute>` and `<list>` in the call to the `filter_attribute_not_in_list` function.
    - You can figure out the attribute you want to restrict by reading the [auth_backend](https://registry.terraform.io/providers/hashicorp/vault/latest/docs/resources/auth_backend) documentation.

Examine the Test Cases and Mocks
===
Now open the test cases and mock files on the "Test Cases" tab.
- You'll see that the `fail.hcl` test case refers to the `tfplan-functions.sentinel` module and the `mock-tfplan-fail.sentinel` mock file and expects the main rule to return `false`.
- You'll also see that the `pass.hcl` test case refers to the same module and the `mock-tfplan-pass.sentinel` mock file and expects the main rule to return `true`.

The mock files are simplified versions of mocks generated from plans of HCP Terraform runs done against Terraform code that used the Vault provider to create some auth methods. The key data that determines whether a test case will pass or fail is in the `after` stanza of the `change` stanza of resources under the `resource_changes` collection.

The `mock-tfplan-fail.sentinel` mock file creates instances of the Kubernetes, GitHub, and AWS auth methods; the first two are allowed, but the third is not. The `mock-tfplan-pass.sentinel` mock file creates instances of the Kubernetes, GitHub, and Azure auth methods, all of which are allowed.

Test the Policy
===
Finally, test your policy on the "Sentinel CLI" tab:
```
sentinel test -run=vault -verbose
```
Both test cases should pass with green output. Additionally, the `fail.hcl` test case should print a violation message for the aws auth method.

If both test cases did not pass, or if Sentinel reported errors for specific lines of the policy, fix your policy and try testing it again until both test cases do pass.
