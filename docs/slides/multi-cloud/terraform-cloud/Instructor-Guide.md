 Terraform Foundations Workshops - Instructor Guide

This guide will prepare you to deliver a 1/2 day [Terraform Foundations Course](https://hashicorp.github.io/workshops).

This workshop content is suitable for HashiCorp prospects and customers. The workshop is a combination of lecture slides and hands-on labs that introduce attendees to the foundations of Terraform. This workshop is targeted towards users with limited or no Terraform experience. The workshop may be presented in-person, over the web, or as a self-guided tutorial.

The workshop alternates between lectures with accompanying slides and hands-on lab exercises. New concepts that are introduced in the slides are reinforced in the labs. As an instructor you should be well familiar with the slide deck and training labs. Go through the course and make sure you understand all of the major concepts and lab exercises.

When possible you should attend a live training session to observe and learn from another instructor. We will also have video recordings of this workshop available soon. Also be sure to join these Slack channels where you can get help and ask questions: #proj-instruqt and #se-workshops

### Prerequisites
Prerequisites for these workshops are as follows:

* A web browser
* Terraform Cloud account

We strongly recommend having your participants sign up for Terraform Cloud *before* the training.

### Scheduling your workshop
Please add all workshops, both public and private, to the shared instruqt-workshops Google calendar as follows:

1. Create a new event on the instruqt-workshops calendar and set the name to the name of your workshop which could match a name being used by Field Marketing if it is public or the name of a specific customer and a product if it is private.
2. Set the begin and end times of the event to the begin and end times of your workshop.
3. Include the following information in the description:
    1. The name of the host (probably yourself) after "Host:"
    2. The names of presenters after "Presenters:"
    3. A list of tracks that your workshop will use after "Tracks:", listing the URL of each track on its own line.

Before saving the event, be sure to set the calendar as "instruqt-workshops" instead of your own personal calendar.

### Email invitation
Here is some boilerplate text you can use or customize when inviting or announcing your workshop:

```
Terraform Foundations
A hands-on technical workshop


Prerequisites:
* Complete one of the Intro to Terraform workshops
* Have a Terraform Cloud account
* Organization in Terraform Cloud with trial features enabled
* A github.com account

```

### Markdown Slide Decks
The slide decks for these workshops are published here:

#### https://hashicorp.github.io/workshops

#### Navigation
Use the arrow keys (up/down or left/right) to navigate back and forth between slides.

Press the `P` key to enter presenter mode and reveal the speaker notes.

Press the `C` key to pop open an external window that will stay synced with your speaker notes window. This is useful for keeping notes on your laptop while showing the presentation on the projector.

#### RemarkJS
The slide deck for this training is written completely in [Markdown](https://guides.github.com/features/mastering-markdown/) using the [RemarkJS](https://remarkjs.com/#1) framework. This allows us to publish slide decks from a source code repository. The slide deck is easy to maintain, lightweight, and can be accessed from anywhere. Updates and changes to the deck can be made quickly and efficiently by simply editing the markdown source files. If you find any mistakes or issues with the slides please add them to our issue tracker:

https://github.com/hashicorp/field-workshops-terraform/issues

### Instruqt Labs
At certain points in the slide deck there are links to the lab exercises. [Instruqt](https://instruqt.com/hashicorp) is our lab platform. The lab exercises are stored in private tracks so you'll need to log onto instruqt and request access to join the `members` team to see these links. Join the #proj-instruqt channel in Slack to request access.

https://instruqt.com/hashicorp/tracks/terraform-foundations<br>

Go through your track from start to finish and make sure you understand everything. Students may have questions during the labs. When presenting a workshop be sure to give enough time for all your participants to go through the labs.

#### Creating Instruqt Invites
Once you've gotten an invite to the HashiCorp organization you can create temporary invite links for your students:

1. Click on the **Invites** link at the top of the page.
2. Click on the **New+** button to create a new invite.
3. Create a descriptive title for internal use. Example: "Atlanta Intro to Terraform on Azure Workshop"
4. Select the track you want to make available.
5. Set the invite to expire in a month or two.
6. Make the track available to your user for at least a week.
7. Do not enable **Allow Anonymous** setting if you want to be able to track users progress and emails.

