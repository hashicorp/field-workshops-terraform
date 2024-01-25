---
slug: extra-credit
type: challenge
title: Extra Credit
teaser: |
  Prevent auto apply on production workspaces.
notes:
- type: text
  contents: |-
    In this extra credit challenge, you will use the [tfrun](https://www.terraform.io/docs/cloud/sentinel/import/tfrun.html) import to prevent production workspaces from having [Auto Apply](https://www.terraform.io/docs/cloud/workspaces/settings.html#auto-apply-and-manual-apply) enabled.

    We recommend reviewing following slides from the Sentinel-for-Terraform-v4.pptx presentation.
- type: text
  contents: '![Slide 127](../assets/extra-credit/slide-127.png)'
- type: text
  contents: '![Slide 128](../assets/extra-credit/slide-128.png)'
- type: text
  contents: '![Slide 129](../assets/extra-credit/slide-129.png)'
- type: text
  contents: '![Slide 130](../assets/extra-credit/slide-130.png)'
- type: text
  contents: '![Slide 131](../assets/extra-credit/slide-131.png)'
- type: text
  contents: We've made things easier by writing most of the policy for you and by
    providing the test cases and mocks that you need to test it.
- type: text
  contents: |-
    Your task is to complete and test a Sentinel policy that prevents any workspace with a name starting with "prod-" or ending in "-prod" from having the Auto Apply property set to `true`.

    You might find the documentation for Sentinel's [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator) operator and [strings](https://docs.hashicorp.com/sentinel/imports/strings) import useful.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/prevent-auto-apply-in-production/
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

In this extra credit challenge, you will use the [tfrun](https://www.terraform.io/docs/cloud/sentinel/import/tfrun.html) import to prevent production workspaces from having [Auto Apply](https://www.terraform.io/docs/cloud/workspaces/settings.html#auto-apply-and-manual-apply) enabled.

Your task is to complete and test a Sentinel policy that prevents any workspace with a name starting with "prod-" or ending in "-prod" from having the Auto Apply property set to `true`.

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the Policy
===
1. Open the `prevent-auto-apply-in-production.sentinel` policy on the "Policies" tab.
    - Note that it uses the `tfrun` import.

2. Replace `<condition_1>` and `<condition_2>` in the `validate_auto_apply` function with conditions that test if the workspace name starts with "prod-" or ends with "-prod".
    - You will probably want to use Sentinel's [strings](https://docs.hashicorp.com/sentinel/imports/strings) import or [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator) operator as you have done in earlier challenges.
    - If you use the `strings` import, be sure to declare it at the top of the policy.
    - If you use the `matches` operator, note that the comment at the top of the policy gives you regex expressions you can use with it.

3. Replace `<condition_3>` with a condition that tests if the workspace has auto apply enabled.
    - Review the [tfrun](https://www.terraform.io/docs/cloud/sentinel/import/tfrun.html) import's documentation to figure out what to use.

4. You should now replace `<expression_1>` in the `validate_auto_apply` function with an expression that gives the name of the workspace.

Examine the Test Cases and Mocks
===
Please review the test cases and mock files on the "Test Cases" tab. You'll see that there are two fail test cases and two pass test cases with corresponding mocks. These give us fail and test cases for workspace names that start with "prod-" and end with "-prod".

Test the Policy
===
Finally, test your policy:
```
sentinel test -run=auto -verbose
```
All 4 test cases should pass with green output. Additionally, the fail test cases will print violation warnings.

If all 4 test cases did not pass, or if Sentinel reported errors for specific lines of the policy, fix your policy and try testing it again until all 4 test cases do pass.

Congratulations on completing the Sentinel in Terraform track! This is one of the more challenging workshop tracks.  Well done, if you were able to complete all the policies.  And kudos for trying even if you struggled a bit. Perhaps you can go through it a second time and do better?
