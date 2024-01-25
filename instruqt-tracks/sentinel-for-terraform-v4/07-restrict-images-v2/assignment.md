---
slug: restrict-images-v2
type: challenge
title: Exercise 4b
teaser: |
  Restrict images used by Google Cloud Platform compute instances (second version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a second version of the fourth Sentinel policy for Terraform.

    We've made things easier by writing most of the policy for you and by providing the test cases and mocks that you need to test it.

    Your task is to complete and test a Sentinel policy that requires Google Cloud Platform (GCP) compute instances provisioned by Terraform's Google Provider to use the public image "debian-cloud/debian-9".
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/restrict-gcp-instance-image-b/
- title: Terminal
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

In this challenge, you will write a second version of the fourth Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that requires Google Cloud Platform (GCP) compute instances provisioned by Terraform's Google Provider to use the public image "debian-cloud/debian-9". In a real-world policy, you would allow multiple images, but we wanted to keep things simple for this exercise.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the Second Version
===
The second version of the policy uses an embedded function, `filter_images`, to validate that evaluated GCP compute instances meet the desired conditions.

1. Open the `restrict-gcp-instance-image-b.sentinel` policy and observe that it also has several placeholders in angular brackets that need to be replaced.

2. Replace `<expression_1>` in the line that assigns a value to the `boot_disk` variable with an expression that gives the data of the `boot_disk` block of the `"google_compute_instance"` resource.
    - For a hint about the structure of your replacement, see line 18 of the `require-access-keys-use-pgp-b.sentinel` policy on the "Policies" tab, but don't bother adding `else null` to your expression.

We use the `types` import to check if `<expression_2>` is a list since we will try to access elements of it in the `else` statement and would get an error if it is not a list (which would be the case if it were missing or `null`). We did not need to check the type of the `boot_disk` block because it is a required block of the resource and therefore cannot be missing.

3. So, please replace `<expression_2>` with an expression that gives the data of the `initialize_params` block of the first map of the `boot_disk` block.
    - Use the `[n].` notation rather than the `.n.` notation that the `evaluate_attribute` function requires.

4. You now need to replace two occurences of `<expression_3>` in the `filter_images` function with a complex expression that refers to the value of the image set in the first `initialize_params` block of the first `boot_disk` block.
    - In addition to specifying the correct attribute of the `initialize_params` block, keep in mind that it needs to be indexed just like `boot_disk` block was indexed. Your replacement for `<expression_3>` should start with what you used when replacing `<expression_2>`.

5. Finally, you need to replace `<add_main_rule>` with a main rule that evaluates the number of GCP compute instances that had violations.
    - This will look very similar to the main rule in your other policies.

Test the Second Version
===
Finally, test your policy on the "Sentinel CLI" tab with this command:
```
sentinel test -run=image-b.sentinel -verbose
```

All 3 test cases should pass with green output. Additionally, the fail test cases will print messages indicating that the image was not defined or invalid.

If that is not the case, you will need to edit the `restrict-gcp-instance-image-b.sentinel` policy and test the policy again until all 3 test cases pass.
