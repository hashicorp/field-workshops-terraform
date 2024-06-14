---
slug: tf-graph-again
type: challenge
title: "\U0001F4C8 Terraform Graph"
teaser: |
  Revisit graph to see what has changed.
notes:
- type: text
  contents: Let's revisit our graph to see what has changed.
tabs:
- title: Shell
  type: terminal
  hostname: workstation
- title: Terraform Graph
  type: service
  hostname: workstation
  port: 5000
difficulty: basic
timelimit: 10670
---
Start up a Blast Radius server with the following command:

```
blast-radius --serve .
```

Now switch to the **Terraform Graph** tab to view the infrastructure graph. If the web page is blank, you may need to click the refresh icon (which looks like a circular arrow)

Explore the Terraform graph for your infrastructure. Dependencies are automatically mapped out for you. This graph was generated using the free Blast Radius tool.

**NOTE:** Due to a known bug you may not be able to drag and zoom the graph. The main point of this exercise is to see how terraform maps out complex infrastructure. So don't worry if your graph doesn't show color.

Terraform uses this graph to determine which resources can be built in parallel for maximum efficiency.