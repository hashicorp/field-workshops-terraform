---
slug: private-module-registry-v2
type: challenge
title: Exercise 5b
teaser: |
  Only allow modules from the Terraform Private Registry (second version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a second version of the fifth Sentinel policy for Terraform.

    You will also move the `require_modules_from_pmr` function you wrote in the last challenge into a module and then call it from the second version of the policy.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/require-modules-from-pmr-b/
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

In this challenge, you will write a second version of the fifth Sentinel policy for Terraform.

Your task is to complete and test a Sentinel policy that requires that all modules loaded by the root module come from the [Terraform Private Registry](https://www.terraform.io/docs/cloud/registry/index.html) of a HCP Terraform organization.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the Second Version
===
- In this challenge, we would like you to move your completed `require_modules_from_pmr` function into the file, `module-functions.sentinel`, so that it can be called by other policies as a Sentinel module.

- We then want you to modify the `require-modules-from-pmr-b.sentinel` policy to call the function from that file.

Here are the steps you should follow:

  1. Copy the entire `require_modules_from_pmr` function to the bottom of the `module-functions.sentinel` file that is in the `/root/sentinel/common-functions/module-functions` directory.

  2. Replace `<import_statement>` in the `require-modules-from-pmr-b.sentinel` policy with a suitable import statement that will allow that policy to call the function from the `module-functions.sentinel` file.
      - We recommend that you look at the test cases to see the name they are using for the module that points at that file. **Please use the alias `modules`.**

  3. Replace `<function_call>` with a call to the `require_modules_from_pmr` function in the module referenced by the import statement you just added.
      - Be sure to include two suitable arguments in the function call.

Examine the Test Cases and Mocks
===
Now open the test cases and mock files on the "Test Cases" tab. These are like the ones in the previous challenge, but both test cases also refer to the `module-functions.sentinel` module that you just wrote.

Test the Second Version
===
Finally, test your policy on the "Sentinel CLI" tab with this command:
```
sentinel test -run=pmr-b.sentinel -verbose
```

Both test cases should pass with green output. Additionally, the fail test case will print messages indicating that the root module of the Terraform configuration called modules that are not from the desired Terraform Private Registry.

If that is not the case, you will need to edit the `require-modules-from-pmr-b.sentinel` policy and test the policy again until both test cases pass.
