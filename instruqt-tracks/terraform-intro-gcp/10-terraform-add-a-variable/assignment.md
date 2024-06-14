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

    In this challenge, you will pick the location where your GCP resources should be deployed.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-gcp
difficulty: basic
timelimit: 10000
---
In the previous challenge we set our `prefix` variable in the "terraform.tfvars" file. Let's set two more variables that will determine the location where your GCP infrastructure will be deployed.

First run another plan so you'll be able to compare what happens after you change the location.

```
terraform plan
```

Choose a GCP region near you but different from the default one which is "us-central1". Add `region` and `zone` variables to your "terraform.tfvars" file, setting them to your desired region and one of its zones.

See this [page](https://cloud.google.com/compute/docs/regions-zones) for a list of regions and zones. For regions, strip off the `-a`, `-b`, or `-c` from the zones listed on that page.

Choosing a region close to you can help improve speed and performance.

**Be sure to click the disk icon above the file to save your change!**

Once you've set your `region` and `zone` variables, try running `terraform plan` again. What's different this time?

Remember that you can set values for any variable declared in your "variables.tf" file in the "terraform.tfvars" file.