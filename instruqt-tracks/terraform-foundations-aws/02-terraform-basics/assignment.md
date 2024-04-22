---
slug: terraform-basics
type: challenge
title: "\U0001F4D8 Terraform Basics"
teaser: |-
  In this challenge we will learn about...

  ◉ Modifying Existing Resources

  ◉ Adding Additional Resources

  ◉ Variables
notes:
- type: text
  contents: |
    So far we've learned the basic Terraform CLI commands and how to deploy a VPC. Next, we will look at modifying our existing VPC and adding additional
    resources. We will also cover variables and interpolation.
tabs:
- title: Code Editor
  type: service
  hostname: tf-foundations
  port: 8443
- title: Terminal
  type: terminal
  hostname: tf-foundations
- title: Slides
  type: website
  url: https://hashicorp.github.io/field-workshops-terraform/slides/multi-cloud/hcp-terraform/tf-basics/#2
- title: AWS VPC
  type: website
  url: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc
  new_window: true
- title: AWS Subnet
  type: website
  url: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet
  new_window: true
- title: AWS Variables
  type: website
  url: https://www.terraform.io/docs/configuration/variables.html
  new_window: true
- title: Interpolation
  type: website
  url: https://www.terraform.io/docs/configuration-0-11/interpolation.html
  new_window: true
difficulty: basic
timelimit: 5000
---
<ins>**Modifying Existing Resources**</ins>

Now that we have an existing VPC, what happens if we need to add or change something? In our example, no tags were added to our VPC. These are going to
be needed to label our resources by environment and to provide resources names. Before we add these additional parameters, run a plan again and review the
output.

Run the `terraform plan` command:
```
terraform plan
```
You should have received a **No Changes. Infrastructure is up-to-date** message. Terraform does not operate like a traditional script, which would have
created another VPC. Terraform keeps track of the state of the infrastructure that it creates and makes changes based on what is declared in your template.

With our VPC already created and our Terraform plan reporting that our configuration and state is consistent with what is in AWS, let's add resource tags.
Please reference the `AWS VPC` tab for reference material.

Add the following tags to your VPC
```
"Name" = "tflabs-vpc"
"environment" = "development"
```

Run the `terraform plan` command:
```
terraform plan
```
The output will report that there is **1 to change** resource. You should notice some key details in this output. **~ update in-place**
reports that we will be updating our existing VPC we created. The tilde represents a resource about to be changed. The green plus will
indicate what is being added. In our case, you should see a green plus for each tag that was added.

These are expected changes so let's continue with our `terraform apply` command:
```
terraform apply -auto-approve
```

The output will indicate that your apply was completed and 1 resource was changed. Let's confirm that we have new tags on our VPC in AWS by
running the AWS CLI command again.

Run the following aws cli command or review the VPC tags in the console.
```
aws ec2 describe-vpcs --region us-east-2
```
The output will show the VPC configuration details from the AWS API. This is what is currently in AWS and should contain your added resource
tags.

<ins>**Adding Additional Resources**</ins>

Congratulations, we now have a VPC with two resource tags in AWS. There's not much we can do with that but it's starting the foundation of
all the other resources we can deploy in AWS.

Next, we are going to add a subnet resource by adding an additional resource block for aws_subnet.

Adding additional resources will be identical to how we modified our VPC tags previously. We would create an additional resource block with
the required, and optional, parameters that we want. There is also a concept of interpolation that becomes important to understand.

So, what is "Interpolation"?

If you recall from our previous plan outputs, there are some resource parameters that report "(known after apply)". An example of this is the
VPC ID from AWS. We won't know what the VPC ID is until after the VPC gets created. So, how would you attach a subnet to a VPC ID without
knowing the VPC ID?  You would need to reference what the VPC ID is going to be after the VPC is created.

Let's dive into this concept and create a new subnet in the VPC that we created previously. We have added an additional Instruqt tab for the
`aws_subnet` resource documentation. Please review the documentation to determine which parameters are required to create a aws_subnet. We
will also want to continue to tag our resource as we did with our VPC.

You should have noticed that `vpc_id` is a required parameter. We need to define what VPC our subnet will be part of. We will use
interpolation to set this value. There are a few ways to do this. You can review the documentation and examples, which in most cases will
provide the required guidance. Currently, we have our VPC already created and a state file that is in-sync. We can use this to determine
what attributes are available through interpolation.

Open a terraform console
```
terraform console
```
This command will drop you into a different prompt. We know that our VPC resource is of resource type `aws_vpc` and the arbitrary name we assigned
is `tflabs`. We can use this information to query the current state file for what attributes are available.

Query available parameters of our VPC
```
aws_vpc.tflabs
```
The output of this command will list all the attributes that we can use through interpolation. Since a VPC ID is required for our subnet we
plan to create, you should notice that as an option. You can also query that attribute directly in the terraform console.

Query the VPC ID in terraform console
```
aws_vpc.tflabs.id
```
This output will be just the VPC ID. This is what we will use to set our VPC ID on our new subnet. Please continue to define your aws_subnet
resource using interpolation for the `vpc_id`. There will be one more required parameter that is required and don't forget to add your resource
tags. Tags are not required but is a best practice and a good habit to get into.

You can now exit the terraform console by typing `exit` and pressing enter:
```
exit
```
Once you have your aws_subnet resource defined, run the terraform plan and apply as you have done a few times already.
```
terraform plan
```
You should take notice of the output and verify that you approve what the apply will do. You should see `1 to add` resource, that our vpc_id is
populated with the existing VPC we created and that our tags are listed. If those are as you expect them, you can run the apply step.
```
terraform apply -auto-approve
```
At this point, you've probably noticed a rinse and repeat type pattern. This can be a good way to incrementally build a template and troubleshoot
problems on the way. You could define the entire template first and run less plan and applies. Either approach is acceptable and up to personal
preference.

Now that we covered how to create our infrastructure with Terraform, we can now destroy what we have done so far and move on to variables.
```
terraform destroy -auto-approve
```

[<ins>**Declaring and Using Input Variables**</ins>](https://www.terraform.io/docs/configuration/variables.html)

In our previous template we have been setting parameters directly in our Terraform template. This could work through the entire template but
hard-coding parameters makes our code less portable between environments and harder to share publicly. We would prefer to set settings that
would mutate between environments with variables. This allows us to use the same Terraform template between environments without modifying the
code directly. Now, we can have confidence that our environments are identical in configuration. The inputted variables define the
required specific settings for the targeted environments. We can continue to use interpolation to leverage variables that we've set.

Let's take a look at our current resources we've defined. There are settings that we have hardcoded that we would want to change if we wanted to run this
in multiple environments. The region, CIDR blocks and environment tag would need to change but if we had anything over just a few resources,
changing these parameters on every resource would be time consuming and adds the risk of human error.

We have added some additional files to your project for you. We will start with declaring the variables. Uncomment the variable blocks by removing
the hashtags below the "Uncomment" message in `variables.tf`. You can set data types, default values and descriptions for these variables
in this file. After we declare the variables that our template requires, we can update the `terraform.tfvars` with the values that we want to
assign to those variables. We have left the prefix variable for you to just uncomment but feel free to set additional values for the environment,
region, vpc_cidr and subnet_cidr. These values will override what you set as default values in the `variables.tf`.

Once we have our variables declared and the values defined, we can use those variables in our template in place of those hardcoded values. Our
new variables would be in a `var.<var_name>` format. For example, you can now set your aws_vpc cidr_block value to...
```
var.vpc_cidr
```
Set the rest of the values in our current project using their defined variables.

We can also add variables to a string. If we wanted to prefix or append a value to an existing string to make it unique, we could do that with our
prefix variable that we set. For instance, if you wanted to prefix your "Name" tag on your subnet, you could do the following. Since this includes
the string, be sure to keep it in quotes.
```
"${var.prefix}-subnet"
```
Update the rest of your parameters with your new variables and run another plan and apply to recreate the defined resources with the variables that
you've set.
```
terraform plan
terraform apply -auto-approve
```
