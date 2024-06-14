---
slug: terraform-add-a-variable
type: challenge
title: "\U0001F5FC Change Your Location"
teaser: |
  Terraform is flexible enough to deploy infrastructure anywhere in the world. You can easily provision your applications in different geographical regions by simply changing a single variable.
notes:
- type: text
  contents: |-
    You can override any variable defined in the "variables.tf" file by setting it in your personal `terraform.tfvars` file.

    In this challenge, you will pick the location where your Azure resources should be deployed.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-azure
difficulty: basic
timelimit: 10670
---
In the previous challenge we set our `prefix` variable in the "terraform.tfvars" file. Let's set another variable that will determine the location where your Azure infrastructure will be deployed.

First run another plan so you'll be able to compare what happens after you change the location.

```
terraform plan
```

Choose an Azure location near to you but different from the default one which is "eastus". Add a `location` variable to your "terraform.tfvars" file, setting it to your desired location such as `East US`, `UK South`, or `Southeast Asia`. You can also use shorter names like `eastus`, `uksouth`, or `southeastasia`; in fact, Terraform will convert the longer names with spaces to the shorter names without them.

See this [page](https://azure.microsoft.com/en-us/global-infrastructure/geographies/) for a list of valid Azure locations (which shows the longer names with spaces).

Choosing a location close to you can help improve speed and performance.

(**Note that not all Azure regions support all VM types**; if you get an error about the SKU failing because of capacity restrictions when you run the Terraform commands below, try changing to a different region.)

**Be sure to click the disk icon above the file to save your change!**

Once you've set your location variable try running `terraform plan` again. What's different this time?

Remember that you can set values for any variable declared in your "variables.tf" file in the "terraform.tfvars" file.