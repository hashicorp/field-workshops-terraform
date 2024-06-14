---
slug: tf-graph
type: challenge
title: "\U0001F4C8 Terraform Graph"
teaser: |
  Terraform creates a graph of all the infrastructure defined in your code.
notes:
- type: text
  contents: Terraform Graph can provide a visual representation of all your infrastructure.
    This is handy for finding dependency issues or resources that will be affected
    by a change.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Terraform Graph
  type: service
  hostname: workstation
  port: 5000
difficulty: basic
timelimit: 10000
---
Try running the `terraform graph` command:

```
terraform graph
```

This generates code that can be used to create a visual map of your infrastructure. The graph data is in [DOT graph description language format](https://en.wikipedia.org/wiki/DOT_(graph_description_language)). There are several graphing tools you can use to visualize this data, including the free Blast Radius tool. You can learn more about Blast Radius here:

https://28mm.github.io/blast-radius-docs/

Start up a Blast Radius server with the following command:

```
blast-radius --serve .
```

Now switch to the **Terraform Graph** tab to view the infrastructure graph. If the web page is blank, you may need to click the refresh icon in Instruqt, which is directly to the right of the **Terraform Graph** tab and looks like a circular arrow.

Explore the Terraform graph for your infrastructure. Dependencies are automatically mapped out for you. This graph was generated using the free Blast Radius tool.

**NOTE:** Due to a known bug you may not be able to drag and zoom the graph. The main point of this exercise is to see how terraform maps out complex infrastructure. So don't worry if your graph doesn't show color.

Terraform uses this graph to determine which resources can be built in parallel for maximum efficiency.