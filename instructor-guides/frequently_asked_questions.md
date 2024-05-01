# Terraform Workshops FAQ
### Frequently Asked Questions

**Q. How do these Instruqt tracks work?**<br>
A. Instruqt tracks contain a `config.yml` file which builds a student workstation, currently an Ubuntu Linux 18.04 virtual machine of n1-standard-1 size. The workstation has 3.6GB of RAM and the open source version of Visual Studio Code installed as a web application. This makes it very easy for students to edit their terraform code using a comfortable and familiar environment.

Other tools included on the workstation are vim, nano, emacs, jq, unzip, curl, wget git, az command line, and some other various tools and easter eggs. Instruqt also provides an AWS account, Azure subscription, or GCP project for each student. These are deleted once the track is stopped or expires.

Students then build and learn terraform in these temporary environments using the HashiCat application, which is available on [AWS](https://github.com/hashicorp/hashicat-aws), [GCP](https://github.com/hashicorp/hashicat-gcp), and [Azure](https://github.com/hashicorp/hashicat-azure).

**Q. How do credentials get handled? Does anyone clean up these resources when the workshop is over?**<br>
A. Instruqt provides an entire AWS account, Azure subscription, or GCP project for each student. Cleanup is done by Instruqt when the track expires or the student clicks the Stop button. You can always encourage your participants to run `terraform destroy` at the end of a workshop to help reduce costs.

**Q. What happens if I get stuck or find errors during a workshop?**<br>
A. You can always post in #se-workshops or #proj-instruqt and someone should be able to assist.

**Q. How do I upgrade my users' organizations to trials?**<br>
A. There is another slack channel called #team-se-trial-rqsts where you can ask an admin to upgrade your orgs to trials. But most users should be able to enable 
a 30 day trial for themselves in the HCP Terraform UI. (The exception is when they have already enabled a trial in the past which has expired.)

**Q. In the TF Cloud for AWS workshop sometimes the hashicat app URL doesn't load the first time I run `terraform apply`?**<br>
A. This is because we are using a null provisioner to deploy the app, so sometimes the ec2 instance won't match what's currently in the state file on the first run. Running a second `terraform apply` will fix it for all subsequent runs until you destroy. We are working on a fix that might avoid this problem.

**Q. What is the Hashicat application?  How does it work?**<br>
A. The hashicat-aws, hashicat-azure, and hashicat-gcp applications are essentially web servers with a webpage that the user can tweak using Terraform variables. The terraform code uses a null provisioner with a random ID to ensure that provisioners run every time you do a `terraform apply`. This allows the students to do a lot of terraform runs without having to tear down and rebuild everything every time. Explain to your students that this custom code is designed for a good training experience, but in the real world the provisioner only runs the first time you do a `terraform apply`.

**Q. Some of my students are rushing ahead in the lab exercises. How can I get them to stay with the class?**<br>
A. You can share the Terraform puzzles git repo with them, and suggest that they work on those when they finish each section. These bite-sized Terraform challenges can be done without disrupting the main lab exercises: https://github.com/hashicorp/workshop-puzzles

**Q. My student somehow got their workstation completely stuck and are unable to get past the check script in Instruqt. Help?**<br>
A. Instructors may now override any check script by creating a file at `/tmp/skip-check` on the student workstation. This file will override the check and allow you to skip to the next lab challenge. Use with discretion.

```
touch /tmp/skip-check
```

**Q. How can I start/stop/restart the Code Server text editor?**<br>
A. The new code-server has a standard systemd init script. If a student's editor locks up for some reason you can simply restart it:

```
systemctl restart code-server
```

**Q. Is there a way to fast-forward to a particular part of a track?**<br>
A. Currently this is only possible for members of the HashiCorp Instruqt organization. However, you can use the `/tmp/skip-check` file as mentioned in the previous question to quickly skip past challenges to a particular point in the Intro to Terraform tracks. `/tmp/skip-check` must be created for each challenge that you want
to skip. In the HCP Terraform tracks, there is a separate mechanism documented [here](./instructor-guides/all_hcp_terraform_INSTRUCTOR_GUIDE.md#skipping-in-the-hcp-terraform-tracks).

**Q. My student created an AWS SSH key and terraform can't delete it.**<br>
A. You can log onto the AWS console directly and delete the offending resource that is blocking your run. Use the following command to see your AWS console username and password:
```
env | grep AWS
```

**Q. What is the Bonus Lab?**<br>
A. The bonus lab is meant for intermediate to advanced users who have already completed the main track. The bonus lab is a challenging combination that tests several skills learned in the HCP Terraform workshop. There are different Sentinel policies for the bonus lab depending on whether you're using AWS, Azure or GCP. Access it here:<br>
https://instruqt.com/hashicorp/tracks/terraform-cloud-bonus-lab
