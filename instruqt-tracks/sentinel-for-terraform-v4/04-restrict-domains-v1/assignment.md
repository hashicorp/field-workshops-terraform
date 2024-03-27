---
slug: restrict-domains-v1
type: challenge
title: Exercise 3a
teaser: |
  Restrict domains of AWS Certificate Manager (ACM) Certificates (first version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a third Sentinel policy for Terraform.

    We recommend reviewing the following slides from the Sentinel-for-Terraform-v4.pptx presentation.
- type: text
  contents: '![Slide 113](../assets/exercise-3a/slide-113.png)'
- type: text
  contents: '![Slide 114](../assets/exercise-3a/slide-114.png)'
- type: text
  contents: '![Slide 115](../assets/exercise-3a/slide-115.png)'
- type: text
  contents: '![Slide 116](../assets/exercise-3a/slide-116.png)'
- type: text
  contents: We've made things easier by writing most of the policy for you and by
    providing the test cases and mocks that you need to test it.
- type: text
  contents: |-
    Your task is to complete and test a Sentinel policy that requires that all AWS Certificate Manager (ACM) Certificates referenced by a data source in Terraform's AWS Provider have domains that are subdomains of "hashidemos.io". (This means the domains must end in ".hashidemos.io".)

    As in Exercise 2, you can look at the [AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs) documentation to search for the relevant data source.

    You can use the filter link at the top of the left-hand menu on that page to search for a data source that has "acm". Click on it to see what attributes are available for it.

    You might also find the documentation for the Sentinel [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator) operator useful.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/restrict-acm-certificate-domains-a/
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

In this challenge, you will write a third Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that requires that all AWS Certificate Manager (ACM) Certificates referenced by a data source in Terraform's AWS Provider have domains that are subdomains of "hashidemos.io".

The policy uses the "find_datasources" function from the "tfstate-functions.sentinel" module in the /root/sentinel/common-functions/tfstate-functions directory. This module was copied from [tfstate-functions.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/common-functions/tfstate-functions/tfstate-functions.sentinel).

Note that the import statement uses the alias `state` for the "tfstate-functions" import to keep lines that use it shorter. This also makes it clear which file the module is derived from.

At this point, we recommend you look at the tree diagram in the [Import Overview](https://www.terraform.io/docs/cloud/sentinel/import/tfstate-v2.html#import-overview) for the `tfstate/v2` import.

When referring to an attribute in the `tfstate/v2` import, you have to use the attribute's key in the `values` map of a resource or data source contained in the import's `resources` collection. So, a policy evaluating attribute "x" with the `tfstate/v2` import ultimately ends up using an expression like `r.values.x`. (Recall that the `tfplan/v2` import uses an expression like `rc.change.after.x`.)

In this example, `r` is an iterator variable defined in a `for` loop or in a `filter` or `all` expression that iterates over a collection of resources. Actual code will often use a different variable. Of course, the common functions used in this track and in the hashicorp/terraform-sentinel-policies repository hide a lot of this from you, but it is good to understand what they are doing under the covers.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the First Version
===
1. Open the `restrict-acm-certificate-domains-a.sentinel` policy on the "Policies" tab.
    - You'll see several placeholders in angular brackets throughout the policy.
    - You need to replace those placeholders with suitable Sentinel expressions.

2. Replace `<data_source_type>` in the call made to the `find_datasources` function in the `restrict-acm-certificate-domains-a.sentinel` policy with a suitable data source type from the AWS provider.
    - If you did not read the second screen while this challenge was loading, we suggest you read it now by clicking on the note icon in the upper right corner and then clicking the right arrow icon.
    - Click the X icon to return to the challenge.

Now that you have found the documentation page for the data source you are restricting, you can determine the specific attribute that is used to set the domain on an ACM certificate.

3. Please replace `<attribute>` in the `restrict-acm-certificate-domains-a.sentinel` policy with that attribute.

4. You next need to replace `<expression>` with a suitable expression representing the value of the domain.
    - By this point, the right expression should already be in your policy.

Examine the Test Cases and Mocks
===
Now open the test cases and mock files on the "Test Cases" tab. You'll see that the `fail.hcl` test case refers to the `tfstate-functions.sentinel` module and the `mock-tfstate-fail.sentinel` mock file and expects the main rule to return `false`. You'll also see that the `pass.hcl` test case refers to the same module and the `mock-tfstate-pass.sentinel` mock file and expects the main rule to return `true`.

The mock files are simplified versions of mocks generated from plans of HCP Terraform runs done against Terraform code that used the AWS provider to retrieve information from two AWS ACM certificates.

Test the First Version
===
Now, you should test your policy on the "Sentinel CLI" tab with this command:
```
sentinel test -run=domains-a.sentinel -verbose
```
Setting the `-run` argument to `domains-a.sentinel` will only match the desired policy and avoid running other policies. Both test cases should pass with green output. Additionally, they will both print messages indicating whether domains were valid or not.

If that is not the case, you will need to edit the `restrict-acm-certificate-domains-a.sentinel` policy and test the policy again until both test cases pass.

In the next challenge, you will complete a more complex version of the same policy.
