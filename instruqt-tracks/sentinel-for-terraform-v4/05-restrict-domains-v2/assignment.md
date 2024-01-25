---
slug: restrict-domains-v2
type: challenge
title: Exercise 3b
teaser: |
  Restrict domains of AWS Certificate Manager (ACM) Certificates (second version).
notes:
- type: text
  contents: |-
    In this challenge, you will write a second version of a third Sentinel policy for Terraform.

    We recommend reviewing the following slides from the Sentinel-for-Terraform-v4.pptx presentation.
- type: text
  contents: '![Slide 031](../assets/exercise-3b/slide-031.png)'
- type: text
  contents: '![Slide 041](../assets/exercise-3b/slide-041.png)'
- type: text
  contents: In this exercise, you will write your own function and use the [tfstate/v2](https://www.terraform.io/docs/cloud/sentinel/import/tfstate-v2.html)
    import and the [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator)
    operator.
tabs:
- title: Policies
  type: code
  hostname: sentinel
  path: /root/sentinel/
- title: Test Cases
  type: code
  hostname: sentinel
  path: /root/sentinel/test/restrict-acm-certificate-domains-b/
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

In this challenge, you will write a second version of the third Sentinel policy for Terraform.

The policy will require that all AWS Certificate Manager (ACM) Certificates referenced by a data source in Terraform's AWS Provider have domains that are subdomains of "hashidemos.io".

> [!NOTE]
> At any point while solving the challenge, you can click the green "Check" button to get a hint suggesting something that you still need to do.

Complete the Second Version
===
The second version of the policy uses an embedded function, `validate_certs`, to validate that evaluated ACM certs meet the desired conditions. Accordingly, please open the `restrict-acm-certificate-domains-b.sentinel` policy and observe that it also has several placeholders in angular brackets that need to be replaced.

Note that the `validate_certs` function uses a different approach than was used in exercises 1 and 2. Instead of creating a list of resources that violate some condtion, it uses a boolean variable, `validated`, that is initially set to `true`, iterates over all resources passed to it, and sets `validated` to `false` if there are any violations. It returns the value of the `validated` variable. The main rule of the policy then checks whether it returns `true` or `false`.

1. Open the `restrict-acm-certificate-domains-b.sentinel` policy on the "Policies" tab.

2. Start your modifications by replacing `<expression>` with an expression that will assign the value of the current certificate's domain to the `domain` variable.
    - If you're unsure what to use, look at your completed `restrict-acm-certificate-domains-a.sentinel` policy.

3. You now need to replace `<condition>` in the definition of the `validate_certs` function with a condition that checks that the domain of the ACM certificate set in the `domain` variable is a subdomain of the `parent_domain` argument of the function.
    - We would like you to use the [matches](https://docs.hashicorp.com/sentinel/language/spec/#matches-operator) operator.

4. Now that you've completed the `validate_certs` function, you need to call it, replacing `<regex>` with a regular expression that ensures that the domains of the ACM certificates contained in the `allACMCerts` list end in ".hashidemos.io".

Test the Second Version
===
Finally, test your policy on the "Sentinel CLI" tab with this command:
```
sentinel test -run=domains-b.sentinel -verbose
```

Both test cases should pass with green output. Additionally, they will both print messages indicating whether domains were valid or not.

If that is not the case, you will need to edit the `restrict-acm-certificate-domains-b.sentinel` policy and test the policy again until both test cases pass.
