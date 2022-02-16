name: d1m5-sentinel-policy-enforcement
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Sentinel for Terraform Workshop (v5)
## <Instructor>

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: tf-section
class: title, smokescreen, shelf
layout: true


background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
background-size: cover

.footer[

- Copyright © 2020 HashiCorp
]

---
layout: true

background-image: url(../images/bkgs/HashiCorp-Content-bkg.png)
background-size: cover

.footer[

- Copyright © 2020 HashiCorp
]

---
name: slide-deck
exclude: true
class: img-left-full

![](../images/laptop.jpg)

<br><br><br>
.center[
Follow along at this link:

## https://git.io/JvSPW
]
---
name: agenda
class: cozy

# Workshop Adgenda

<b>
- Introduction to Sentinel Concepts
- *Lab Challenge 1:* Using Sentinel CLI
- *Lab Challenge 2:* Applying and Testing a Policy with the CLI
- The Sentinel Language
- Key Concepts
- Sentinel Imports and Modules
- Advanced Concepts
- Writing Sentiel Policies and Testing Them
- *Lab Excersise 3-4:* Write and Test more Policies
- Advanced Techniques
- Extra Credit

</b>

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Chapter 1 - Introduction to Sentinel Concepts

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: sentinel-overview
# What is Sentinel

- Sentinel is a **Policy As Code** framework to enable fine-grained, logic-based policy

- *Sentinel is to a Policy Framework as Terraform is to Infrastructure as Code*


- It includes its own language and is embedded in HashiCorp’s Enterprise products.

- It supports fine-grained policies that use conditional logic. For example - "Is this image in the supported images list?"


- It includes a CLI that allows you to test and run policies.

---
name: sentinel-overview2
# What is Sentinel

- Sentinel is enabled as part of your provisioning workflow, ensuring that policies are checked each time Terraform runs
- Policy as Code takes your excel spreadsheets, legal, regulatory requirement documents and individual security best practice knowledge and turns it into Code.

.center[
![:scale 100%](../images/policy in excel.png)
]

- (allowed_types = [”350xlarge”,”289ssmall”,”101xssmall”])

---
name: benefits-of-policy
# Benefits of Policy as Code


- All the same benefits of Infrastructure as Code!
  - Version History, Change Control, Collaboration

- Easily share-able and consumable across multiple organizations and teams in Terraform Cloud

- Can be tested and iterated on in an automated fashion with real test data!*

???

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

---
name: customer-use-cases
# How Customers are Using Sentinel in Terraform

- HashiCorp customers are using Sentinel to enforce security standards:
  - Require all S3 buckets use the private ACL and be encrypted by KMS.
  - Restrict which roles the AWS provider can assume.
  - Prohibit specific resources, data sources, providers, or provisioners.

**# List of allowed providers** <br>
**allowed_list = ["aws", "local", "null", "random", "terraform", "tfe"]**

---
name: customer-use-cases2
# How Customers are Using Sentinel in Terraform

- HashiCorp customers are using Sentinel to avoid excessive costs:
  - Limit the sizes of VMs and Kubernetes clusters in public clouds
  - Limit the monthly spend of each Terraform workspace

- Other
  - Enforce mandatory tags on resources provisioned by Terraform
  - Mandate that all modules come from a Private Module Registry

**# List of allowed resources** <br>
**allowed_list = ["aws_instance", "azurerm_virtualmachine", "google_compute_instance"]**

---
name: what-does-sentinel-not-do
# What Sentinel Does Not Do in Terraform

- Continually check infrastructure to validate compliance
- Remove existing resources that violate policies
- Ensure that resource attributes are valid
  - For instance, Sentinel can validate that a KMS key is specified for an S3 bucket, but not that it is a valid key
  - Can’t check if “SuperLargeBigInstance” is a valid type
- Analyze or limit runtime actions of deployed applications

---
name: where-is-sentinel-used
# Where is Sentinel Used in Terraform?

- **Sentinel Policies** are checked between the standard **plan** and **apply** steps of Terraform runs.
- Policies have different enforcement levels
- Sentinel policies can evaluate the **attributes** of existing and new resources based on information from the current run:
  - the plan, the configuration, the current state, and other run data including cost estimates
- This ensures that resources comply with all policies **before** they are provisioned.

---
name: without-sentinel
# Terraform Without Sentinel

<br>
.center[
![:scale 100%](../images/sentinel-without-workflow.png)
]

---
name: with-sentinel
# Terraform With Sentinel

.center[
![:scale 100%](../images/sentinel-with-workflow.png)
]

---
name: policys-passed
# All Policy Checks Passed

.center[
![:scale 90%](../images/checks-passed.png)
]

---
name: policys-passed2
# All Policy Checks Passed

.center[
![:scale 90%](../images/checks-passed-verbose.png)
]

---
name: enforcement-levels
# Sentinel Policy Enforcement Levels

- **Advisory**
  - Only logs violations
- **Soft Mandatory**
  - Can be overriden by authorized users
- **Hard Mandatory**
  - Cannot be overriden by anyone

- Customers often create new Sentinel policies as Advisory, then transition to Soft Mandatory, and eventually to Hard Mandatory
- This gives Terraform coders time to adapt and modify their code

???

Fix later too annoying

---
name: soft-mandatory
# A Soft Mandatory Policy Check Was Overridden

.center[
![:scale 90%](../images/soft-mandatory.png)
]

---
name: policy-sets
# Sentinel Policy Sets and Policies

- **Policy Sets** are groups of **Sentinel Policies** (and optionally Sentinel Modules)
  - They can be enforced on all workspaces or only on selected workspaces within one or more organizations.
- They are usually created in VCS repositories and then registered with organizations using the Terraform Cloud UI or API.
- Additionally, **Parameters** can be added to policy sets allowing the secure introduction of credentials needed by API endpoints invoked with the Sentinel HTTP import.

---
name: chapter-summary
# Chapter Summary

- Sentinel is Policy as Code framework
- Terraform Cloud automatically runs Sentinel checks between **plan and apply**
- Sentinel has different enforcement levels, **Advisory, Soft and Hard Mandatory**

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Chapter 1 - Complete

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: c1-references
# References

- <a href="https://docs.hashicorp.com/sentinel">Sentinel Documentation</a>
- <a href="https://www.terraform.io/docs/cloud/sentinel/index.html">Terraform Cloud with Sentinel</a>
- <a href="https://github.com/hashicorp/terraform-sentinel-policies">GitHub Repository with Sample Sentinel Policies for AWS, Azure, GCP, and VMware as well as useful common functions in modules</a>
- <a href="http://WritingAndTestingSentinelPoliciesForTerraform-v3.0.pdf">Guide to Writing and Testing Sentinel</a>
- [Introducing Sentinel](https://www.hashicorp.com/sentinel/)
- [Writing and Testing Sentinel - An Indepth Guide](https://www.hashicorp.com/resources/writing-and-testing-sentinel-policies-for-terraform/)

???

Update to all same format please

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Workshop Challenge 1: Using the Sentinel CLI


![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: challenge-one
# Challenge 1: Using the Sentinel CLI

- The hands-on lab exercises of this workshop are done in an interactive learning platform Instruqt

- For this workshop, please use links provided by your instructor for these tracks:
  - Sentinel CLI Basics
  - Sentinel for Terraform v4

- In the first challenge of the first track, you'll learn how to run Sentinel CLI commands.

---
name: instruqt-basics
# Instruqt Basics

- The Instruqt platform organizes training content into Tracks consisting of multiple Challenges that must be solved in a specific order
- Each track launches one or more VMs and/or Docker containers and exposes terminals, file editors, and user interfaces on Tabs
- Information about each challenge is displayed on Note screens while it is loading. A Start Button will be shown when the challenge is ready.
- Detailed instructions are listed in an Assignment to the right of the tabs.
- You can click the Check Button to verify if you have completed the assignment. If you have, you will advance to the next challenge. Otherwise, you will be given a hint about what to do next.
- We recommend you review Instruqt's own tutorial track for more details

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Workshop Challenge 2: Applying and Testing Policies


![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)
---
name: Challenge 2: Applying and Testing Policies

- In the second challenge, you'll learn how to apply and test a simple Sentinel policy with the Sentinel CLI.

- Please continue in your running instance of the Sentinel CLI Basics track by clicking the green Check button.

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Chapter 2 - Sentinel Language Key Concepts


![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: what-do
# What Does Sentinel DO in Terraform?

- Sentinel has the ability to “check” any resources inside Terraform
- Using the concept of ‘imports’ Sentinel can get data from Terraform;
  - Plan
  - Config
  - Run
  - Much much more!

---
name: what-does-it-look-like
# What Does a Sentinel Check Look Like?

.center[
![:scale 80%](../images/show-sentinel.png)
]

---
name: behind-the-scenes
# The Engine Behind the Scenes

.center[
![:scale 100%](../images/sentinel-logic.png)
]

---
name: normal-view
# The UI View

.center[
![:scale 90%](../images/sentinel-check-yes-no.png)
]

---
name: mock-intro
# Sentinel Mocks in Terraform

- Sentinel **Mocks** simulate the data from Terraform plans
  - They can be generated from Terraform Cloud
- **Mocks** can be edited and modified to simulate other data
- They enable testing of Terraform Sentinel policies with the Sentinel CLI.
- Using the Sentinel CLI with mocks speeds up development of new policies since additional plans do not need to be run.

---
name: policy-intro-0
# Sentinel Policy Introduction – Concepts (0)

- Imports
  - Modules and Functions
- Declare criteria to evaluate against
  - Approved images, “Right” ports to use, “allowed” regions
- Find all resources in Terraform to evaluate against
  - Find all images, find all port configurations, find all regions
- Evaluate
- Test
- Print

---
name: policy-intro-1
# Sentinel Policy Introduction – Concepts (1)

.center[
![:scale 100%](../images/policy-intro-1.png)
]

---
name: policy-intro-2
# Sentinel Policy Introduction – Concepts (2)

.center[
![:scale 100%](../images/policy-intro-2.png)
]

---
name: policy-intro-3
# Sentinel Policy Introduction – Concepts (3)

.center[
![:scale 100%](../images/policy-intro-3.png)
]

---
name: policy-intro-4
# Sentinel Policy Introduction – Concepts (4)

.center[
![:scale 100%](../images/policy-intro-4.png)
]

---
name: policy-intro-5
# Sentinel Policy Introduction – Concepts (5)

.center[
![:scale 100%](../images/policy-intro-5.png)
]

---
name: policy-deep-dive
class: compact
# Sentinel Policies Deep Dive
Functions
```
Execute various statements and return a value.
### find_resources ###
	# Find all resources of a specific type using the tfplan/v2 import.
	# Include resources that are not being permanently deleted.
	# Technically, this returns a map of resource changes.
	find_resources = func(type) {
  	resources = filter tfplan.resource_changes as address, rc {
  		rc.type is type and
  		rc.mode is "managed" and
  		(rc.change.actions contains "create" or rc.change.actions contains "update" or
    	 rc.change.actions contains "read" or (rc.change.actions contains "no-op" and
     	rc.change.after is not null))
  	} return resources }
```

???

clean up
---
name: functions-intro
# Sentinel Policies Deep Dive

- OR
  - **Functions**
    - import "tfconfig-functions" as config

---
name: functions-def
class: compact
# Sentinel Functions

- A Sentinel **Function** is declared with the **func** keyword.

```
find_resources = func(resource_type) {
  # Do something and use the parameter
  return true
}
```
- Each function has a name such as **find_resources**.
- Each function can have zero or more parameters.
  - The function above has the single parameter, **resource_type**
- Every function must return a value such as **true**.
- A call to this function could look like:
  - **s3_buckets = find_resources("aws_s3_bucket")**

---
name: builtin-functions
# Builtin Functions

- Sentinel includes some useful **Builtin Functions:**
  - **append**		Appends a value to the end of a list
  - **delete**		Deletes an element from a map
  - **error**	Immediately exit with an error message
  - **keys**		Returns the keys of a map
  - **length**		Returns the length of a collection or string
  - **print**		Prints what you tell it to.  Always returns true.
  - **range**		Returns a list of numbers in a range.
  - **values**		Returns the values of a map.

---
name: reserved-words
class: col-2
# Sentinel Keywords

- all
- any
- as
- break
- case
- continue
- else
- filter
- for
- func
</br>
</br>
</br>
- if
- is
- import
- map
- param
- return
- rule
- when

???

fix later

---
name: chapter-summary
# Chapter Summary

- A basic rule of thumb is that Sentinel policies contain;
  - Imports/Modules/Functions
  - Evaluation Criteria (**Negative or Positive**)
  - A ’Search’ for any resources to test
  - **ONE** main rule
    - **At least one, but could be many**
- Sentinel has built in functions
  - There’s also common functions you can consume!

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Chapter 2 - Complete

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Chapter 3 - Sentinel Imports and Modules

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
name: policy-imports
class: compact
# Sentinel Policy - Imports

- A policy can include imports which enable a policy to access reusable libraries, external data and functions
- Imports enable Sentinel to access External Data
  - Sentinel ships with a set of standard imports
  - For example, the import:json capability allows you to parse and access a JSON document

- The true power in Sentinel is using imports/plugins to make policy decisions on any source of data!
  - Import “http” enables the use of HTTP-accessible data from outside the runtime in Sentinel policy rules.
  - Simply put I can query any URL to use data in Sentinel!

---
name: sentinel-imports
# Standard Sentinel Imports

- Standard Imports
  - base64
  - decimal
  - http
  - json
  - runtime
  - sockaddr
  - strings
  - time
  - types
  - units
  - version

---
name: common-operations
# Common Operations of the Standard Imports

- Check if a string has a prefix: **strings.has_prefix(s, prefix)**
- Check if a string has a suffix: **strings.has_suffix(s, suffix)**
- Check the type of a Sentinel object: **types.type_of(obj)**
- Make external calls to API endpoints: **response = http.get("https://example.hashicorp.com")**
- Convert a JSON object to a Sentinel structure: **json.unmarshal(response.body)**

---
name: imports-in-terraform
# Sentinel Imports in Terraform

- A policy can include imports which enable a policy to access reusable libraries, external data and functions

- Imports are Sentinel’s way of accessing data
- Remember that Sentinel is embedded across HashiCorp’s Enterprise tools
  - Cool hint: if you’re using more than one HashiCorp product you could get Sentinel data from them!

- Terraform Cloud provides four imports to define policy rules for the plan, configuration, state, and run associated with a policy check

---
name: imports-in-terraform-2
class: compact
# Sentinel Imports in Terraform

- **tfplan/v2**
  - gives data generated from Terraform plans

- **tfconfig/v2**
  - gives data about the Terraform configuration

- **tfstate/v2**
  - gives data about the current state of a workspace

- **Tfrun**
  - gives metadata for Terraform runs and their workspaces as well as cost estimate data

---
name: types-of-policies
class: compact
# Types of Terraform Sentinel Policies

There are essentially four types of Terraform Sentinel policies corresponding to the 4 Terraform Sentinel imports:
- Policies can use the tfplan/v2 import to restrict specific attributes of specific resources and data sources in the current Terraform plan.
- Policies can use the tfconfig/v2 import to restrict the configuration of Terraform modules, variables, resources, data sources, providers, provisioners, and outputs.
- Policies can use the tfstate/v2 import to check whether previously provisioned resources or data sources have attributes with values that are no longer allowed.
- Policies can use the tfrun import to check workspace and run metadata and whether cost estimates for planned resources are within limits.
  - Some policies might use more than one of these imports.

---
name: sentinel-modules
# Sentinel Modules

- Modules allow you to re-use Sentinel code as an import
  - import “tfplan-functions”

- Sentinel modules are registered in Sentinel CLI configuration files and in TFC/TFE policy set configuration files

- There are some AMAZING getting starting Modules available in GitHub!
  - **Example**
  - **find_resources_by_provider** and **find_datasources_by_provider** functions that find resources or data sources for a specific provider

---
name: chapter-summary
# Chapter Summary

- Sentinel contains imports that allow it to access external data
- In Terraform we use these imports to access **Plan, Config, State and Run Data!**
- Sentinel makes use of **Modules** to make use of **Functions** in a repeatable way!
  - There’s lots of re-usable Modules and Functions available on GitHub to get started!

---
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-assets/assets/bkgs/HashiCorp-Title-bkg.jpeg)
count: false

# Chapter 3 - Complete

![:scale 10%](https://hashicorp.github.io/field-workshops-assets/assets/logos/logo_terraform.png)

---
