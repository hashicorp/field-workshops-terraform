---
slug: api-driven-workflows
id: srbdhf4xf3rj
type: challenge
title: "\U0001F517 API Driven Workflows"
teaser: |
  HCP Terraform has a fully featured RESTful API that you can use to integrate with external systems. Where we're going, we don't need a GUI!
notes:
- type: text
  contents: "You've mostly been using the HCP Terraform Web UI and command line interface
    (CLI) to build infrastructure. The devops team needs to integrate with their CI/CD
    tool via the API. Lars sends you a chat message:\n\n>\U0001F468\U0001F3FB‍\U0001F9B2
    Hey senior sysadmin, we have this new continuous integration tool that the developers
    are using to test their application code. I'd like you to test some API calls
    to our HCP Terraform organization and workspaces. Can you please take a look at
    this and learn how the API works?"
- type: text
  contents: |-
    Feeling stuck? Remember that the HCP Terraform docs contain examples for all API endpoints:
    https://www.terraform.io/docs/cloud/api/workspace-variables.html#create-a-variable
    https://www.terraform.io/docs/cloud/api/run.html#create-a-run
- type: text
  contents: |-
    Here are some other fun placeholder sites you can try with the *placeholder* variable:
    placedog.net<br>
    placebear.com<br>
    www.fillmurray.com<br>
    www.placecage.com<br>
    placebeard.it<br>
    loremflickr.com<br>
    baconmockup.com<br>
    placeimg.com<br>
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Code Editor
  type: code
  hostname: workstation
  path: /root/hashicat-azure
difficulty: basic
timelimit: 1800
---
In the final challenge you'll directly interact with the HCP Terraform API. HCP Terraform has a rich API that lets you do everything you can do in the GUI and more. Intermediate and advanced users utilize the API to create complex integrations that work with external systems.

Your goal is to configure three variables in the hashicat-azure workspace and then trigger a Terraform run using only the API. The three variables you need to configure are:
- `placeholder` An image placeholder URL. Examples: placekitten.com, placedog.net, picsum.photos
- `height` The height in pixels for your image. Set this to 600
- `width` The width in pixels for your image. Set this to 800
If you've already configured any of the three variables in the UI please delete them before starting the challenge.
### Challenge Setup:
Run this command to fetch your token and store it as the TOKEN environment variable:
```
export TOKEN=$(grep token /root/.terraform.d/credentials.tfrc.json | cut -d '"' -f4)
```
Next set your ORG variable with the following command, replacing MYORGNAME with your own:
```
export ORG="MYORGNAME"
```
Finally, fetch your workspace id with the following curl command. Curl is a command line tool that is handy for interacting directly with APIs. Note how your TOKEN and ORG variables are automatically embedded in the command:
```
curl -s --header "Authorization: Bearer $TOKEN" --header "Content-Type: application/vnd.api+json"   https://app.terraform.io/api/v2/organizations/$ORG/workspaces/hashicat-azure | jq -r .data.id
```
Copy or save this workspace ID somewhere as you will need it during the challenge.
### The Challenge:
Use the four *.json files located in the json directory to create your variables and trigger a Terraform plan/apply. Use the Terraform API docs (which are in one of this challenge's notes) to determine which commands to run. You can edit the files in your code editor to customize them for your workspace. Be sure to include `@` before the JSON file names.

You can find the relevant curl request instructions here:
- [For workspace variables](https://www.terraform.io/docs/cloud/api/workspace-variables.html#sample-request)
- [To apply runs](https://www.terraform.io/docs/cloud/api/run.html#sample-request)

When you've succesfully triggered a run via the API with the new variables, click the Check button to continue.