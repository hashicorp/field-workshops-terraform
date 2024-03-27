# Sentinel for Terraform - Instructor Guide

This guide will prepare you to deliver a full-day [Sentinel for Terraform Workshop](https://hashicorp.github.io/field-workshops-terraform/slides/sentinel/index.html#1), although the workshop is usually broken up into two sessions as described below. The workshop is a combination of [slides](https://hashicorp.github.io/field-workshops-terraform/slides/sentinel/index.html#1) and two hands-on [Instruqt tracks](https://play.instruqt.com/hashicorp/topics/sentinel) that teach students how to write and test Sentinel policies for Terraform.  Participants will learn an 8-step methodology for writing and testing Sentinel policies. Everything is done using the Sentinel CLI provided within the Instruqt tracks, so access to HCP Terraform or Terraform Enterprise is not required. All students need is a browser.

This workshop content is suitable for HashiCorp customers who are already using HCP Terraform or Terraform Enterprise; we recommend that all students first complete one of the Intro to Terraform workshops listed under https://hashicorp.github.io/workshops/ or have equivalent experience.  It is not well-suited for prospects since it exposes the fact that using Sentinel can be complex.

## Attendee prerequisites
Prerequisites are minimal. All that is required to participate in the workshop is a web browser and Internet access. No software needs to be downloaded or installed -- self-contained lab environments run on the Instruqt platform. 

## Delivering this workshop
As an instructor you should be very familiar with the slide deck and Instruqt tracks (see those sections below for more info). Go through the course and make sure you understand all of the major concepts and lab exercises.

Before delivering this workshop for the first time, you should attend a live training session to observe and learn from another instructor or watch a [recording](https://hashicorp.zoom.us/rec/share/Z9TfeR3Pf3dP7Mouog2geQ2315TW4rB16ufA_yh_6MCxFWDHqhEOwJL7kjfIHD0.DF1nsi-bQ1yLGKU1) of the workshop's author, Roger Berlind, delivering it. (The password is `Sentinel1!`.)

Once you've gone through your onboarding as a course instructor, before *each* time you deliver this course, we recommend the following preparatory review:

1. Review the slides.
2. Complete the [Sentinel CLI Basics](https://play.instruqt.com/hashicorp/tracks/sentinel-cli-basics) track. This is quite easy.
3. Complete the [Sentinel for Terraform (v4)](https://play.instruqt.com/hashicorp/tracks/sentinel-for-terraform-v4) track. As indicated above, this is more challenging. Try to complete the policies yourself as much as possible. But if you struggle, try to leverage the track's built-in hints just as a student would. If even that doesn't help, then look at the [solutions](https://github.com/hashicorp/sentinel-training-solution/tree/main/sentinel-policies).

We recommend you deliver this workshop in two 3-hour sessions. In the first session, the instructor will deliver most of the slides as indicated in the "Two Session Workshop Agenda" slide and students will complete the first of the two Instruqt tracks. In the second session, the instructor and possibly TAs will guide students through the second track. In reality, 3 hours in the second session is only enough to complete the first 5 challenges of the second Instruqt track. If you really do want to complete the entire track, you should allocate 5 hours for the second session. Of course, students can complete any remaining challenges on their own.

If you only allocate 3 hours for the second session or only 6 hours to a single session workshop, then most students will probably not get past challenge 5 of the second Instruqt track. That is OK.  It is better to leave enough time for all students to successfully complete those challenges rather than rushing ahead to the other challenges.  The people who are most likely to write Sentinel policies will either move faster and complete more challenges during the allocated 3 hours or will complete them on their own time.

### Delivering in Two Sessions (preferred)
The first session is unfortunately dominated by slides. This is done so that students can complete as much of the second Instruqt track as possible in a single session and avoid having to save their completed policies from session 1 for use in session 2. In the future, we might break up the second Instruqt track into multiple tracks and then change the agenda to give more alternation between slides and labs.

We do not recommend delivering the second session by itself even if the attendees are already familiar with Sentinel and its use in Terraform.  It is better to always deliver all the slides to ensure that students really understand their contents prior to working on the second Instruqt track.

**Timing for Two Session Workshop**

The following schedule is for the two session version of the workshop. It includes extra time in the second session to allow the completion of the second Instruqt track; but most customers will be happy to stop after 3 hours and complete the track on their own.

Be sure to show the slides about each exercise of the second track before telling students to start that exercise.

Please ask students to complete the [feedback survey](https://bit.ly/hashiworkshopfeedback) at the end of the second session.

*Session 1*

0:00 - 0:05 - Wait for attendees to arrive and Introductions<br>
0:05 - 0:25 - Sentinel in HCP Terraform and Terraform Enterprise<br>
0:25 - 0:50 - The Sentinel Language<br>
0:50 - 1:05 - Lab 1 (The Sentinel CLI)<br>
1:05 - 1:10 - Review of Lab 1<br>
1:10 - 1:15 - Break<br>
1:15 - 1:30 - The Evolution of Sentinel Policies<br>
1:30 - 1:35 - Demo of Sentinel CLI
1:35 - 2:05 - Writing and Testing Sentinel Policies<br>
2:05 - 2:15 - Demo of Sentinel in HCP Terraform
2:15 - 2:25 - Break<br>
2:25 - 2:45 - Using Sentinel in HCP Terraform<br>
2:45 - 3:00 - Q&A<br>

*Session 2*

0:00 - 0:05 - Wait for attendees to arrive<br>
0:05 - 0:15 - Advanced Techniques<br>
0:15 - 0:30 - About the Workshop Exercises<br>
0:30 - 0:55 - Exercise 1<br>
0:55 - 1:00 - Review of Exercise 1<br>
1:00 - 1:05 - Break<br>
1:05 - 1:45 - Exercise 2 (parts a and b)<br>
1:45 - 1:55 - Review of Exercise 2<br>
1:55 - 2:00 - Break<br>
2:00 - 2:45 - Exercise 3 (parts a and b)<br>
2:45 - 2:55 - Review of Exercise 3<br>
2:55 - 3:00 - Break or Closing (including the Feedback Survey)<br>
3:00 - 3:45 - (Optional) Exercise 4 (parts a and b)<br>
3:45 - 3:55 - (Optional) Review of Exercise 4<br>
3:55 - 4:00 - Break<br>
4:00 - 4:45 - (Optional) Exercise 5 (parts a and b)<br>
4:45 - 4:55 - (Optional) Review of Exercise 5<br>
4:55 - 5:00 - Closing (including the Feedback Survey)<br>

### Delivering in One Session
If you or your customer really wants to do this workshop in a single session, then allocate 6-8 hours and follow the agenda on the "Single Session Workshop Agenda" slide. This agenda delays some of the slides until after parts of the second track to avoid too many slides at the beginning of the day.

## Slides
The slide deck for this training is published here:

### https://hashicorp.github.io/field-workshops-terraform/slides/sentinel/index.html#1

The slides linked above have been updated as of April 2022, from an older [slide version 4](https://storage.googleapis.com/instruqt-hashicorp-tracks/sentinel-shared/Sentinel-for-Terraform-v4.pptx) which was written in PowerPoint and can be downloaded from a Google Cloud storage bucket.

## Live Demos
When you reach the slide "Some Prototypical Third-Generation Policies" in the section, "The Evolution of Terraform Sentinel Policies", we recommend that you show all four of the policies listed there in GitHub.
* [restrict-ec2-instance-type.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/aws/restrict-ec2-instance-type.sentinel) (AWS)
* [restrict-vm-cpu-and-memory.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/vmware/restrict-vm-cpu-and-memory.sentinel) (VMware)
* [restrict-vm-disk-size.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/vmware/restrict-vm-disk-size.sentinel) (VMware)
* [restrict-publishers-of-current-vms.sentinel](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/azure/restrict-publishers-of-current-vms.sentinel) (Azure)

Please don't skip any of these because you think they are not relevant to your customer; each has instructional value.

We then recommend that you run the `sentinel test -verbose restrict-ec2-instance-type.sentinel` command from the "aws" directory of your local clone of the [terraform-sentinel-policies](https://github.com/hashicorp/terraform-sentinel-policies) repository. (You will need to download and install the Sentinel CLI version 0.18.0 or higher, extract the sentinel binary, and make sure it is in your path.) Point out the detailed violation messages including the full paths of the Terraform resources that violated the policy, the values of the `instance_type` attribute they used, and the allowed values. Emphasize that violation messages like these are automatically generated by the third-generation common functions and that providing Terraform developers this amount of detail allows them to modify their Terraform code to make it compliant with violated policies without having to ask the governance team what values are allowed. Also point out that all resources that violated a policy are reported, not just the first one.

You might also want to run the Sentinel CLI test command against the two prototypical VMware policies (even if your customer does not use VMware) since they illustrate policies with multiple conditions and the usefulness of sometimes delaying printing of violation messages. To test these policies, navigate to the "vmware" directory of your local clone of the [terraform-sentinel-policies](https://github.com/hashicorp/terraform-sentinel-policies) repository and run these commands:
```
sentinel test -verbose restrict-vm-cpu-and-memory.sentinel
sentinel test -verbose restrict-vm-disk-size.sentinel
```

Point out that the first of these two VMware Sentinel policies has three failure test cases with associated mocks. Point out that the second policy delays printing violation messages for disks created with VMware VMs so that the messages look like "Disk 0 has size with value 120 that is greater than 100" instead of the less meaningful "0 has size with value 120 that is greater than 100".

While presenting the "Writing and Testing Sentinel Policies for Terraform" slides, we recommend you show the HCP Terraform UI opened to a workspace that points at Terraform code that creates an EC2 instance. You could use this [code](https://github.com/hashicorp/terraform-guides/tree/master/infrastructure-as-code/aws-ec2-instance), although you will probably want to update it to be more modern and use a newer version of Terraform instead of Terraform 0.11. You can then do a plan and show how mocks can be downloaded from the plan.  You can also show the restrict-ec2-instance-type.sentinel policy failing if you have registered this [policy set](https://github.com/hashicorp/terraform-sentinel-policies/blob/main/aws/sentinel.hcl) with your TFC organization.

## Hands-on Labs
At certain points in the slide deck there are references to the lab exercises. [Instruqt](https://instruqt.com/hashicorp) is our lab platform. Users must generally register on the Instruqt website to use these tracks unless you send an invite that allows anonymous access. There are two Instruqt tracks in this workshop.

The first Instruqt track, [Sentinel CLI Basics](https://play.instruqt.com/hashicorp/tracks/sentinel-cli-basics), introduces the Sentinel CLI and teaches students how to use the `sentinel apply` and `sentinel test` commands with a very simple policy.

The second track, [Sentinel for Terraform (v4)](https://play.instruqt.com/hashicorp/tracks/sentinel-for-terraform-v4), guides students through completing 5 Sentinel policies and testing them with the Sentinel CLI. These policies cover all 4 of the [Terraform Sentinel imports](https://www.terraform.io/docs/cloud/sentinel/import/index.html). All required mocks and test cases are provided; students only need to complete the policies by replacing placeholders with valid Sentinel expressions. Students are asked to complete policies 2-5 in two different ways, first using some [common functions](https://github.com/hashicorp/terraform-sentinel-policies/tree/main/common-functions) and then without using them. This is done so that students do learn to use more advanced Sentinel language constructs such as for loops and if/else conditionals that can be avoided when using the common functions. There is also an extra credit challenge.

Go through these tracks from start to finish and make sure you understand all the challenges. Try to solve them on your own without looking at the solutions. Students may have questions during the labs. When presenting a workshop be sure to give enough time for all your participants to go through the labs. Remember that this is probably their first time working with Sentinel.

### General lab notes
The Instruqt lab environment includes a very recent version of the Sentinel CLI and leverages the default Instruqt code editor for editing Sentinel policies.

Commands such as `sentinel test` should be run on the "Sentinel CLI" tab. Policies should be edited on the "Policies" tab. Test cases and mocks can be viewed on the "Test Cases" tab.

Please note that the second Instruqt track of this workshop is challenging because it does not give students simple copy/paste instructions. Instead, it forces students to think for themselves, search relevant Terraform provider and Sentinel documentation, and identify the resources and attributes that need to be restricted by the policies.

Why haven't we made this easier? Well, in the real world, people are asked to write policies to achieve specific objectives without being told exactly which Terraform resources and attributes need to be restricted. They need to figure this out for themselves. This workshop teaches a methodology that will help them do that. Some skills are better learned through the process of trying to solve problems even if some of a student's initial attempts fail. In the end, students who complete all the challenges of the second Instruqt track of this workshop will be able to write their own Sentinel policies. If the track was just a set of copy/paste operations, we do not think that would be true.

However, note that students can get progressively more helpful hints by clicking on the "Check" button of each challenge after they make changes to the policies and save them. They are first given hints about the next expression that needs to be replaced; if they remove that expression, they are then told what its replacement should have been. Additionally, a complete solution set is available [here](https://github.com/hashicorp/sentinel-training-solution/tree/main/sentinel-policies). Students can also look at the mocks for additional ideas about which resources and attributes to reference in their completed policies.

### Showing Solutions of Challenges
Both of the Instruqt tracks in this workshop require participants to replace certain placeholders like `<attribute>` with valid Sentinel expressions. This complicates things for the instructor showing solutions to the exercises, especially in the second track since they will have replaced those placeholders with the correct expressions and might not remember where the placeholders had been.

We therefore recommend you do the following so that you can show the policies as they looked before you edited them and after you made all your changes:
1. Start the track.
2. Open the track in a second browser window.
3. Copy each policy before you edit it. You can do this in the "Sentinel CLI" tab with commands like `cp restrict-vault-auth-methods.sentinel restrict-vault-auth-methods.sentinel.orig`.
4. Edit the policy or use the "Skip to" button on the track home page to skip to the next challenge. The latter will update the policy for you. But if you do the latter, use the "Close" button and then click the "View" button on the challenge for which you want to show the original policy and your solution.
5. When showing your solution, position your two browser windows side by side with the window showing the original policy on the left and the edited policy on the right. We recommend hiding the assignment in both windows.
6. You can then highlight the various placeholders and the Sentinel expressions you replaced them with.
7. Also be sure to show the relevant `sentinel test` command to show that all test cases are passing for your edited policy.

Note that when you make changes to files in one window, you might need to select the file again in the other window to make the changes show up.

Alternatively, you can show the complete set of original policies from this [file](https://github.com/hashicorp/sentinel-training-solution/blob/main/sentinel-policies/original-policies.sentinel.hcl) in any text editor that has syntax highlighting for HCL. Just scroll through the exercises in your preferred editor while showing the solutions in a single browser window pointing at your running instance of the Instruqt track.

### Skipping
HashiCorp employees (if members of the Instruqt HashiCorp organization) can skip ahead in the Sentinel tracks.

To actually skip one or more challenges while running one of these tracks, return to the track home page and click the "Skip to" button of the challenge you wish to "skip to".

We have not yet enabled skipping for end-users even though Instruqt now supports that.

However, we have embedded a secret mechanism for students to skip the first 8 challenges of the second track. If a student is really stuck and wants to move to the next challenge, the instructor or TA can instruct them to run this command on their "Sentinel CLI" tab:
```
touch /tmp/skip-check
```
This will cause the current challenge's check script to pass. The file will then be deleted. If the student wants to skip additional challenges, they must re-run that command.

Students should not skip challenges simply because they don't think they are relevant because their company does not have Vault, AWS, Azure, or GCP. Each challenge has its own instructional value regardless of the types of resources being restricted or the technologies or clouds they are associated with.

## Scheduling your workshop
Please add all workshops, both public and private, to the shared instruqt-workshops Google calendar as follows:

1. Create a new event on the instruqt-workshops calendar and set the name to the name of your workshop. **Note that this calendar event should be separate from the one you send to workshop attendees.**
2. Set the begin and end times of the event to the begin and end times of your workshop.
3. Include the following information in the description:
    1. The name of the host (probably yourself) after "Host:"
    2. The names of presenters after "Presenters:"
    3. A list of tracks that your workshop will use after "Tracks:", listing the URL of each track on its own line. **Please do not list links to Instruqt invites.**

Before saving the event, be sure to set the calendar as "instruqt-workshops" instead of your own personal calendar.

## Email invitation
Here is some boilerplate text you can use or customize when inviting or announcing your workshop:

```
Introduction to Sentinel for Terraform Workshop
A hands-on technical workshop

Learn how to write and test Sentinel policies that restrict the provisioning of resources done with HCP Terraform and Terraform Enterprise workspace. Sentinel is HashiCorp's policy-as-code framework and language for codifying policies in the same way that Terraform codifies infrastructure as code. Beginners can create Sentinel policies that use common functions that avoid use of advanced Sentinel language constructs. Experts can write their own Sentinel functions that do use those constructs and implement more sophisticated policies.

Join us for two 3-hour training sessions that will teach you how to write and test Sentinel policies using standard and Terraform Sentinel imports and some common functions.

Topics covered in the workshop include:

* Sentinel in HCP Terraform and Terraform Enterprise
* The Sentinel Language
* The Evolution of Terraform Sentinel Policies
* Writing Sentinel Policies and Testing them with the Sentinel CLI
* Using Sentinel in HCP Terraform
* Advanced Techniques

All of these but the last will be covered during the first session which will also include one lab that teaches you how to use the Sentinel CLI.

The second session covers the Advanced Techniques topic and then guides you through completing 5 Sentinel policies and testing them in a second, longer lab. All Sentinel mocks and test cases are provided; all you need to do is complete the partially-written policies. However, we do make you review some Terraform and Sentinel documentation to better simulate the process you will have to follow in the real world when asked to write a Sentinel policy to achieve specific objectives.

The first session is mandatory for all students. The second session is only required for students who plan to write their own Sentinel policies.

The only prerequisites for this workshop are a web browser and willingness to learn.
```

## Creating Instruqt Invites
Once you've gotten an invite to the HashiCorp organization you can create temporary invite links for your students. You can create separate invites for each track or a single invite for both of them.

1. Click on the **Invites** tab under https://play.instruqt.com/hashicorp. Note that you must have the Content Contributor role within the Instruqt HashiCorp organization to create invites. If you don't have that, see this [link](https://hashicorp.atlassian.net/wiki/spaces/SCESS/pages/2229403888/Instruqt+Access+and+Usage#Instruqt-Access).
2. Click on the **Create** button to create a new invite.
3. Create a descriptive title such as "Acme Sentinel Workshop".
4. Select the tracks you want to make available. If you begin typing "Sentinel", the right tracks will show up in the filtered list.
5. Leave "How many times can this invite be used?" set to 0.
6. Set the invite to expire in one month.
7. Leave "How many times can the track be played?" set to 0.
8. Make the track available to your user for 1 month.
9. Do not enable the **Allow anonymous** setting if you want to be able to track which users played the track based on their emails.

## Configuring the Instruqt Pools
We recommend that you configure Instruqt pools for each Instruqt track used in this workshop 1 hour before you plan to use the track. Please see this Confluence [doc](https://hashicorp.atlassian.net/wiki/spaces/SCESS/pages/2229403888/Instruqt+Access+and+Usage#Configuring-Instruqt-Pools) for instructions.


