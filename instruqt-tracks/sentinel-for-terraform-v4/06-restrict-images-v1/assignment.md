---
slug: restrict-images-v1
type: challenge
title: Exercise 4a
teaser: |
  Restrict images used by Google Cloud Platform compute instances (first version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a fourth Sentinel policy for Terraform.

    You will learn how to evaluate an attribute that is contained in a block contained in another block of a resource. A block is treated by Sentinel as a list of maps. We recommend reviewing the following slides from the Sentinel-for-Terraform-v4.pptx presentation.
- type: text
  contents: '![Slide 117](../assets/exercise-4a/slide-117.png)'
- type: text
  contents: '![Slide 118](../assets/exercise-4a/slide-118.png)'
- type: text
  contents: '![Slide 119](../assets/exercise-4a/slide-119.png)'
- type: text
  contents: '![Slide 120](../assets/exercise-4a/slide-120.png)'
- type: text
  contents: '![Slide 121](../assets/exercise-4a/slide-121.png)'
- type: text
  contents: We've made things easier by writing most of the policy for you and by
    providing the test cases and mocks that you need to test it.
- type: text
  contents: |-
    Your task is to complete and test a Sentinel policy that requires Google Cloud Platform (GCP) compute instances provisioned by Terraform's Google Provider to use the public image "debian-cloud/debian-9".

    Don't worry if you don't know much about GCP. You can look at the [Google Provider](https://registry.terraform.io/providers/hashicorp/google/latest/docs) documentation to find the relevant GCP resource. (Be sure to pick a resource and not a data source with the same name.)

    You might also find the documentation for Sentinel [lists](https://docs.hashicorp.com/sentinel/language/lists), [maps](https://docs.hashicorp.com/sentinel/language/maps), and the standard [types](https://docs.hashicorp.com/sentinel/imports/types) import useful.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/restrict-gcp-instance-image-a/
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

In this challenge, you will write a fourth Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that requires Google Cloud Platform (GCP) compute instances provisioned by Terraform's Google Provider to use the public image "debian-cloud/debian-9". In a real-world policy, you would allow multiple images, but we wanted to keep things simple for this exercise.

We've made things easier by writing most of the policy for you and by providing the test cases and mocks that you need to test it. The policy uses the "find_resources" function from the `tfplan-functions.sentinel` module in the `/root/sentinel/common-functions/tfplan-functions` directory.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the First Version
===
1. Open the `restrict-gcp-instance-image-a.sentinel` policy on the "Policies" tab.
    - You'll see several placeholders in angular brackets throughout the policy.
    - You need to replace those placeholders with suitable Sentinel expressions.

2. Replace `<resource_type>` in the call to the `find_resources` function with the correct resource type from the Google provider.

Now that you have found the documentation page for the resource you are restricting, you can determine the specific attribute that is used to set the image on a Google compute instance. This attribute is nested inside one block which is itself contained in a second block. Each of these blocks can only occur once.

In Sentinel, a block is treated as a list of maps. Additionally, lists are indexed starting with 0. We would use the expression, `x[0].y[0].z`, to refer directly to the attribute `z` of the first map inside the `y` block of the first map inside the `x` block of a resource. However, the `evaluate_attribute` function called by the `filter_attribute_is_not_value` function expects an expression like `x[0].y[0].z` to be given as `x.0.y.0.z`.

3. You now need to replace `<expression_1>` in the `restrict-gcp-instance-image-a.sentinel` policy with a reference to the attribute that represents the image of a Google compute instance.
    - Use an expression like the final one given in the last paragraph.

4. Next, you need to replace `<expression_2>` in the `restrict-gcp-instance-image-a.sentinel` policy with an expression that gives the number of GCP compute instances with violations.
    - This expression will be similar to expressions that have been assigned to the `violations` variable in earlier exercises.

Examine the Test Cases and Mocks
===
Now open the test cases and mock files on the "Test Cases" tab.

You'll see that the test cases, `fail-invalid-image.hcl` and `fail-no-initialize-params.hcl`, refer to the `mock-tfplan-fail-invalid-image.sentinel` and `mock-tfplan-fail-no-initialize-params.sentinel` mock files respectively and expect the main rule to return `false`.

You'll also see that the test case, `pass.hcl`, refers to the `mock-tfplan-pass.sentinel` mock file and expects the main rule to return `true`. All 3 test cases also refer to the `tfplan-functions.sentinel` module.

The mock files are simplified versions of mocks generated from plans of HCP Terraform runs done against Terraform code that used the Google provider to create a GCE compute instance. The `mock-tfplan-fail-no-initialize-params.sentinel` mock file was generated from a Terraform configuration that first generated a GCE compute disk and then created a GCE compute instance from it, avoiding the need to use the `initialize_params` block of the compute instance resource. The other two mocks created the compute instance resource directly from standard images.

Test the First Version
===
Now, you should test your policy on the "Sentinel CLI" tab with this command:
```
sentinel test -run=image-a.sentinel -verbose
```
Setting the `-run` argument to `image-a.sentinel` will only match the desired policy and avoid running other policies. All 3 test cases should pass with green output. Additionally, the fail tests will print messages indicating that an image was either not defined or not allowed.

If that is not the case, you will need to edit the `restrict-gcp-instance-image-a.sentinel` policy and test the policy again until all 3 test cases pass.

In the next challenge, you will complete a second version of this policy.
