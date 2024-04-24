name: Azure-Terraform-Vault-Workshop
class: center
count: false
![:scale 60%](images/tfaz.png)
<br><br>
## Azure Terraform Workshop
### 코드형 인프라(IaC)로 Azure 자원 생성하기
???
INSTRUCTOR GUIDE LINK: https://github.com/hashicorp/field-workshops-terraform/blob/main/instructor-guides/azure_intro_to_terraform_INSTRUCTOR_GUIDE.md

This slide presentation is stored as Markdown code, specifically using the RemarkJS engine to render it. All standard markdown tags are supported, and you can also use some HTML within this document.

If you need to change the look and feel of the slide deck just use the style.css and remark_settings.js files to suit your needs. The content in this file is picked up by index.html when the page is loaded.

HTML comments like this one will show up in the source code, but not in the slides or speaker notes.
--->

Welcome to the beginner's guide to Terraform on Azure. This slide deck is written entirely in Markdown language, which means you can make edits or additions, then submit a pull request to add your changes to the main branch. To make edits to the slide deck simply fork this repository, edit the Markdown files, and submit a pull request with your changes.

The Markdown content is contained in the docs/ subdirectories.

Here are some helpful keyboard shortcuts for the instructor or participant:

⬆ ⬇ ⬅ ➡ - Navigate back and forth
P         - Toggle presenter view
C         - Pop an external window for presentation

Instructor notes are included in plain text, narrative parts are in **bold**. You can use the narrative quotes or change them to suit your own presentation style.

---
layout: true

.footer[
- Copyright © 2021 HashiCorp
- ![:scale 100%](https://hashicorp.github.io/field-workshops-assets/assets/logos/HashiCorp_Icon_Black.svg)
]

---
name: Introductions
# 참가자 소개
* 이름
* 담당 업무
* 자동화 경험
* 주로 사용하는 편집기(editor)

???
Use this slide to introduce yourself, give a little bit of your background story, then go around the room and have all your participants introduce themselves.

The favorite text editor question is a good ice breaker, but perhaps more importantly it gives you an immediate gauge of how technical your users are.

**There are no wrong answers to this question. Unless you say Notepad. Friends don't let friends write code in Notepad.**

**If you don't have a favorite text editor, that's okay! Our cloud lab has Visual Studio Code preinstalled. VSC is a free programmer's text editor for Microsoft, and it has great Terraform support. Most of this workshop will be simply copying and pasting code, so if you're not a developer don't fret. Terraform is easy to learn and fun to work with.**

---
name: Link-to-Slide-Deck
# 슬라이드 링크
<br><br><br>
슬라이드는 아래 링크에서 확인할 수 있습니다 :

# https://git.io/JucLg

---
name: Table-of-Contents
# 목차

1. 테라폼 소개 및 데모<br>
1. 테라폼 기초<br>
👩‍🔬 **Lab - Setup and Basic Usage**<br>
1. 테라폼 인 액션 : plan, apply, destroy<br>
1. 테라폼 코드 관리하기 <br>
🧪 **Lab - Terraform in Action**<br>
1. Azure에 VM 배포 및 구성<br>
🔬 **Lab - Provisioning with Terraform**<br>
1. 인프라 상태 관리 및 변경<br>
1. HCP Terraform<br>
⚗️ **Lab - Terraform Remote State**


???
This workshop should take roughly three hours to complete.

**Here is our agenda for today's training. The format is simple, you'll hear a lecture and view slides on each topic, then participate in a hands-on lab about that topic. We'll alternate between lecture and lab, with a couple of breaks thrown in.**

---
name: intro-to-terraform-demo
class: title
# Chapter 1
## 테라폼 소개

???
We use the word chapter here, because the training should feel like a story unfolding. The instructor's job is to guide the learners through this interactive story.

---
name: How-to-Provision-a-VM
# Azure VM 배포하는 방법

새로운 Azure VM을 배포하는 몇 가지 방법을 살펴보겠습니다. 다음과 같은 기본 정보 필요:

* 가상 머신 이름(Virtual Machine Name)
* 운영 체제(O/S) (Image)
* VM 크기
* 배포할 Location
* VM 접속 시 사용할 사용자 이름과 비밀번호

???
**Has anyone got experience using Azure? How do most of us normally get started? That's right, we log onto the Azure Portal and start clicking around. All of the major cloud providers make this part really easy. You get your account, log on and start clicking buttons. Let's take a peek at what that looks like...**

We chose the Azure portal as a starting point because most Azure users will be familiar with it. From this familiar starting point we begin our journey...

---
name: Azure-Portal-Provision
# Method 1: Azure Portal (GUI) 기반 배포
![:scale 70%](images/azure_provision.png)

???
**This should look familiar if you've ever used Azure. You click on Virtual Machines, and you'll see a whole list of different base images you can use to provision your VM. Some of these are provided by Microsoft, others are provided by third parties in the marketplace. You either search or browse for the thing you need, and click on it. Easy.**

---
name: Azure-Portal-Provision-2
# Method 1: Azure Portal (GUI) 기반 배포
![:scale 70%](images/azure_provision_3.png)

???
**Once you've chosen your base OS image, you will fill in some more details like the size of the VM, which location you want to run it in, and the initial administrator password. The Azure portal can be handy for spinning up individual VMs and dev or test environments. The good news is it's really easy to spin up infrastructure this way. The bad news is that it doesn't scale, and chances are nobody's keeping track of what got built.**

It's really easy to make a big mess of things if you simply give everyone a portal account and turn them loose in the cloud environment.

---
name: Azure-Resource-Manager
class: compact
# Method 2: ARM Template 기반 배포
```json
{
"type": "Microsoft.Compute/virtualMachines",
"name": "[variables('vmName')]",
"location": "[parameters('location')]",
"dependsOn": [
  "[concat('Microsoft.Network/networkInterfaces/', variables('nicName'))]"
],
"properties": {
  "hardwareProfile": {
    "vmSize": "[parameters('virtualMachineSize')]"
  },
}
}
```

ARM template을 Azure 자원 배포를 위한 안정적이고 신뢰할 수 있는 방법을 제공. JSON은 기계(Compute)가 이해하기는 쉬우나 사람이 편집하거나 문제 해결 시 어려움.

???
**Which brings us to method #2, Azure Resource Manager templates, also known as ARM templates. Have any of you used ARM templates? What's that experience like?**

**ARM templates are written in JSON, which stands for JavaScript Object Notation. It is an open-standard format for transmitting data between computers. And don't get me wrong, JSON is great. If you happen to be a computer. Computers are really good at reading these files full of key-value pairs and lists.**

**The problem is that editing and maintaining huge JSON files is hard for humans. Because JSON is not a programming language, you'll end up writing a lot more lines of complex code that is hard to understand and change.**

**ARM templates - easy for computers to read, hard for humans to troubleshoot and maintain.**

We are not here to bash on ARM templates or any other JSON/YAML based provisioning tools. The simple fact is these data formats are not well suited for logical operations (if/then, for loops, etc.)



---
name: Provision-with-Terraform-2
# Method 3: Terraform 기반 배포
```terraform
resource "azure_virtual_machine" "web" {
  name     = "MyFirstVM"
  image    = "Windows 2012 R2"
  vm_size  = "Standard DS1"
  location = "Korea Central"
  username = "홍길동"
  password = "Password1234"
}
```
.center[Azure VM 생성을 위한 예제 Terraform 코드.]

???
**And finally we have option #3, Terraform. Terraform uses a Domain Specific Language, or DSL that is designed to be both human-friendly and machine-readable. This is an example snippet of Terraform code. Now watch as I flip back to the previous slide. Would you rather have to write and maintain this complex and messy JSON, or this simple, compact terraform code?**

Advance back to the previous slide to illustrate the difference between JSON and equivalent Terraform.

---
name: What-is-Terraform
class: compact
# Terraform은 ?
```terraform
resource "azurerm_virtual_machine" "catapp" {
  name                = "${var.prefix}-meow"
  location            = "${var.location}"
  resource_group_name = "${azurerm_resource_group.myresourcegroup.name}"
  vm_size             = "${var.vm_size}"
  network_interface_ids         = ["${azurerm_network_interface.catapp-nic.id}"]
```
* 실행 가능한 문서 (코드 = 인프라 최종 상태를 기술한 문서)
* 사림과 기계가 동일하게 읽고 이해 가능하고, 배우기 쉽다
* 테스트, 공유, 재 사용 및 자동화
* 대부분의 상용 클라우드 서비스(Azure, AWS, GCP 등)를 지원


???
**So what exactly _is_ Terraform? Terraform is the DNA of your hybrid infrastructure. Terraform code is written in HCL, or HashiCorp Config Language. It is the only programming language designed specifically for provisioning infrastructure on any platform.**

**Do any of you have a wiki or set of runbooks that contain provisioning instructions? Think for a moment about that wiki. Now I want you to imagine the date stamp, when was this thing last edited? Let's say it was four years ago. Do you think maybe something could have changed in the past four years?**

**It sounds funny but the truth is your wiki is the obituary of the last known state of your infrastructure. One of the main reasons to use terraform is because it is self-documenting. The code itself explains every step required to build this infrastructure, and therefore it is always up to date.**

---
name: IaC
# 코드형 인프라 (Infrastructure as Code, IaC)
<br><br>
.biglist[코드형 인프라(IaC)는 기계와 사람이 읽을 수 있도록 정의된 파일을 사용하여 클라우드 상의 인프라를 배포, 관리하는 절차.

** IaC 코드 = 실행 가능한 문서 **
]

???
**You might be thinking...why can't I just do this by hand? After all the Azure portal is really easy, and I can just stand up my infrastructure manually. Here's why:**

**Terraform ensures that when you build any type of infrastructure that it gets built correctly every single time, exactly the same way. Let's try a thought experiment. If I gave every single one of you the same build document and asked you to set up a server, I guarantee there will be differences in those machines when you hand them over. They may not be major differences, but over time these can pile up and cause all sorts of uncertainty and issues in your environment.**

**When you require hands on keyboards (or mice), and you start making changes and manual steps on your infrastructure, you've lost the automation battle before it even starts. Even a single manual step can slow down your delivery schedule, and introduce unnecessary risk and change to your environments.**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
???
**We sometimes call this philosophy 'Infrastructure as Code', or the practice of expressing all of our provisioning steps as machine-readable code and variables. This is also known as the...**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
???
**...codified workflow. When you code-ify all of your manual steps, you'll gain several advantages that allow you to provision faster, with more efficiency, while reducing risk.**


---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
* 이미 만들어진 기존 인프라 변경 및 업데이트 (IaC로 관리)
???
**One of the main benefits of IaC is the ability to change and update what you built. There are many tools that allow you to provision infrastructure. This is sometimes called 'Day 0' of operations. The real challenge is managing Day N. What happens when you need to alter the infrastructure you built? Maybe you need to destroy or recreate part or all of it? Are you prepared to maintain and care for this infrastructure, without causing any downtime? Because Terraform is a _stateful_ tool, it can help you keep track of your infrastructure and change it with minimal impact.**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
* 이미 만들어진 기존 인프라 변경 및 업데이트 (IaC로 관리)
* dry run 모드 (**`terraform plan`**)를 사용한 안전한 인프라 변경
???
**Do you remember that scene in the movie Jurassic Park, where Samuel L Jackson turns around and says 'hold onto your butts' as he pushes his untested code change into production? Every sysadmin has had that feeling at one time or another. I really hope this works...**

**What if instead we had a way to safely test every change that went into production with a dry run? What would actually happen if I ran this code right now? Terraform comes with a built in dry run mode that allows you to visualize exactly what would happen if you pushed the apply button right now. This is a valuable tool for sysadmins and operations teams who prize stability and uptime.**

**Unexpected changes in the terraform plan output can be investigated _before_ they go into production.**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
* 이미 만들어진 기존 인프라 변경 및 업데이트 (IaC로 관리)
* dry run 모드 (**`terraform plan`**)를 사용한 안전한 인프라 변경
* 애플리케이션 배포 워크플로우(Git, Azure DevOps, CI/CD tools)와 연동

???
**Terraform allows you to automate manual processes and build continuous integration or continuous delivery pipelines. Imagine you had a pipeline for creating hardened machine images. Perhaps you have another pipeline for testing your infrastructure build process. These might be chained to other CI/CD application pipelines where the application is deployed into your tested, hardened infrastructure. Think of API driven infrastructure builds, written in a simple langage everybody can use and understand.**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
* 이미 만들어진 기존 인프라 변경 및 업데이트 (IaC로 관리)
* dry run 모드 (**`terraform plan`**)를 사용한 안전한 인프라 변경
* 애플리케이션 배포 워크플로우(Git, Azure DevOps, CI/CD tools)와 연동
* 공유와 협업이 쉽고, 재사용 가능한 모듈

???
**As you expand your terraform usage, you'll have certain patterns and pieces of your infrastructure that you'd like to re-use. Maybe you want your network security to be set up a certain way, every time. Or perhaps someone wrote a great Terraform config for your web application. Terraform supports custom modules, which are simply packages of pre-built Terraform code that others can use. You can use Terraform modules to avoid repetition, enforce security, and ensure that standards are followed.**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
* 이미 만들어진 기존 인프라 변경 및 업데이트 (IaC로 관리)
* dry run 모드 (**`terraform plan`**)를 사용한 안전한 인프라 변경
* 애플리케이션 배포 워크플로우(Git, Azure DevOps, CI/CD tools)와 연동
* 공유와 협업이 쉽고, 재사용 가능한 모듈
* 모듈을 통한 정책 및 운영 표준 강제 적용

???
**Terraform Enterprise also supports policy enforcement. You can create a list of dos and do-nots for your users and ensure that people don't build things they shouldn't, or introduce unnecessary risk into your environments. For example, you may have a policy that states that servers should not be exposed to the public internet. Because all your infrastructure is stored as code, you can quickly analyze that code to see if it's breaking any of the rules, preventing the bad behavior *before* the infrastructure gets built.**

---
name: IaC2
# 코드형 인프라(IaC)를 도입할 경우...
* 인프라 생성을 위한 코드화된 워크플로우 제공
* 이미 만들어진 기존 인프라 변경 및 업데이트 (IaC로 관리)
* dry run 모드 (**`terraform plan`**)를 사용한 안전한 인프라 변경
* 애플리케이션 배포 워크플로우(Git, Azure DevOps, CI/CD tools)와 연동
* 공유와 협업이 쉽고, 재사용 가능한 모듈
* 모듈을 통한 정책 및 운영 표준 강제 적용
* 서로 다른 팀간의 협업

???
**Now that all your infrastructure is stored in a source code repository, it's very easy for multiple users and teams to collaborate on it. Developer needs a new feature? He or she can easily adjust the source code and send the change back to the operations folks for review. Terraform is a universal language that is understood by both developers and operations teams.**

---
name: IaC-Tools
# 또 다른 코드형 인프라(IaC) 도구들
.center[![:scale 40%](images/infra_tools.png)]

이런 도구들은 운영 체제(OS)와 애플리케이션 구성을 위한 도구.<br>
클라우드 인프라와 플랫폼 서비스를 배포하기 위해 만들어진 도구가 아님.

???
**Some of you might be thinking, that sounds great but what about this other tool that I use? Why shouldn't I just use Ansible since we already have that? Or my people only do Powershell. These are all great tools. But none of them are specifically designed for provisioning tasks.**

**Chef, Puppet and Ansible all work great in the context of your operating system and applications. It's true that you can do some cloud provisioning with each of these tools, but none of them really work as well as Terraform. And conversely, HashiCorp doesn't have a configuration management tool. Terraform works great with all of these tools.**

---
name: Native-Tools
# 클라우드 서비스가 제공하는 프로비저닝 도구
.center[![:scale 90%](images/clouds.png)]

각 클라우드 서비스별로 YAML 또는 JSON 기반의 프로비저닝 도구를 제공.

Terraform은 **모든** 주요 클라우드 서비스 제공업체와 VM 하이퍼바이저를 지원.

???
**Every major cloud provider has their own JSON or YAML based provisioning tool. But all of them are written in YAML or JSON. And if you learn one of these systems, guess what, the others are completely different. Now if you want to have a multi-cloud strategy you have to learn three separate provisioning systems. With Terraform you are using the same language, the same simple syntax on all three of these cloud providers.**

---
name: Config-Hell
.center[![:scale 60%](images/Config_Hell.jpg)]
???
**This is a fun web comic. Those of you who have spent hours poking at a nested JSON template, trying to figure out which layer of curly braces you are in will understand this...**

---
Name: Terraform-vs-JSON
# Terraform vs. JSON
ARM JSON:
```json
"name": "[concat(parameters('PilotServerName'), '-vm')]",
```

Terraform:
```hcl
name = "${var.PilotServerName}-vm"
```

Terraform 코드 (HCL) 는 배우고 읽기 쉬움. 

JSON 구성과 동일한 구성 적용 시 50~70% 정도 간소화된 코드로 구성 가능.

???
1Password did a great blog post illustrating the difference between JSON configuration files and Terraform.

https://blog.1password.com/terraforming-1password/

1Password were able to move their entire production infrastructure to Terraform in a few short weeks. Now they can tear down and completely rebuild their production environment in a matter of hours.

---
Name: Why-Terraform
# 왜 Terraform일까?
![:scale 80%](images/azure-loves-terraform.png)

???
**Microsoft는 Terraform을 사용하여 Azure를 프로비저닝할 때 Azure 사용자가 최고의 경험을 가질 수 있도록 상당한 리소스를 투자했습니다. 특히 멀티 클라우드 전략을 채택하는 경우 Terraform을 사용하는 경우 친근한 Microsoft 솔루션 설계자가 기꺼이 지원해 드립니다. Terraform은 Azure CloudShell에도 내장되어 있습니다. 웹 브라우저에서 바로 제로 설정으로 Terraform을 사용할 수 있습니다.**

---
Name: Why-Terraform-on-Azure
# Azure 서비스 배포 시 왜 Terraform일까?

* 멀티 클라우드 와 하이브리드 인프라 지원

???
**Why specifcially should you use Terraform on Azure? The first reason is that Terraform supports your hybrid or multi-cloud strategy. If you need to build some infrastructure on-prem, and some in Azure, Terraform is a natural fit. Your technical staff only has to learn a single language to be able to provision in either environment.**

---
Name: Why-Terraform-on-Azure
# Azure 서비스 배포 시 왜 Terraform일까?

* 멀티 클라우드 와 하이브리드 인프라 지원
* 기존 클라우드 서비스에서 Azure로 마이그레이션

???
**Terraform is also great for migrating between cloud providers. Let's say you wanted to move some workloads to Azure. The code changes in Terraform would be much easier to implement than they would via ARM templates. I was able to migrate a simple demo application from one cloud to another in a few short hours, because there was almost no learning curve. Terraform code looks the same no matter where you run it.**

---
Name: Why-Terraform-on-Azure
# Azure 서비스 배포 시 왜 Terraform일까?

* 멀티 클라우드 와 하이브리드 인프라 지원
* 기존 클라우드 서비스에서 Azure로 마이그레이션
* 인프라 배포 속도 향상

???
**It's not unusual to see provisioning times drop from days or weeks to hours or minutes when users adopt Terraform. Ineffective manual steps and change approvals can be replaced with fast code pipelines that have rigorous testing and security built right in. Now instead of waiting for days for a change request to be approved, users can self-provision their infrastructure without bottlenecks or slow approval processes.**

---
Name: Why-Terraform-on-Azure
# Azure 서비스 배포 시 왜 Terraform일까?

* 멀티 클라우드 와 하이브리드 인프라 지원
* 기존 클라우드 서비스에서 Azure로 마이그레이션
* 인프라 배포 속도 향상
* 업무 효율 향상

???
**Have you heard the saying 'measure twice, cut once?'? Terraform forces your operations teams to be disciplined and consistent with every single build. Have a change or setting that was overlooked during the build? Now you can immediately correct that mistake inside the code, so that a particular step never gets missed again. All future builds will contain the change. This can also improve relations between developers and operations, because the contract is clear. What gets built is always defined in the code, and never left to guesswork or manual processes.**

---
Name: Why-Terraform-on-Azure
# Azure 서비스 배포 시 왜 Terraform일까?

* 멀티 클라우드 와 하이브리드 인프라 지원
* 기존 클라우드 서비스에서 Azure로 마이그레이션
* 인프라 배포 속도 향상
* 업무 효율 향상
* 리스크 감소

???
**Every modern IT organization has to deal with risk. It's a balancing act between security and usability. You can make it so secure nobody can use it, or on the other end you have a free for all where users can do whatever they want, but are putting the entire cloud account in jeopardy due to risky behavior. Terraform allows you to 리스크 감소 by abstracting your users away from the web UI or API. Instead we provide a safe, auditable abstraction layer that lets users get their work done in a secure and safe way, that doesn't grant unnecessary privileged access.**

---
name: Live-Demo
class: title
# Live Demo

???
**Let's do a short demo! I'm going to show you how easy it can be to provision infrastructure in Azure. I'll do the demo on one of the lab workstations that you'll be using for this training.**

**This is a workstation just like the ones you'll be using for today's workshops. I'm going to run a terraform apply command to build out the lab environment. We're actually cheating a little bit here, as we prebaked most of the environment before class to save us some time. Just like your favorite cooking show!**

**You can see the results of the terraform run here in my shell. This output is showing me the URL of the application server I just built. And if we pop over here to the Azure portal you'll see all of the different parts of my lab environment.**

**This is Infrastructure as code. By the end of today's training you'll be able to create your own infrastructure using Terraform.**

---
name: Chapter-2
class: title
# Chapter 2
## Terraform 기초

???
**Now that you have terraform installed and working with Azure, we can do a few dry runs before building real infrastructure. Follow along carefully, copying and pasting the commands on each slide into your shell as we go.**

---
name: what-is-terraform-community
class: img-left
# Terraform 오픈 소스는 
![Terraform](images\Terraform_VerticalLogo_FullColor.png)

Terraform 은 오픈 소스 배포 도구.

Go로 작성되고, 단일 바이너리 파일로 배포. 크로스 플랫폼을 지원하여, Linux, Windows, 및 MacOS 상에서 동작.

간단한 설치 방법 제공. Zip 파일 다운로드 방식 또는 OS별 Package 매니저를 통한 설치.

[링크: Azure 사용 시 Terraform 설치하기](https://learn.hashicorp.com/tutorials/terraform/install-cli?in=terraform/azure-get-started)

---
name: terraform-command-line
class: col-2
# Terraform CLI
Terraform Community Edition는 CLI 기반 도구.

Terraform 명령어는 직접 입력하거나 스크립트와 같은 도구를 이용한 자동화된 입력 시 사용 가능.

OS와 무관하게 동일한 명령어를 사용.

Terraform에는 서로 다른 동작을 수행하는 하위 명령어(subcommand)가 존재.

```terraform
# 기본 Terraform 명령어
terraform version
terraform help
terraform init
terraform plan
terraform apply
terraform destroy
```

---
name: terraform-help
# terraform help
```bash
*$ terraform help
Usage: terraform [-version] [-help] <command> [args]
...
Common commands:
    apply              Builds or changes infrastructure
    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    env                Workspace management
    fmt                Rewrites config files to canonical format
    graph              Create a visual graph of Terraform resources
```
`terraform subcommand help` 는 특정 하위 명령어(subcommand) 조회 시 사용
???
**This is a good command to know. Terraform help will reveal all the available subcommands.**

---
name: terraform-code
# Terraform 코드
```terraform
resource "azurerm_virtual_network" "vnet" {
  name                = "${var.prefix}-vnet"
  location            = "${azurerm_resource_group.myresourcegroup.location}"
  address_space       = ["${var.address_space}"]
  resource_group_name = "${azurerm_resource_group.myresourcegroup.name}"
}
```

Terraform 코드는 [HCL2 toolkit](https://github.com/hashicorp/hcl)기반. HCL은  "HashiCorp Configuration Language"의 약자. Terraform 코드 또는 그냥 *terraform* 이라고 하면 클라우드 또는 플랫폼 서비스 상의 인프라 배포를 위한 선언적 언어(declarative language)를 의미.

---
name: main.tf
# Terraform 코드에서 주석(Comment) 사용
한 줄 주석은 pound symbol(#) 또는 (//) 로 시작. 기본값은 #
```terraform
# 한 줄 주석.
```

여러 줄 주석(또는 블럭 주석)은 /\* 와 \*/를 시작과 마침 식별자로 사용.
```terraform
/* 여러 줄 주석.
블럭 주석은 여러 줄에 걸쳐 주석 지정 시 사용.
다음 기호를 사용하여 마침.: */
```


---
name: terraform-workspaces
# Terraform 워크 스페이스

Terraform 워크 스페이스 = Terraform 코드가 저장된 폴더 또는 디렉토리.

Terraform 코드 파일은 항상 `*.tf` 또는 `*.tfvars` 확장자를 사용하여 저장.

대부분의 Terraform 워크 스페이스는 다음과 같은 최소 3가지(3종류) 파일을 포함:

**main.tf** - 자원 생성을 위한 코드가 정의.<br>
**variables.tf** - 자원 생성 시 사용할 변수를 정의.<br>
**outputs.tf** - 자원 생성 이후 출력이 필요한 작업 결과를 정의.<br>

---
name: terraform-init
# terraform init : 초기화
```bash
*$ terraform init
Initializing the backend...
Initializing provider plugins...
- Checking for available provider plugins...
- Downloading plugin for provider "azurerm" (hashicorp/azurerm) 1.35.0...
...
provider.azurerm: version = "~> 1.35"

Terraform has been successfully initialized!
```
Terraform은 필요한 프로바이더와 모듈을 가져오고, .terraform 디렉토리에 저장. 사용하는 모듈 또는 프로바이더가 추가/변경되면, 반드시 `terraform init` 재 실행할 것.

???
**Terraform has an extendible architecture. You download the core program, terraform, then it fetches plugins and modules that are required for your code.**

---
name: terraform-plan
# terraform plan : 드라이 런(Dry Run)
```bash
*$ terraform plan
An execution plan has been generated and is shown below.
Terraform will perform the following actions:
  # azurerm_resource_group.myresourcegroup will be created
  + resource "azurerm_resource_group" "myresourcegroup" {
      + id       = (known after apply)
      + location = "koreacentral"
      + name     = "bugsbunny-workshop"
      + tags     = (known after apply)
    }
Plan: 1 to add, 0 to change, 0 to destroy.
```
`terraform plan` 명령어를 사용, 적용 전 변경 사항을 미리 확인

???
**`terraform plan` is a dry run command. We're not actually building anything yet, Terraform is just telling is what it would do if we ran it for real.**

---
name: defining-variables
# 변수(variable) 선언하기
Terraform 변수는 *variables.tf* 파일에 선언. 기본 값 지정 가능. 기본 값을 설정하지 않는 경우, 명령어 실행 시 Prompt 창을 통해 변수값 입력. 변수 사용 시 다음과 같이 *정의* 후 사용하게 됨.

```terraform
variable "prefix" {
  description = "자원 생성 시 접두어로 사용할 값 지정"
}

variable "location" {
  description = "virtual network이 생성될 지역"
* default     = "koreacentral"
}
```

???
**If you're curious where all these variables are defined, you can see them all in the _variables.tf_ file. Here we are simply defining all the available settings, and optionally declaring some default values. These defaults are what terraform will use if your user doesn't override them with their own settings.**

Q. Where could you override these defaults?<br>
A. In the terraform.tfvars file, or optionally on the command line or via environment variables. The most common approach is to use a tfvars file.

---
name: setting-variables
class: col-2
# 변수값 지정하기
변수 선언 이후, 다양한 방법으로 변수값 설정 가능하거나 오버라이드(override)가능. 

방법별 우선 순위는 다음과 같다.

<br>
다음 리스트는 우선 순위가 높은 방법(1)부터 낮은 방법(5) 순으로 나열.

1. CLI 플래그(flag) - 명령어 실행 시 `-var` 옵셤으로 지정
1. 구성 파일 - terraform.tfvars 파일에 설정
1. 환경 변수  - 작업 중인 Shell의 환경 변수로 설정
1. 기본 설정 - variables.tf 파알 상의 기본값 (default)
1. 사용자 직접 입력 - 변수값이 지정되지 않아 Prompt창에 입력하는 경우

---
name: lab-exercise-0
# 👩‍💻 Instruqt 기반 실습 환경 사용
<br><br>
[Instruqt](https://instruqt.com) 는 하시코프 교육 플랫폼. 아래 링크를 클릭하여 짥은 튜토리얼을 확인하거나, 사용 경험이 있는 경우 다음 슬라이드의 실습 진행.

[https://instruqt.com/instruqt/tracks/getting-started-with-instruqt](https://instruqt.com/instruqt/tracks/getting-started-with-instruqt)

---
name: lab-exercise-1
# 👩‍💻 Lab Exercise: Terraform 기초
<br><br>
이번 실습은 편집기(editor) 환경 설정, Terraform CLI 사용, 그리고 Azure Cloud 사용 시 설정 방법 등을 학습합니다.

제공해드린 링크를 통해 실습 환경에 접속하시기 바랍니다.

🛑 **STOP** **두 번째** 퀴즈까지만 수행!!!

---
name: chapter-2-review
# 📝 Chapter 2 복기
.contents[
이번 장에서 다룬 내용:
* **`terraform init`** 명령어 사용
* **`terraform plan`** 명령어 수행
* 변수 선언 및 변수 값 지정
* 실습 : 변수 값(배포 지역과 접두어) 지정
]

---
name: Chapter-3
class: title
# Chapter 3
## 테라폼 인 액션

???
**이번 장에서 다룬 내용'll actually build real infrastructure using our sample code.**

---
name: anatomy-of-a-resource
# 자원 생성 코드 예제
테라폼 코드 기반 자원 생성은 모두 다음과 같은 구조를 가짐.
```terraform
resource "type" "name" {
  parameter = "foo"
  parameter2 = "bar"
  list = ["one", "two", "three"]
}
```
**resource** = 최 상위 수준 키워드<br>
**type** = 리소스 타입 지정. (예: `azurerm_virtual_machine`)<br>
**name** = 이 자원을 위한 가상의 이름. 테라폼 내부에서 사용. 해당 필드는 변수 지정 *불가* 

???
Everything else you want to configure within the resource is going to be sandwiched between the curly braces. These can include strings, lists, and maps.

---
name: provider-block
class:compact
# Terraform 프로바이더 구성
테라폼(Terraform) 코어 프로그램은 인프라 생성을 위해 최소 하나 이상의 프로바이더 필요. 사용할 프로바이더 버전 지정 가능. 지정하지 않는 경우, 해당 프로바이더에서 사용 가능한 버전 중 최선 버전을 사용.

```terraform
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.46.0"
    }
  }
}

provider "azurerm" {
  features {}
}
```

???

---
name: resources-building-blocks
# 리소스(resource) - 테라폼 기본 빌딩 블럭
```hcl
resource "azurerm_resource_group" "hashitraining" {
  name     = "${var.prefix}-workshop"
  location = "${var.location}"
}
```

실습 시 처음 생성할 자원의 샘플 코드. 변수는 환경 상에 설정하거나 기본값을 설정.

테라폼은 사용하기 쉽고, 작성한 코드에 대한 테스트도 가능.

인프라 구성을 위해 필요한 블럭만 추가하면 *끝!*

???
**Try commenting out this code, then uncommenting it. This is the easy way to write code. Just highlight, uncomment, save the file.**

**Resources are the smallest building blocks of Terraform. Think of them as declarative statements about what you want to build. Save the main.tf file.**

**Note that the resource contains references to the two variables we set in the previous chapter, location and prefix. These will be replaced when we run terraform commands. Variables are always enclosed in a dollar sign and curly braces.**

---
name: terraform-apply
class: compact
# terraform apply : 인프라 배포
```bash
*$ terraform apply
An execution plan has been generated and is shown below.

Terraform will perform the following actions:
  # azurerm_resource_group.myresourcegroup will be created
  + resource "azurerm_resource_group" "myresourcegroup" {
      + id       = (known after apply)
      + location = "koreacentral"
      + name     = "hashicorp-workshop"
      + tags     = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```
`terraform apply` 명령어를 수행하고, 승인하는 경우 변경 사항이 적용됨. 

---
name: terraform-destroy
class: compact
# terraform destroy : 인프라 삭제
```bash
*$ terraform destroy
An execution plan has been generated and is shown below.

Terraform will perform the following actions:

  # azurerm_resource_group.myresourcegroup will be destroyed
  - resource "azurerm_resource_group" "myresourcegroup" {
      - id       = "/subscriptions/14692f20-9428-451b-8298-102ed4e39c2a/resourceGroups/hashicorp-workshop" -> null
      - location = "koreacentral" -> null
      - name     = "hashicorp-workshop" -> null
      - tags     = {} -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.
```
`terraform destroy`는 `terraform apply`와 정반대 동작. 승인 시 *테라폼으로 생성한 인프라*를 삭제.
???
**Terraform can just as easily destroy infrastructure as create it. With great power comes great responsibility!**

---
name: terraform-fmt
# terraform fmt : 코드 포맷팅
Terraform 내장된 코드 포매터/클리너 제공. [Terraform Language Style Conventions](https://www.terraform.io/docs/language/syntax/style.html)에 따라 코드 상의 공백, 들여쓰기 등 형식에 맞는 포맷과 스타일로 테라폼 코드 수정. <br> [HashiCorp Principles](https://www.hashicorp.com/our-principles#beauty-works-better) 중 '보기 좋은 것이 더 낫다!'의 구현.

```bash
terraform fmt
```

작성한 코드(*.tf)가 저장된 폴더 또는 디렉토리에서 명령어를 수행하면, 작성된 코드에 대한 정리를 수행.

---
name: dependency-mapping
class: compact

# 자원 생성 시 의존성

Terraform은 자동은 자원 생성 시 자원간 의존성을 점검. 아래 두 개의 리소스를 보자. `azurerm_virtual_network` 리소스가 강조되어 표기. 아래와 같이 하나의 리소스를 다른 리소스에서 참조하게 설정. 

```terraform
resource "azurerm_resource_group" "hashitraining" {
  name     = "${var.prefix}-vault-workshop"
  location = "${var.location}"
}

resource "azurerm_virtual_network" "vnet" {
  name                = "${var.prefix}-vnet"
  location            = "${azurerm_resource_group.hashitraining.location}"
  address_space       = ["${var.address_space}"]
* resource_group_name = "${azurerm_resource_group.hashitraining.name}"
}
```

???

---
name: organizing-your-terraform
# Terraform 코드 관리하기
테라폼은 `.tf` 확장자로 끝나는 파일들이 포함된 워크 스페이스 상의 모든 파일을 읽음. 통상main.tf, variables.tf, 그리고 outputs.tf로 구성. 필요한 경우 파일 추가 가능.

```bash
main.tf
variables.tf
outputs.tf
```

각각의 파일들을 자세히 살펴 보겠습니다.

---
name: terraform-main
class: compact
# 메인 파일 (main.tf) - 자원 생성

첫 번째 파일 main.tf. 자원 생성을 위한 테라폼 코드를 저장. 크고 복잡한 인프라의 경우 여러 개의 파일로 분리 가능.

```terraform
# 이 파일은 main.tf 입니다.
resource "azurerm_resource_group" "hashitraining" {
  name     = "${var.prefix}-vault-workshop"
  location = "${var.location}"
}

resource "azurerm_virtual_network" "vnet" {
  name                = "${var.prefix}-vnet"
  location            = "${azurerm_resource_group.hashitraining.location}"
  address_space       = ["${var.address_space}"]
  resource_group_name = "${azurerm_resource_group.hashitraining.name}"
}
...
```



---
name: terraform-variables
class: compact
# 변수 지정 (variables.tf) - 변수 선언

두 번째 파일 variables.tf. 변수를 선언하기 위한 용도. 경우에 따란 변수의 기본값 설정 가능.

```terraform
variable "prefix" {
  description = "자원 생성 시 접두어로 사용할 값 지정"
}

variable "location" {
  description = "Virtual Network이 생성될 지역"
  default     = "koreacentral"
}

variable "address_space" {
  description = "virtual network에서 사용할 주소공간 지정. 하나 이상의 주소 공간 지정 가능. 이 값을 변경하는 경우, 신규로 Virtual Network이 생성됨"
  default     = "10.0.0.0/16"
}
```

---
name: terraform-outputs
class: compact

# 작업 결과 출력(outputs.tf) - 작업 결과 확인
 outputs.tf 파일은 `terraform apply`결과를 원하는 메시지 또는 데이터로 화면에 보여줌.

```terraform
output "Vault_Server_URL" {
  value = "http://${azurerm_public_ip.vault-pip.fqdn}:8200"
}

output "MySQL_Server_FQDN" {
  value = "${azurerm_mysql_server.mysql.fqdn}"
}

output "catapp_url" {
  value = "http://${azurerm_public_ip.catapp-pip.fqdn}"
}
```

???
**This bit here with the EOF is an example of a HEREDOC. It allows you store multi-line text in an output.**

---
name: tf-dependency-graph
class: img-right
# 자원 의존성 그래프
.center[![:scale 80%](images/blast_radius_graph_3.png)]

테라폼 자원 그래는 자원 사이의 의존성을 시각적으로 묘사.

아래 그래프를 보면, `azurerm_virtual_network`을 생성하기 위해서 필요한 `azurerm_resource_group`은 location과 prefix 변수값가 필요.

???
This is a good spot to talk a bit about how the dependency graph gets formed.

---
name: lab-exercise-2a
# 👩‍💻 Lab Exercise: 테라폼 인 액션
테라폼을 사용하여 Azure 상에서 자원의 생성, 관리 및 삭제를 실습. 이번 실습은  `terraform apply` 명령어를 사용하여 HashiCat 애플리케이션 스택을 배포.

🛑 **STOP** **세 번째** 퀴즈까지만 수행!!!

???
**We will explore the Terraform Graph together once everyone has completed the lab. Once you have the graph running in your instruqt lab stop there.**

---
name: chapter-3-review
# 📝 Chapter 3 복기

이번 장에서 다룬 내용:
* Terraform 자원(Resource)
* 다음 명령어 수행 :terraform plan, graph, apply and destroy
* 자원 간 의존성
* 실습 : 의존성 그래프 확인, 주요 파일 확인(main.tf, variables.tf, outputs.tf)
* Meow World 애플리케이션 배포

---
name: Chapter-4
class: title
# Chapter 4
## Azure에 VM 배포 및 구성

---
name: intro-to-provisioners
# Terraform 프로비저너(Provisioner) 사용하기
테라폼을 사용하여 VM 또는 Container를 배포한 후, OS 또는 애플리케이션에 대한 변경이 필요한 경우. 테라폼에서 지원하는 프로비저너(provisioner)를 사용. 

다음과 같은 프로비저너를 지원:  Bash, Powershell, Chef, Puppet, Habitat 등

.center[https://www.terraform.io/docs/provisioners/index.html]

???
**Terraform works hand-in-hand with these other configuration management tools to install packages, configure applications and change OS settings inside of a virtual machine or container.**

---
name: file-provisioner
class: compact
# 파일 프로비너저 : 파일 복사
테라폼 파일 프로비저너는 원격 머신에 파일을 복사.

```terraform
provisioner "file" {
  source      = "files/"
  destination = "/home/${var.admin_username}/"

  connection {
    type     = "ssh"
    user     = "${var.admin_username}"
    password = "${var.admin_password}"
    host     = "${azurerm_public_ip.catapp-pip.fqdn}"
  }
}
```

Note 프로비저너 블록 내부에 *connection* 블럭 필요. 파일 프로비저너는 SSH와 WinRM 연결 모두 지원.

???
SSH for linux, WinRM for your windows machines.

---
name: remote-exec-provisioner
class: compact
# 원격 실행 프로비저너 (remote-exec)
원격 실행 (remote-exec) 프로비너저는 대상 시스템에서 스크립트 또는 프로그램 실행 시 필요할 때 사용. 사용자 개입없이 수행할 수 있는 경우(예, 소프트웨어 인스톨러), 원격 실행 프로비저너로 수행 가능.

```terraform
provisioner "remote-exec" {
  inline = [
    "sudo chown -R ${var.admin_username}:${var.admin_username} /var/www/html",
    "chmod +x *.sh",
    "PLACEHOLDER=${var.placeholder} WIDTH=${var.width} HEIGHT=${var.height} PREFIX=${var.prefix} ./deploy_app.sh",
  ]
...
}
```

예제 코드에서는 CLI 명령어(파일 권한 및 소유권 변경) 와 스크립트(환경 변수 설정)를 수행.

???
Local exec and remote exec can be used to trigger Puppet or Ansible runs. We do have a dedicated chef provisioner as well.

---
name: puppet-chef-ansible
class: compact
# 테라폼과 구성 관리 도구들
.center[![:scale 50%](images/cpa.jpg)]

테라폼은 잘 알려진 구성 관리 도구(예: Chef, Puppet or Ansible)와 잘 연동. 아래 링크에서 상세 정보 확인 가능:

Official Chef Terraform provisioner:<br>
https://www.terraform.io/docs/provisioners/chef.html

Run Puppet with 'local-exec':<br>
https://www.terraform.io/docs/provisioners/local-exec.html

Terraform and Ansible - Better Together:<br>
https://github.com/scarolan/ansible-terraform

---
name: provisioner-tips
# 테라폼 프로비저너 사용 팁!
원격 실행 프로비저너 처럼 단순 명령어나 스크립트를 수행하는 테라폼 프로비저너는 좋은 도구. 하지만 복잡한 구성 변경이 필요한 경우 구성 관리 도구를 사용하는 것이 나음.

특히, 프로비저너는 인프라가 생성될 때 최초 1회만 구동. 즉, 멱등성(idempotent)이 지원되지 않음. 오랜 시간 기동되어 서비스하는 VM 또는 서버의 경우, 구성 관리 도구를 통한 관리를 권고.

반면, 불변 인프라(immutable infrastructure)를 원하는 경우라면, <br>[HashiCorp Packer](https://packer.io) 사용을 권고.

---
name: lab-exercise-2b
# 👩‍💻 Lab Exercise: 프로비저너, 변수와 결과 값 출력
이번 실습에서는 프로비저너를 사용하여 신규 소프트웨어 패키지 설치하고 변수와 작업 결과 출력에 대하여 알아 봄.


🛑 **STOP** **네 번째** 퀴즈까지만 수행

---
name: chapter-4-review
# 📝 Chapter 4 복기
.contents[
이번 장에서 다룬 내용:
* 테라폼 프로비저너
* 파일(**file**) 과 원격 실행(**remote-exec**) 프로비저너
* 실습: 새로운 프로비저닝 스텝으로 웹 서버 재구축
]

---
name: Chapter-5
class: title
# Chapter 5
## Terraform 상태(state) 관리

---
name: terraform-state
class: compact, smaller
# Terraform 상태(state)
테라폼은 _stateful_한 애플리케이션.즉, **state file**을 이용하여 인프라 배포 관련 모든 기록을 저장. 작업 디렉토리 상에 `terraform.tfstate` 와 `terraform.tfstate.backup` 파일이 존재. 이 파일들은 인프라의 변경 사항을 모두 기록하고 저장. 

```json
{
  "terraform_version": "0.11.13",
  "lineage": "983e6899-96f4-ce60-744e-7123bb1fc315",
  "modules": [
    {
      "path": [
          "root"
      ],
    },
  ],
}
```

---
name: terraform-refresh
# terraform refresh : 형상과 상태 동기화
테라폼이 아닌 방법으로 인프라 형상에 대한 변경이 발생하였을 때.
state 파일은 *마지막으로 알고 있는* 인프라의 상태를 저장하고 있으므로, 현재 형상과 저장된 상태를 동기화(일치)하고자 할 때 **terraform refresh** 명령어 사용. 배포된 인프라 아닌 *state 파일*만 변경(업데이트)함. 

```bash
terraform refresh
```

Note : 0.15.4 버전부터 `-refresh-only` 옵션을 apply, plan 시 다음과 같이 사용
```bash
terraform apply -refresh-only
```


---
name: change-existing-infra
class: compact
# 기존 인프라 변경

plan 또는 apply 수행 시, 테라폼은 다음과 같은 서로 다른 데이터 소스의 정보를 일치시키려 함:

1.  코드 상에 작성된 내용
2.  state 파일
3.  실제 인프라 형상

테라폼은 작성된 코드 상에 있는 내용을 기반으로 인프라 생성, 삭제, 변경 또는 교체를 수행. plan/apply 실행 시 개별 리소스에 대음과 같은 4가지 중 하나가 적용:

```terraform
+   create (신규 생성)
-   destroy (삭제)
-/+ replace (교체)
~   update in-place (변경)
```

---
name: state-quiz
class: compact
# Terraform 상태 관련 퀴즈
| Configuration (코드)     | State 파일               | 실제 인프라                | 예상 동작   |
| ----------------------- | ----------------------- | ----------------------- |:---------:|
| azurerm_virtual_machine |                         |                         |    ???    |
| azurerm_virtual_machine | azurerm_virtual_machine |                         |    ???    |
| azurerm_virtual_machine | azurerm_virtual_machine | azurerm_virtual_machine |    ???    |
|                         | azurerm_virtual_machine | azurerm_virtual_machine |    ???    |
|                         |                         | azurerm_virtual_machine |    ???    |
|                         | azurerm_virtual_machine |                         |    ???    |

각 시나리오에서 어떻게 동작할까요?

---
name: state-quiz-answers
class: compact
# Terraform 상태 관련 퀴즈 (정답)
| Configuration (코드)     | State 파일               | 실제 인프라                | 예상 동작   |
| ----------------------- | ----------------------- | ----------------------- |:------------:|
| azurerm_virtual_machine |                         |                         | create       |
| azurerm_virtual_machine | azurerm_virtual_machine |                         | create       |
| azurerm_virtual_machine | azurerm_virtual_machine | azurerm_virtual_machine | no-op        |
|                         | azurerm_virtual_machine | azurerm_virtual_machine | delete       |
|                         |                         | azurerm_virtual_machine | no-op        |
|                         | azurerm_virtual_machine |                         | update state |

각 시나리오에서 어떻게 동작할까요? 이해가 되시나요?

---
name: Chapter-6
class: title
# Chapter 6
## Terraform 클라우드

---
name: hcp-terraform
class: img-right
# Terraform 클라우드
##### Terraform 클라우드는 무료로 제공되는 SaaS 애플리케이션. 테라폼을 활용한 코드형 인프라(IaC)를 위한 최상의 Workflow를 제공.
![HCP Terraform](https://hashicorp.github.io/field-workshops-assets/assets/logos/Terraform_Cloud_Logo_Color_RGB.png)

* 원격 스테이트 파일 저장 및 관리
* Terraform runs 조회 및 실행/승인 등을 위한 Web UI
* 프라이빗 모듈 저장소
* 버전 관리 시스템 (VCS) 연동 
* 다양한 인프라 배포 방법 지원
* 인프라 작업에 대한 통보(알림)
* 자동화를 위한 완벽한 HTTP API

---
name: hcp-terraform-vs-tfe
class: compact
# Terraform 클라우드 ? Terraform 엔터프라이즈 ?
**[HCP Terraform](https://app.terraform.io/signup)** : 원격 상태 관리, API 기반 배포, 정책 관리 등을 제공하는 SaaS 애플리케이션. 인프라 유지/보수 및 운영에 대한 부담없이 Terraform을 사용하고자 하는 경우 선호. 무료.

**[HCP Terraform Plus Tier](https://www.hashicorp.com/contact-sales/terraform)** HCP Terraform와 동일한 환경을 사용하지만 보다 다음과 같은 기능이 필요한 경우 사용 (유상): SSO, Audit 로그 및 Terraform Enterprise에서 제공되는 다양한 상용 기능

**[Terraform Enterprise](https://www.hashicorp.com/go/terraform-enterprise)** 사용자가 원하는 환경에서 설치하여 사용. 동일한 애플리케이션. 단 인프라에 대한 관리 필요. 인프라를 직접 관리하고, 제한된 네트워크 환경에서 사용해야 하는 경우 적합. (유상)

대부분의 기능이 유사하고, 구독에 따라 기능이 추가. 실습의 경우, 무료 버전의 HCP Terraform 사용.

---
name: hcp-terraform-remote-state
# Terraform 원격 상태 관리
기본적으로 테라폼은 작업자의 노트복 또는 콘솔 상의 작업 디렉토리에 상태 파일을 저장. 개발 또는 테스트 환경에서는 사용 가능하지만, 운영/가동계 환경에서 스테이트 파일을 보호하고 안전하게 관리하기에는 어려움이 존재.

테라폼은 스테이트 파일을 원격에 저장하는 다양한 옵션을 제공. 그 중 무료 버전의 HCP Terraform 계정을 사용해도 스테이트 파일을 무제한 저장하고 관리 가능.

내장된 [HashiCorp Vault](https://vaultproject.io)를 사용하여 모든 스테이트 파일은 **암호화**하여 저장. 스테이트 파일 분실이나 삭제에 대한 이슈가 사라짐. 

---
name: execution-mode
# Terraform 클라우드 실행 모드

**Local Execution** - 테라폼 명령어가 내 작업 환경(노트북 또는 콘솔)에서 실행됨.모든 변수와 코드가 로컬에 존재. 스테이트 파일만 원격에 저장.

**Remote Execution** - 테라폼 명령어가 테라폼 클라우드 상에서 수행. 모든 변수가 원격 워크 스페이스에 저장. 코드는 VCS 또는 로컬 작업 환경에 저장 가능. 무료 버전의 경우, 동시 실행은 사용자 한 명으로 제한됨.

---
name: lab-exercise-2c
# 👩‍💻 Lab Exercise: HCP Terraform
마지막 실습으로 Terraform 클라우드 상에 계정을 생성하고, 스테이트 파일을 마이그레이션.


---
name: the-end
class: img-caption

# 수고하셨습니다!
![HashiCorp Employees - 2019](https://storage.googleapis.com/instruqt-hashicorp-tracks/terraform-shared/hashicorp_employees.jpg)

---
name: additional-resources
class: compact
# 추가 리소스
HashiCorp Learning Portal<br>
https://learn.hashicorp.com/terraform/

Azure의 Terraform 설명서<br>
https://docs.microsoft.com/ko-kr/azure/developer/terraform/

Bash를 사용하여 Azure Cloud Shell에서 Terraform 구성<br>
https://docs.microsoft.com/ko-kr/azure/developer/terraform/get-started-cloud-shell-bash?tabs=bash

Terraform Azurerm Provider Documentation<br>
https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs

Link to this Slide Deck<br>
https://git.io/JucLg

---
name: Feedback-Survey
# Workshop Feedback Survey
<br><br>
.center[
여러분의 피드백은 저희에게 소중합니다!

설문조사는 간단합니다. 약속드립니다.

## https://forms.gle/jc3KPYEoKo7LS5Be8
]
