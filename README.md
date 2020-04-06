# HashiCorp Terraform Field Workshops
[![CircleCI](https://circleci.com/gh/hashicorp/field-workshops-terraform.svg?style=svg&circle-token=3ae20ad84b4220d3e1002b58b1aeae863a9c71ec)](https://circleci.com/gh/hashicorp/field-workshops-terraform)

All HashiCorp field workshops focused on Terraform should be placed in this repository. Similar field workshop repositories exist for these HashiCorp solutions:
* [field-workshops-consul](https://github.com/hashicorp/field-workshops-consul)
* [field-workshops-nomad](https://github.com/hashicorp/field-workshops-nomad)
* [field-workshops-vault](https://github.com/hashicorp/field-workshops-vault)

Additionally, field workshops focused on more than one HashiCorp solution can be found in the [field-workshops-hashistack](https://github.com/hashicorp/field-workshops-hashistack) repository.

## Slides
The slides for these workshops should be created using [Remark](https://remarkjs.com) and should be placed under the [docs/slides](./docs/slides) directory. This directory is organized by cloud and then by workshop.  If a workshop targets a single cloud, its slides should be placed in a directory under that cloud's directory ([aws](./docs/slides/aws), [azure](./docs/slides/azure), or [gcp](./docs/slides/gcp)). If a workshop can be used with multiple clouds, its slides should be placed in a directory under the [multi-cloud](./docs/slides/multi-cloud) directory.

Please do **NOT** place any slides or any other content directly inside the [docs](./docs) directory.

All of the slides will be available for students to view in their web browsers under https://hashicorp.github.io/field-workshops-terraform/slides.  Each workshop should give the full link to that workshop's slides in one of its first few slides.

## Instructor Guides
The instructor guides for these workshops should be created as Markdown files and should be placed in the [instructor-guides](./instructor-guides) directory and have names like `<cloud>_<workshop_name>_INSTRUCTOR_GUIDE.md` where `<cloud>` is the cloud the workshop targets and `<workshop_name>` is the name of the workshop. But if the workshop is intended for use with multiple clouds, `<cloud>` should be omitted.

## Labs (Instruqt Tracks)
The labs for these workshops should be created using [Instruqt Tracks](https://instruqt.com/hashicorp).  Each track should be placed in its own directory directly underneath the [instruqt-tracks](./instruqt-tracks) directory. Doing this allows each track to be used by multiple workshops within this repository.

