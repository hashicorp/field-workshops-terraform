---
slug: private-module-registry-v1
type: challenge
title: Exercise 5a
teaser: |
  Only allow modules from the Terraform Private Registry (first version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a fifth Sentinel policy for Terraform.

    We recommend reviewing the following slides from the Sentinel-for-Terraform-v4.pptx presentation.
- type: text
  contents: '![Slide 122](../assets/exercise-5a/slide-122.png)'
- type: text
  contents: '![Slide 123](../assets/exercise-5a/slide-123.png)'
- type: text
  contents: '![Slide 124](../assets/exercise-5a/slide-124.png)'
- type: text
  contents: '![Slide 125](../assets/exercise-5a/slide-125.png)'
- type: text
  contents: '![Slide 126](../assets/exercise-5a/slide-126.png)'
- type: text
  contents: We've made things easier by writing most of the policy for you and by
    providing the test cases and mocks that you need to test it. The mocks simulate
    the use of two Azure modules both from the public Terraform Registry and from
    a Terraform Private Registry in an organization on the HCP Terraform server.
- type: text
  contents: |-
    Your task is to complete and test a Sentinel policy that requires that all modules called by the root module come from the [Terraform Private Registry](https://www.terraform.io/docs/cloud/registry/index.html) of a HCP Terraform organization called "Cloud-Operations". You will use the [tfconfig/v2](https://www.terraform.io/docs/cloud/sentinel/import/tfconfig-v2.html) import to do that.

    Since the owners of a HCP Terraform/Terraform Enterprise organization can prevent modules in their PMR from using external modules, requiring the root module to call all modules from the PMR effectively requires that all non-root modules come from the PMR.

    You might find the documentation for Sentinel's [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator) operator and [strings](https://docs.hashicorp.com/sentinel/imports/strings) import useful. You might also want to read about how modules are sourced from private module registries [here](https://www.terraform.io/docs/cloud/registry/using.html).
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/require-modules-from-pmr-a/
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

In this challenge, you will write a fifth Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that requires that all modules loaded by the root module come from the [Terraform Private Registry](https://www.terraform.io/docs/cloud/registry/index.html) of a HCP Terraform organization.

We recommend reviewing this [doc](https://www.terraform.io/docs/cloud/registry/using.html) that describes how to specify the `source` for a module in a Terraform Private Registry on a HCP Terraform or Terraform Enterprise server.

At this point, we recommend you look at the tree diagram in the [Import Overview](https://www.terraform.io/docs/cloud/sentinel/import/tfconfig-v2.html#import-overview) for the `tfconfig/v2` import that the policy uses.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the First Version
===
1. Open the `require-modules-from-pmr-a.sentinel` policy on the "Policies" tab.
    - You'll see several placeholders in angular brackets throughout the policy.
    - You need to replace those placeholders with suitable Sentinel expressions.

Note that this policy uses parameters like the `require-even-number.sentinel` policy did. While the `address` parameter has the default value `app.terraform.io`, the `organization` parameter does not have a default value. However, if you look at the `pass.hcl` and `fail.hcl` test case files on the "Test Cases" tab, you'll see that the value `Cloud-Operations` is assigned to the `organization` parameter in both of them.

2. Replace `<expression_1>` in the `require_modules_from_pmr` function with an expression that gives a list of all module calls.
    - The `for` loop with that expression uses `index` and `mc` to represent the index and data for each of these module calls as it iterates across them.
    - See the [module_calls](https://www.terraform.io/docs/cloud/sentinel/import/tfconfig-v2.html#the-module_calls-collection) section of the `tfconfig/v2` documentation for more details.

We only want the policy to restrict module calls made from the root module. While module calls generally have an index with the form `<module_address>:<name>`, the first part, `<module_address>:`, is ommitted for module calls made from the root module.

3. Accordingly, replace `<condition_1>` with a condition that requires the current module call to have an index that does not contain a colon. There are at least two ways of doing this with the [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator) operator:

    1. The simpler way uses `if index matches "<regex1>"` in which <regex1\> uses `.+` or `(.+)` twice to match one or more characters.
    2. The slightly more complex way uses `if index matches "<regex2>"` in which <regex2\> contains a [negated character class](https://www.regular-expressions.info/charclass.html) and ensures that nothing in it occurs from the beginning (^) to the end ($) of the index.

4. Next, you need to replace `<condition_2>` with a condition that tests if the module call has a `source` from the desired Terraform Private Registry.
    - Since this condition is placed after `not`, the function will print a violation message for modules that are not in the PMR and set the `validated` flag to `false`.
    - While you could use the `matches` operator in your replacement of `<condition_2>`, **please use the `has_prefix` function from Sentinel's [strings](https://docs.hashicorp.com/sentinel/imports/strings) import in your solution**.
    - In general, a well-designed function should not reference things defined outside of it. So, please do not reference the Sentinel parameters, `address` and `organization` from the top of the policy; instead, reference the function's arguments, `tf_address` and `tf_org`.
    - You can use Sentinel's `+` operator to concatenate variables and strings together. In fact, you'll see a useful example in the second violation message.

5. Next, you need to replace `<expression_2>` with an expression that gives the source of the module in the violation message.

6. Now that you've completed the `require_modules_from_pmr` function, you need to call it, replacing `<function>(<arg1>, <arg2>)` with a call to the function that passes in suitable arguments to it.
    - The result is assigned to a boolean variable, `modules_from_pmr` which is evaluated by the `main` rule.
    - This would be a good place to use the Sentinel parameters, `address` and `organization`, defined at the top of the policy.
    - Also, you can concatentate variables and static strings with the `+` operator.

Examine the Test Cases and Mocks
===
Now open the test cases and mock files on the "Test Cases" tab. You'll see that the `fail.hcl` test case refers to the `mock-tfconfig-fail.sentinel` mock file and expects the main rule to return false. You'll also see that the "pass.hcl" test case refers to the `mock-tfconfig-pass.sentinel` mock file and expects the main rule to return true.

As mentioned above, both test case files provide a value for the `organization` parameter. We also could have provided a value for the `address` parameter to override the default value set in the policy. We would do that if using a Terraform Enterprise server instead of the HCP Terraform deployment hosted by HashiCorp.

The mock files are simplified versions of mocks generated from plans of HCP Terraform runs done against Terraform code that used the Azure provider to provision Azure resources including resource groups, network resources, security group resources, and VMs. The `mock-tfconfig-fail.sentinel` mock uses modules from the public [Terraform Registry](https://registry.terraform.io/) while the `mock-tfconfig-pase.sentinel` mock uses modules from a PMR in the "Cloud-Operations" organization on the HCP Terraform server ("app.terraform.io").

Test the First Version
===
Now, you should test your policy on the "Sentinel CLI" tab with this command:
```
sentinel test -run=pmr-a.sentinel -verbose
```
Setting the `-run` argument to `pmr.sentinel` will only match the desired policy and avoid running other policies. Both test cases should pass with green output. Additionally, the fail test case will print messages indicating that the root module of the Terraform configuration called modules that are not from the desired Terraform Private Registry.

If that is not the case, you will need to edit the `require-modules-from-pmr-a.sentinel` policy and test the policy again until both test cases pass.

In the next challenge, you will complete a second version of the policy.
