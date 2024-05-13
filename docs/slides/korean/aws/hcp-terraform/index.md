name: Intro-to-hcp-terraform
class: center,middle,title-slide
count: false
<br><br>
![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tf_aws.png)
<br><br>

# HCP Terraform on AWS

???
HCP Terraform on AWS 워크숍에 오신 것을 환영합니다. 이 워크샵은 AWS 기반 애플리케이션을 사용하여 HCP Terraform (Enterprise)의 무료 및 유료 기능을 소개하는 1 일 워크샵입니다. Terraform을 처음 사용하는 경우 AWS Instruqt 트랙에서 Terraform Community Edition 소개 트랙을 먼저 수행해야 합니다.

HCP Terraform와 Terraform Enterprise는 거의 동일한 기능 세트를 가지고 있으므로 교육 환경으로 HCP Terraform를 사용합니다.

강사 가이드 링크: https://github.com/hashicorp/field-workshops-terraform/blob/main/instructor-guides/all_hcp_terraform_INSTRUCTOR_GUIDE.md

소개 노트: HCP Terraform on AWS에 오신 것을 환영합니다. 이 슬라이드 데크는 전적으로 Markdown 언어로 작성되었으므로 편집하거나 추가 한 다음 풀 요청을 제출하여 변경 사항을 메인 브랜치에 추가 할 수 있습니다. 슬라이드 데크를 편집하려면이 저장소를 포크하고 Markdown 파일을 편집 한 다음 변경 사항과 함께 풀 요청을 제출하면됩니다. 이 파이썬 한 줄로 슬라이드 데크의 로컬 복사본을 쉽게 테스트 할 수 있습니다.:

```
python -m SimpleHTTPServer
```

Markdown 콘텐츠는 docs/slides 하위 디렉터리에 포함되어 있습니다.

다음은 강사 또는 참가자에게 유용한 키보드 단축키입니다.

⬆ ⬇ ⬅ ➡-앞뒤로 탐색
P              -발표자보기 전환
C              -프레젠테이션을위한 외부 창 열기

강사 메모는 일반 텍스트로, 설명 부분은 **굵게** 표시됩니다. 내러티브 인용문을 사용하거나 자신의 프레젠테이션 스타일에 맞게 변경할 수 있습니다.

실습은 Instruqt (www.instruqt.com) 플랫폼에서 수행됩니다. Instruqt에 대한 모든 정보는 여기에서 확인할 수 있습니다.:
https://hashicorp.atlassian.net/wiki/spaces/SE/pages/511574174/Instruqt+and+Remark+Contributor+Guide

---
layout: true

.footer[
- Copyright © 2021 HashiCorp
- ![:scale 100%](https://hashicorp.github.io/field-workshops-assets/assets/logos/HashiCorp_Icon_Black.svg)
]

---
name: Introductions
# 참여자 소개 시간

- 이름 :
- 직책 :
- 경험 공유 :

???

이 슬라이드를 사용하여 자신을 소개하고 배경 이야기를 약간 제공 한 다음 모든 참가자가 자신을 소개하도록합니다.

"가장 좋아하는 텍스트 편집기" 같은 질문은 좋은 분위기를 만들어 주지만, 더 중요한 것은 사용자가 얼마나 기술적인지 즉시 측정 할 수 있다는 것입니다.

Terraform을 사용하기 위해 vi의 전문가 일 필요는 없습니다. 오늘 실습 랩에서는 Visual Studio Code 또는 vim을 사용하여 일부 파일을 편집합니다.

---
name: hcp-terraform-link-to-slide-deck
# The Slide Deck
<br><br><br>
.center[
Follow along on your own computer at this link:

# https://hashicorp.github.io/field-workshops-terraform/slides/korean/aws/hcp-terraform/
]

???
이 워크숍에서 일반적으로 듣는 첫 번째 질문은 "슬라이드를 공유해주실 수 있나요?"입니다. 대답은 '당연하죠' 이며 다운로드를 정말 쉽게 만들었습니다. 사실, 그것은 단지 웹 사이트 일뿐입니다. 이 링크를 열면 자신의 노트북에서 따라갈 수 있습니다. 탐색하려면 화살표 키를 사용하십시오.

---
name: Table-of-Contents
class: col-2
# Table of Contents

<div>
1. Community Edition to HCP/Enterprise<br>
🌥️ HCP Terraform의 개요<br>
👨🏽‍🏫 기본 살펴보기<br>
🔗 Remote State 구성하기<br>
<hr>
2. Security and RBACs<br>
🔐 민감한 변수 보호<br>
🛡️ 접근제어 작업<br>
<hr>
3. VCS & Policy Enforcement<br>
🕸️ Connect to VCS<br>
👬 Collaboration with VCS<br>
👮 Sentinel policy enforcement (정책 코드화 실행)<br>
<hr>
4. Terraform Modules & API<br>
⚙️ Terraform Private Registry<br>
🏗️ API 기반의 워크플로우<br>
<hr>
5. Extra Resources<br>
⚗️ Bonus Lab<br>
🌐 Useful Links
</div>

???
이것은 우리의 목차입니다. 오늘 다루어야 할 많은 근거가 있습니다. 워크샵은 강의와 실습을 번갈아 가며 진행해야 지루하지 않고 졸리지 않습니다. 대략 90 분마다 휴식을 취하고 점심 시간에는 45 분 휴식을 취합니다.

이것을 하루 종일 워크숍으로 발표하는 경우 EAM 또는 스폰서가 점심을 준비했는지 확인하십시오.

---
name: TFE-Chapter-1
class: title

# Chapter 1
## Terraform Community Edition, HCP Terraform, and Terraform Enterprise

???
**첫 번째 장에서는 Terraform 오픈 소스와 Community Edition와 클라우드 및 엔터프라이즈 간의 몇 가지 차이점을 다룰 것입니다.**

---
name: terraform-user-journey
# Terraform 사용자의 여정
.center[
<iframe width="560" height="315" src="https://www.youtube.com/embed/BlFKzTyjaTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

]

https://www.hashicorp.com/resources/terraform-adoption-journey

???
**일반적인 Terraform 사용자 여정부터 시작하겠습니다. CTO 인 Armon Dadgar가 Terraform 채택 단계가 어떤 것인지 설명합니다.**

사운드 설정이 좋으면 시청자를 위해 Armon의 비디오를 재생하면됩니다. 또는 비디오를보고이 화이트 보드 대화를 직접 수행하는 방법을 배워야합니다.

---
name: infrastructure-as-code
class: col-2
# Infrastructure as Code

* Terraform 코드는 HCL로 작성되었습니다.
* 수동으로 리소스를 생성하는 작업은 이제 그만하세요.
* 모든 것을 반복 작업이 가능한 Terraform 구성으로 넣으십시오.
* 모든 빌드 단계는 이제 코드로 표현됩니다.
* 무언가를 다시 만들어야한다면 훨씬 쉽습니다!

![Terraform Code on AWS](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/code_example.png)

???
**Terraform의 핵심은 코드로서의 인프라 개념입니다. 일련의 수동 작업 또는 테스트 및 최신 상태가 아닐 수있는 오류가 발생하기 쉬운 셸 스크립트로 물건을 구축하는 대신이 간단한 도메인 특정 언어 또는 테라 폼으로 모든 인프라 구축 단계를 표현합니다. Terraform 구성 구문의 공식 이름은 HashiCorp Configuration Language (HCL)입니다. 이 언어는 초보자에게는 쉽고 전문가에게는 강력합니다. 인프라의 DNA라고 생각하십시오. **

---
name: multi-platform-compliance
# 보유한 모든 인프라 관리
.center[
![:scale 80%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/terraform_on_prem.png)
]

Terraform은 또한 온 프레미스 VM 또는 플랫폼 서비스와 통합됩니다.

???
HCP Terraform 및 Enterprise는 데이터 센터에서 VM을 구축하거나 클라우드에서 AWS 인스턴스를 구축하는 데 사용할 수 있습니다. 하이브리드 클라우드 플랫폼을 구축하기 위해 서로 다른 두 가지 도구를 사용할 필요가 없습니다.

---
name: self-service-infra
# 셀프서비스 인프라

.center[
![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/self_service.png)
]

특정 사용자가 막대한 비용을 지출하거나 정책에 위반되는 프로비저닝 같은, 조직을 위험에 빠뜨리지 않고 필요한 것을 구축 할 수 있도록 합니다.

???
**HCP Terraform는 재사용 가능한 모듈 및 정책 시행을 통해 안전한 프로비저닝을 권장합니다. 이제 사용자는 업무를 중단하거나 조직을 위험에 빠뜨리지 않고 업무를 수행하는 데 필요한 것을 정확하게 구축 할 수 있습니다. 자동화가 수동 코드 검토없이 모범 사례를 적용하기 때문에 느리고 번거로운 승인 프로세스가 더 이상 필요하지 않습니다.**

---
name: hcp-terraform-what-is-it
# HCP Terraform - 최종 상태

.center[
![:scale 90%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/cloud_overview_aws.png)
]

???
이 슬라이드는 워크샵의 최종 상태를 보여줍니다. 왼쪽에는 인프라 담당자가 나머지 사용자가 자신의 테라 폼 코드로 구현할 수있는 재사용 가능한 모듈을 만들었습니다. 이러한 모듈은 네트워크 및 VM과 같은 인프라 구성 요소가 매번 올바르게 구축되도록 보장하고 사용자가 "올바른 항목"을 쉽게 구축 할 수 있도록합니다.

다음 단계에서 사용자는 Terraform 코드를 작성하고이를 Version Control System(VCS)에 체크인합니다. 이를 통해서 운영환경을 위한 모든 변경 사항이 기록되고 검토됩니다. 이부분이 매우 중요합니다. 그리고 모든 개발자와 인프라 관리자의 규율과 협력이 필요합니다. 새 코드가 마스터 브랜치에 커밋되면 HCP Terraform (또는 Enterprise)에서 계획이 트리거됩니다.

HCP Terraform를 Terraform을 위한 원격 실행장소, 또는 상태 관리 플랫폼으로 생각하십시오. 이제는 클라우드 프로비저닝을 위해 랩톱에서 terraform을 실행하지 않습니다. 대신 모든 테라 폼 실행은 SaaS 플랫폼에서 실행되는 보안 Docker 컨테이너 또는 자체 데이터 센터에서 수행합니다. 이를 통해 모든 API 키, 변수 및 테라 폼 상태 파일을 암호화하고 보호 할 수 있습니다. 권한이있는 사용자에게만 액세스가 허용됩니다.

모든 Terraform 상태 파일은 서버 측에 안전하게 저장되고 암호화됩니다. 인프라를 변경해야 할 때마다 Terraform은 마지막 상태를 알고 변경 사항을 기반으로 점진적으로 빌드 할 수 있습니다. 클러스터에 더 많은 인스턴스를 추가해야합니까? 문제 없습니다. terraform은 완전한 분해 및 재구성 없이도 이를 수행 할 수 있습니다.

모든 Terraform을 적용하기 전에 제안 된 인프라 계획에 대해 Sentinel 정책 검사를 실행하여 정책 위반을 포착 할 수 있습니다. 예를 들어 개발자가 실행하는 데 많은 비용이 드는 엄청 큰 인스턴스를 만드는 것을 원하지 않을 수 있습니다. 개발자 작업 공간을 m3.medium 크기의 인스턴스 만 사용하도록 제한하는 간단한 규칙을 작성할 수 있습니다.

역할 기반 액세스 제어(RBAC)를 통해 다양한 유형의 사용자가 액세스 수준에 따라 Terraform 클라우드와 상호 작용할 수 있습니다. 조직의 모든 것을 제어 할 수있는 최고 관리자와 terraform을 실행할 수 있지만 개발 환경에서만 가능한 일반 사용자가있을 수 있습니다. 다른 그룹은 변경 사항을 운영환경에 푸시 할 수 있지만 일부 사용자는 읽기 전용 액세스 권한을 가질 수 있습니다. HCP Terraform / Enterprise는 진정한 멀티 테넌트 환경을 제공합니다.

---
name: why-hcp-terraform-1
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

???
HCP Terraform 기능과 그 기능이 중요한 이유에 대한 간략한 목록을 살펴 보겠습니다.

---
name: why-hcp-terraform-2
class: img-right

# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경

???
실제 사용자나 팀이 Terraform에서 표준화 작업을 시작하면 다양한 유형의 사용자를 갖게됩니다. 이미 사용하거나 도입에 대한 테스트를 하는 경우, 여러분 대부분은 테라 폼 전문가가 될 것입니다.하지만 무언가를 만들고 싶어하는 사람들이있을 수 있습니다. 그들은 당신과 같은 사람들이 작성한 테라 폼 코드를 사용할 수 있습니다. 이 프로세스를 쉽게하기 위해 웹 애플리케이션이 있습니다. 로그온하고 버튼을 클릭하면 인프라가 나타납니다.

---
name: why-hcp-terraform-3
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경
* API 기반의 워크플로우

???
완전한 기능을 갖춘 RESTful API가 있습니다. 이것은 terraform 기능에 대한 프로그래밍 방식 액세스에 유용합니다. API 인터페이스를 사용하여 Terraform Plan을 실행하고 명령을 적용 할 수 있습니다. CI/CD 파이프 라인이있는 경우 프로세스의 일부로 Terraform 빌드를 자동화 할 수 있습니다.

API는 모든 최신 클라우드 자동화 시스템의 구성 요소입니다. 잘 정의 된 표준 API를 사용하면 인프라 파이프 라인이 향후 변경 사항에 대응할 준비가되어 있는지 확인할 수 있습니다.

---
name: why-hcp-terraform-4
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경
* API 기반의 워크플로우
* STATE의 중앙 관리

???
Terraform enterprise는 상태 파일을위한 안전하고 안전한 스토리지도 제공합니다. 중요한 상태 파일을 누군가의 랩톱에 저장하는 대신 이제 HCP Terraform 애플리케이션에 안전하게 저장합니다. State 파일에 접근할 수 있는 사람 만 볼 수 있으며 덮어 쓰거나 손상되지 않도록 보호됩니다.

---
name: why-hcp-terraform-5
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경
* API 기반의 워크플로우
* STATE의 중앙 관리
* Terraform Private Registry

???
결국 회사의 다른 사용자 및 팀을 위해 공유하고 게시 할 수있는 Terraform 코드 라이브러리가 생깁니다. Terraform Private Registry는 이것을 쉽게 만듭니다. 표준에 따라 인프라를 구축하는 재사용 가능한 모듈을 구축 한 다음 사용자를 위해 게시합니다. 이는 보안 정책을 시행하고 표준을 구축하는 데 도움이 될 수 있습니다.

---
name: why-hcp-terraform-6
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경
* API 기반의 워크플로우
* STATE의 중앙 관리
* Terraform Private Registry
* Sentinel policy enforcement (취약점 점검 및 정책 코드화 실행)

???
TFC/TFE는 사용자가 구축해서는 안되는 것을 구축하거나 잘못된 방식으로 구성하지 않도록 보장 할 수있는 정책 시행 엔진과 함께 제공됩니다. 예를 들어 사용자가 인터넷에 대한 네트워크 포트를 열거 나 너무 많은 가상 머신을 구축하지 못하도록 할 수 있습니다. 이러한 모든 유형의 규칙은 Sentinel Policy Enforcement (정책 코드화 실행) 엔진을 사용하여 표현할 수 있습니다. Sentinel 정책은 사용자가 클라우드에 프로비저닝하기 **전에** 잘못된 작업을 하는 것을 방지합니다.

---
name: why-hcp-terraform-7
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경
* API 기반의 워크플로우
* STATE의 중앙 관리
* Terraform Private Registry
* Sentinel policy enforcement (취약점 점검 및 정책 코드화 실행)
* Single Sign-On

???
Terraform Enterprise는 자체 SAML 공급자를 사용한 SSO도 지원합니다. 이를 통해 사용자를 조직의 팀 및 작업 영역에 신속하게 매핑하여 즉시 생산성을 높일 수 있습니다. 이 기능은  Terraform Enterprise 또는 HCP Terraform Plus Tier에서 사용할 수 있습니다. 오늘 워크숍에서는 SAML 또는 싱글 사인온을 다루지 않을 것입니다.

---
name: why-hcp-terraform-8
class: img-right
# HCP Terraform
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/tfc-gui.png)

HCP Terraform/Terraform Enterprise는 다음의 환경을 제공합니다.:

* VCS와 함께 UI에 통합된 환경
* API 기반의 워크플로우
* STATE의 중앙 관리
* Terraform Private Registry
* Sentinel policy enforcement (정책 코드화 실행)
* Single Sign-On
* 안전한 API 자격증명

???
TFE/TFC는 클라우드 자격 증명, 암호 또는 기타 민감한 데이터를 저장하고 암호화 할 수 있습니다. 이러한 자격 증명은 TFE 내부에서 실행되는 Vault 인스턴스 내부에 안전하게 저장됩니다.

---
name: hcp-terraform-enterprise
# HCP Terraform와 Terraform Enterprise 차이
**[HCP Terraform](https://app.terraform.io/signup)**는 원격 상태 관리, API 기반 실행, 정책 관리 등과 같은 기능을 제공하는 호스팅 된 애플리케이션입니다. 많은 사용자가 클라우드 기반 SaaS 솔루션을 선호하는 이유는 인프라를 유지하여 실행하는 것을 원하지 않기 때문입니다.

**[Terraform Enterprise](https://www.hashicorp.com/go/terraform-enterprise)**는 동일한 애플리케이션이지만 클라우드 환경 또는 데이터 센터에서 실행됩니다. 일부 사용자는 HCP Terraform 애플리케이션에 대한 더 많은 제어가 필요하거나 회사 방화벽 뒤의 제한된 네트워크에서 실행하려고합니다.

이 두 제품의 기능 목록은 거의 동일합니다. 이번 랩 실습에는 HCP Terraform 계정을 사용할 것입니다.

???
귀하의 회사에서 어떤 것을 채택해야하는지 궁금하다면 Terraform Enterprise 또는 HCP Terraform Plus Tier가 답입니다.

---
name: live-demo
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/live_demo.jpg)
# Live Demo
## HCP Terraform in Action

???
INSTRUCTOR NOTE: You can use the same instruqt track that the students will be using to do this demo. Make sure you've gone through the entire track yourself and have your own organization, fork of the hashicat-aws repo, and sentinel policy in place. Once you have done these steps it's easy to create a new demo:

1. Start your own copy of the HCP Terraform on AWS track
2. Echo out your AWS credentials and set them as environment variables in TFC:
```
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```
3. Open a browser tab to your fork of the hashicat-aws git repo. Edit the main.tf file and make sure your aws_instance resource is missing the `Department` and `Billable` tags.
4. Make sure you remove the VPC file (vpc.tf) from your hashicat-aws repo. This will make the demo take longer and may break if the regions aren't set up right.
5. Begin your demo dialog:

**This is a brief demo showing off some of the features of HCP Terraform. You'll get to work with all these features during the hands-on labs today.**

**Pretend I'm a brand new developer and I want to spin up a copy of my company's web application that I can use for testing. I have my own fork of the code here on github. This is the hashicat-aws application. Like the name implies, it provides kittens as a service. You give it a placeholder URL, a height, and a width, and you get a cat. Neat huh?**

**Let's hop over to HCP Terraform and take a look at my workspace. Here you can see the most recent terraform runs and their status, along with the exact git commit hash that led to each run being triggered. All changes are recorded, and only code that passes our sentinel policies is allowed to run.**

**Before I build anything I might want to configure some variables to adjust my infrastructure settings. Here you can see some terraform variables, prefix and region. These will determine the names of my resources and the region they will be deployed in.**

**Down bottom you see the Environment Variables. These are system shell variables that are injected into the HCP Terraform container at runtime. You can optionally encrypt sensitive environment variables such as these AWS keys. Note that these are write-only. Once you encrypt a variable by marking it sensitive, you won't see it here in plaintext again. These are dynamic AWS credentials that are good for only a few hours. You can paste them in manually or use the API to auto-populate them from HashiCorp Vault.**

**New and advanced users can utilize the GUI to trigger infrastructure builds. Let's do that now by clicking on this Queue Plan button. I'm going to put "new dev environment" down as the reason for the build. Now notice that a new terraform plan has kicked off. This is the dry run. terraform is figuring out if any of the infrastructure already exists from a previous run, and then it will build or change everything to match what's in the code. That is, unless we fail a sentinel policy...**

**Oh dear it looks like we have some non-compliant terraform code that has blocked the build. This is Sentinel. Sentinel can inspect every terraform plan to ensure that users don't break the rules or build things that they shouldn't. In this case we have forgotten to tag our AWS instances with the mandatory tags, "Billable" and "Department". Since this is a hard-mandatory policy, we can't override it. We have to fix our code and get it compliant in order to proceed.**

**We'll go back over to our github repo and edit the main.tf file. In the real world you probably won't be editing files directly on the master branch of your repo, what you'd do is test this change in a branch first, have someone review the change, and then merge the change to master. But for a demo it's fine.**

INSTRUCTOR NOTE: Have your code commented and ready to go like this. That way you can quickly uncomment the required tags and save the file.

```
  tags = {
    Name = "${var.prefix}-hashicat-instance"
#     Department = "devops team"
#     Billable = "true"
  }
```

**Now if I pop back over to HCP Terraform you can see that a new run has triggered based on the change I just made. HCP Terraform watches that master branch for any changes and automatically picks them up. I still have a chance to review the run in the UI here. You can see that my policy check is now passing, which will make the finance people happy, and I can continue building my dev environment.**

**I'll click Confirm & Apply and we'll start building.**

If you want you can paste an emoji in along with your confirm message. Have fun with it.

**And away we go. Terraform is building a bunch of network infrastructure and deploying my hashicat application onto a new aws instance in {REGION}. This application has been specially customized for training; it takes about 3-4 minutes to run the first time, then subsequent terraform apply commands only take 15-20 seconds. You might not use terraform this way in the real world but it's great for workshops because you can get a lot of terraform runs done in a short time without tearing down and rebuilding everything.**

**Oh look, our apply looks like it's finished. Let's see what we built.**

INSTRUCTOR NOTE: You might have to queue another plan here to get the app URL to refresh. This is normal, and if anyone asks you can say it's because the website re-provisions itself on every terraform run (which is not the default or how you'd do it in production.) Just wave your hand slowly and say "This is not the URL you're looking for."

**Ok let's try a re-provision and see if the app loads this run. Ah, much better! Look at these cat(s). Now I can run terraform over and over again with different variables to make changes to the dev environment. For example, if we go into the variables and set the placeholder to placedog.net, let's see what we get...**

Create a new variable called `placeholder` and set it to `placedog.net`. Queue up another run and approve it.

**Note that the terraform run goes pretty quickly now. This is because we're running a custom provisioner that kicks off on every single run. If I reload the page I now get a picture of a dog instead of a cat.**

**This has been a brief demo of a simple infrastructure as code workflow that you can use to get started with Terraform. We'll take a short break and when we return you'll get to do some hands on exercises in the first lab.**

---
name: review-the-basics
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/terraform_scifi.jpg)
# 기본 살펴보기
## Terraform Community Edition 다시 떠올려보기

???
이 섹션은 terraform 오픈 소스 사용에 대한 빠른 검토입니다.

---
name: review-basic-terraform-commands
# Terraform Command Review

가장 유용한 몇 가지 terraform 명령을 다시 살펴봅니다.

```bash
terraform init    # 현재 디렉토리 초기화
terraform plan    # Terraform이 무엇을할지보기위한 드라 이런
terraform apply   # Terraform 코드 적용 및 빌드
terraform destroy # Terraform이 만든 것을 파괴
terraform refresh # 상태 파일 새로 고침
terraform output  # Terraform 출력보기
terraform graph   # DOT 형식의 그래프 생성
```

재교육이 필요하다면? [AWS의 Terraform 소개] (https://instruqt.com/hashicorp/tracks/terraform-intro-aws) 실습을 시도해보세요.

???
청중의 성숙도에 따라 Intro to Terraform 트랙으로 돌아갈 수 있습니다. 이상적으로는 워크숍의 모든 사람이 이미 이 작업을 완료했거나 Terraform Community Edition에 대해 동등한 경험을 가지고 있습니다.

---
name: what-is-a-workspace
# Terraform 워크스페이스
.center[![:scale 70%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/workspaces_gui.png)
]

.center[
.small[https://www.terraform.io/docs/cloud/workspaces/]
]

???
Terraform 워크스페이스는 관리되는 인프라 단위입니다. 랩톱 또는 로컬 워크 스테이션에서 terraform 워크스페이스는 단순히 terraform 코드와 변수로 가득 찬 디렉토리입니다. 이 코드는 이상적으로 git 저장소에 저장됩니다. 클라우드에서 워크스페이스는 몇 가지 추가 역할을 수행합니다. HCP Terraform 및 Enterprise에서 워크스페이스는 여전히 terraform 실행을 실행하는 곳이지만 접근 제어, 변수 암호화, 정책 관리와 같은 추가 기능이 있습니다. Terraform은 사용자가 제어하는 안전한 컨테이너(e.g. Docker)에서만 실행됩니다. (이에 대한 한 가지 예외가 있으며 terraform을 로컬에서 실행하지만 HCP Terraform에만 상태를 저장하는 경우입니다). 로컬 작업 공간 또는 git repo 사본은 일반적으로 terraform 작업 공간과 1 : 1로 매핑됩니다.

작업 공간에 무엇을 넣어야합니까? 하나의 단위로 함께 관리해야하는 인프라는 동일한 작업 공간에 배치하는 것이 좋습니다. 누가 관리해야하는지, 얼마나 자주 변경되는지, 우리가 제어 할 수없는 외부 종속성이 있습니까? 다음 질문을하십시오. `terraform apply`를 실행할 때 어떤 일이 발생하는지 생각해보십시오. 방금 구축 한 내용과 제공하는 출력,이 인프라의 대상 및 활용 방법을 설명 할 수 있어야합니다.

Terraform은 코드로 계약을 생성하는 올바른 동작을 채택하도록합니다. terraform 구성은 X, Y 및 Z 인프라를 구축하고 애플리케이션 구성 및 배포를 위해 (Chef | Puppet | Ansible)에 일부 책임을 넘기는 데 동의합니다.

워크스페이스는 다음과 같을 수 있습니다. 네트워크의 전체 애플리케이션 스택. 완전히 독립적 인 개발 환경에 적합합니다. 또는 핵심 네트워크 인프라 만 구축하는 작업 공간 일 수도 있습니다. 네트워크 팀이 관리해야 할 수도 있습니다. 그들은 네트워크의 관리자가되어 VPC 또는 서브넷이 필요한 사람들에게 테라 폼 출력을 제공합니다. 작업 영역을 사용하여 Kubernetes와 같은 플랫폼 서비스를 배포 할 수도 있습니다. Terraform은 IAM 정책 및 역할도 관리 할 수 있으므로 코드 만 사용하여 처음부터 전체 AWS 계정을 설정할 수 있습니다.

---
name: what-is-an-organization
# Terraform Organizations
.center[![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/choose_an_org.png)
]
.center[
.small[https://www.terraform.io/docs/cloud/users-teams-organizations/organizations.html]
]

???
**Organization은 사용자가 팀의 구성원이되어 작업 영역에서 공동 작업하는 공유 공간입니다. 조직에는 수백 또는 수천 개의 작업 공간과 다양한 수준의 액세스 권한을 가진 여러 팀이있을 수 있습니다. 사용자는 여러 Organization 및 Team에 속할 수 있습니다.**

---
name: what-is-a-team
# Terraform Teams
.center[![:scale 90%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/teams_emoji.png)
]
.center[
.small[https://www.terraform.io/docs/cloud/users-teams-organizations/teams.html]
]

???
팀은 조직 내 사용자 그룹입니다. 작업 영역에 대한 액세스 권한은 팀 수준에서 부여됩니다. 예를 들어 여기에 표시된 것처럼 관리자 팀, 관리자 팀 및 개발자 팀을 원할 수 있습니다.

---
name: our-application
# HashiCat App - Kittens as a Service

.center[![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/meow_world.png)]

이것은 우리의 실습 결과물로 보여지는 화면의 예 입니다.

???
이것은 오늘 교육을위한 우리의 애플리케이션입니다. 우리는 이미 모든 Terraform 코드를 작성했습니다. 이 앱은 다양한 기능의 작동 방식을 배우는 데 도움이됩니다. 이미 Intro to Terraform on AWS를 살펴본 적이 있다면 Hashicat에 익숙 할 것입니다. 이전 데모에서 사용한 것과 동일한 앱입니다.

---
name: terraform-state
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/checklist.jpg)
# Terraform State
## 인프라 라이프사이클 관리

---
name: tf-state-file
# Terraform State
```tex
  "primary": {
      "id": "i-0413fe5b4509d65b1",
      "attributes": {
          "ami": "ami-06f2f779464715dc5",
```

Terraform은 **State**파일에 프로비저닝 한 리소스에 대한 정보를 저장합니다. 이 중요한 파일에는 Terraform이 인프라를 변경, 업데이트 및 삭제하는 데 필요한 모든 데이터가 포함되어 있습니다.

기본적으로 State 파일은 로컬 작업 공간에 저장됩니다.

???
누구든지 State 파일이 왜 그렇게 중요한지 말해 줄 수 있습니까? State 파일을 분실 한 적이 있습니까? 어땠나요? 나는 그것이 재미가 아니라는 경험을 통해 당신에게 말할 수 있습니다. 단순히`terraform destroy`를 실행하는 대신 손으로 만든 모든 것을 정리하거나 삭제해야합니다. 손실되거나 손상된 상태 파일에서 복구하는 것은 가능하지만 고통스럽고 시간이 많이 걸립니다.

또한 때로는 민감한 데이터가 상태 파일로 유출 될 수 있습니다. 이를 방지하기 위해 최선을 다하지만 가장 안전한 해결책은 전체 상태 파일을 안전한 장소에 암호화하여 저장하는 것입니다.

---
name: why-not-local-state
class: img-left-full
# 된장, State 파일이 사라졌어요.

![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/dog_homework.jpg)

로컬에서 관리하는 state 파일에는 몇 가지 단점이 있습니다.

* 간혹, 비밀 또는 민감한 데이터가 포함됨
* 파일이 다른 사람의 노트북에 있기 때문에 공동 작업이 불가능
* 상태 파일의 손실 또는 삭제 위험
* 중앙 집중식 기록 보관이 없음

???
 HCP Terraform 계정에 쉽게 무료로 저장할 수 있기 때문에 상태 파일을 잃어 버릴 이유가 없습니다.

---
name: hcp-terraform-remote-state
# HCP Terraform - Remote State
HCP Terraform Remote State는 무료이며 모든 사용자가 사용할 수 있습니다. 설정 및 작동을위한 요구 사항은 다음과 같습니다.

* 무료 또는 유료 HCP Terraform 계정, 또는 Terraform Enterprise
* **`.terraformrc` ** (Unix / Linux) 또는 **`terraform.rc` ** (Windows) 구성 파일
* 구성 파일에 저장된 사용자 액세스 토큰
* 원격 백엔드 구성 파일. 일관성을 위해 이름을 **`remote_backend.tf` **로 지정

**경고** - HCP Terraform API 토큰을 github에 올리지 마세요!

https://www.terraform.io/docs/backends/types/remote.html

???
**오른손을 들고 나를 따라 반복하세요 :**

**"내 terraform 작업 공간에 자격 증명을 저장하지 않습니다."**

엄격한 경고의 이유는 간혹 사용자가 교육 워크숍 중에이 .terraformrc 파일을 github에 올리기 때문입니다. 파일을 한 번 편집하고 토큰을 넣고 그대로 두십시오. 도트 파일은 어떤 이유로 숨겨져 있습니다.

---
name: lab-exercise-0
# 👩‍💻 Instruqt 에서 시작합니다.
<br><br>
[Instruqt](https://instruqt.com)는 HashiCorp 교육 플랫폼입니다. 짧은 자습서를 보려면 아래 링크를 방문하거나 Instruqt에 이미 익숙한 경우 다음 슬라이드로 건너 뛸 수 있습니다.

[https://instruqt.com/instruqt/tracks/getting-started-with-instruqt](https://instruqt.com/instruqt/tracks/getting-started-with-instruqt)

???
첫 번째 실습으로 이동합니다. Instruqt로 작업 한 적이 있다면이 실습을 건너 뛸 수 있습니다. 또는 처음으로이 10 분 트랙을 수행하여 랩 환경에 익숙해 지십시오.

---
name: lab-exercise-1
# 👩‍💻 Lab Exercise: Remote State 구성하기
<br><br>
이 실습에서는 무료 HCP Terraform 계정을 설정하고 Terraform 명령의 원격 실행을 위해 계정을 구성합니다.

강사는 첫 번째 실습 환경의 URL을 제공합니다.

🛑 첫 번째 퀴즈를 완료 한 후 **중지**합니다.

???
그리고 마침내 우리는 유니콘 프로젝트에 대한 준비가되었습니다. 당신이 주역을 맡는 데브 옵스 이야기입니다. 다음은 실습 환경에 대한 링크입니다. 랩 환경은 브라우저에서 실행됩니다. 진행 상황을 저장하려면 Instruqt 계정을 만들어야합니다. 첫 번째 퀴즈에 도달 할 때까지 트랙의 첫 번째 부분을 계속 진행하십시오. 퀴즈를 마치면 멈추고 다음 강의까지 휴식을 취하세요.

참가자에게 비공개 instruqt 트랙 링크를 제공합니다. instruqt 제어판에서 새 초대를 만들 수 있습니다. 이 부분에 대한 도움이 필요하면 Slack의 #proj-instruqt에 문의하세요.

---
name: TFE-Chapter-2
class: title
# Chapter 2
## Security / Role-Based Access Controls

???
**다시 오신 것을 환영합니다. 1 장을 완료했습니다. 다음으로 보안 변수 및 역할 기반 액세스 제어 또는 RBAC를 살펴 보겠습니다.**

---
name: securing-sensitive-vars
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/secure_lock.jpg)

# Sensitive Variables (민감한 변수)
## API 자격 증명을 위한 안전한 장소

???
먼저 민감한 변수, 특히 API 키에 대해 이야기하겠습니다. AWS에서 인프라를 구축 할 때마다 액세스 키 페어가 필요합니다. 키 쌍에는 액세스 키 ID 및 보안 액세스 키가 포함됩니다. 시간 기반 토큰(선택 사항)과 함께 쌍을 이루는이 두 문자열을 사용하면 AWS API 엔드 포인트에 요청할 수 있습니다. Amazon은 리소스를 가동하고 사용량에 대한 청구를 시작합니다. 특히 계정 관리자가 만든 경우 이러한 키는 매우 강력합니다. AWS의 기본 설정은 사용자에게 관리자 수준 액세스 권한을 부여하는 것입니다. 이것이 어떻게 주요 문제가 될 수 있는지 살펴 보겠습니다.

---
name: Security-and-Compliance
# 이거 아세요?
매일 수천 개의 API 및 암호화 키가 GitHub에 유출됩니다!

https://nakedsecurity.sophos.com/2019/03/25/thousands-of-coders-are-leaving-their-crown-jewels-exposed-on-github/

>"GitHub의 Token Scanning 프로젝트와 같은 노력은 박수를 보내야한다고 생각하지만 이미 누출이 발생한 경우에만 효과적입니다. 이 문제는 GitHub에만 국한되지 않을 가능성이 높습니다. 공개적으로 사용 가능한 코드에 영향을 미칠 것입니다. 시스템을 개발하려면 더 많은 연구가 필요합니다. 개발자가 애초에 이러한 실수를 피할 수 있도록 도와줍니다."

???
이것은 Sophos가 GitHub에 저장된 자격 증명에 대해 수행 한 연구에 대한 최근 기사에서 가져온 것입니다. 그들은 무료 API 키와 간단한 검색 알고리즘을 사용하여 github를 크롤링했으며 발견 한 것은 매우 혼란 스러웠습니다. 수십만 개의 API 키, 암호 및 기타 민감한 문자열이 발견되었습니다.

실제로 본 적이 없을수도 있지만 일반적으로 발생합니다. 예를들어 공격자는 AWS 계정을 제어하고 허용되는 최대 인스턴스 수를 사용하여 거대한 암호 화폐 팜을 가동하기 시작합니다. 그런 다음 문제를 해결하는 데 도움이되는 AWS 지원을 받아야합니다. 재미 없겠지만, 부디 API 키를 보호하기를 원합니다.

---
name: Protecting-Sensitive-Variables
class: img-right-full
# 민감한 변수 보호
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/encryption.jpg)

* 클라우드 API 키
* 비밀번호
* SSH 개인 키
* SSL 인증서
* 민감한 텍스트 또는 데이터

???
HCP Terraform는 짧은 텍스트 문자열의 암호화 및 저장을 기본적으로 지원합니다. 이를 통해 일반 텍스트로 노출하거나 다른 사람의 랩톱에 저장하지 않고도 프로비저닝 프로세스 중에 이러한 자격 증명을 안전하게 사용할 수 있습니다.

---
name: where-are-your-creds
# API 키를 어디에 저장하시나요?
Terraform은 클라우드 공급자의 API와 통신하기 위해 자격 증명이 필요합니다.

이러한 API 키는 테라 폼 코드에 직접 저장해서는 **안됩니다**.

구성 파일 및 환경 변수가 더 나은 옵션이지만 자격 증명은 여전히 워크 스테이션에 있으며 일반적으로 일반 텍스트로 저장됩니다.

???
이전에 명확하지 않은 경우 테라 폼 코드에 자격 증명을 저장하지 마십시오. 절대로.

---
name: a-better-way-creds
# 그럼, 민감한 정보는 어떻게 저장할까요?

HCP Terraform/Terraform Enterprise는 자격 증명같은 민감한 정보를 안전하게 저장하고 암호화 할 수 있습니다. 이 암호화 된 저장소는 Password, TLS 인증서, SSH 키, 일반 텍스트 표기되면 안되는 기타 모든 용도로 사용할 수 있습니다.

.center[![:scale 70%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/aws_encrypted_vars.png)]

???
다음은 작업 공간 내에서 사용할 수 있도록 AWS 자격 증명을 안전하게 저장하는 예입니다. 일단 설정되면 사용자가 관리 할 필요가 없습니다.

---
name: terraform-teams
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/teamwork.png)
# HCP Terraform Teams
## Role-Based Access Controls (RBAC)

???
이 섹션은 팀과 역할기반 접근제어에 관한 것입니다.

---
name: terraform-rbac-2
class: img-right
# Terraform 협업을 위한 팀(Team)
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/teams_gui.png)

Team은 사용자의 역할에 따라 Terraform 인프라의 여러 부분에 다양한 수준의 액세스 권한을 부여하는 데 사용됩니다.

작업 영역 액세스 수준에는 읽기, 계획, 쓰기 및 관리가 포함됩니다. 수퍼 유저에게는 정책 및 VCS 설정 관리를위한 조직 전체 권한이 부여 될 수도 있습니다.

???
몇 명의 관리자로 시작할 수 있지만 테라 폼 사용량이 증가함에 따라 더 많은 사용자와 애플리케이션에 다양한 수준의 액세스가 필요합니다.

---
name: lab-exercise-2
# 👩‍💻 Lab Exercise: Secure Variables / RBACs
<br><br>
이 실습에서는 중요한 변수를 저장 및 암호화하고 RBAC (역할 기반 접근 제어)를 설정하는 방법을 알아 봅니다.

중단 한 부분부터 실습을 계속합니다.

🛑 두 번째 퀴즈를 완료 한 후 **중지**합니다.

???
그리고 보안 변수 및 RBAC 문제를 해결할 두 번째 실습으로 이동합니다. 두 번째 퀴즈를 통과하면 3 장까지 휴식을 취할 수 있습니다.

---
name: TFE-Chapter-3
class: title

# Chapter 3
## Version Control / Sentinel Policies

???
이제 우리는 약간 더 발전된 영역으로 들어가고 있습니다. 코드로 자동화를 시작할 수 있기 때문에 매우 멋진 영역입니다. VCS 통합 및 Sentinel 정책을 다룰 것입니다. Sentinel 이전에 VCS를 다루는 이유는 모든 정책을 코드로 정의하기를 원하기 때문입니다!

---
name: version-control-title
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/git_log.png)

# Terraform에 VCS 더하기
## Version Control Systems

???
버전 제어 시스템은 적어도 수십 년 동안 사용되어 왔습니다. 누구든지 몇 가지를 말할 수 있습니까?

일반적인 대답은 RCS, SVN (Subversion) 일 수 있습니다.

그리고 세계에서 가장 인기있는 분산 버전 제어 시스템은 무엇입니까? 맞아, 자식이야. Git은 Linux를 만든 사람인 Linus Torvalds가 발명했습니다.

---
name: whats-a-vcs
class: img-right
# Version Control System (VCS) 란?

![:scale 70%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/distributed_vcs.png)

버전 제어 시스템은 사용자가 인프라 및 애플리케이션의 변경 사항을 저장, 추적, 테스트 및 공동 작업 할 수있는 애플리케이션입니다.

HCP Terraform는 가장 일반적인 버전 제어 시스템과 통합됩니다.

???
git (버전 제어 시스템)을 GitHub (세계에서 가장 큰 git 저장소 모음을 포함하는 웹 기반 애플리케이션)와 혼동하지 않도록하십시오. git의 다른 저장소는 무엇입니까? Bitbucket, GitLab은 모두 HCP Terraform에서 지원됩니다. 오늘은 GitHub로 작업하지만 주요 git 공급 업체 소프트웨어와 통합 할 수 있습니다.

---
name: hcp-terraform-infra-as-code-workflow
class: img-left
# HCP Terraform와 VCS 결합

![:scale 70%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/git_noobs.png)

HCP Terraform는 GitHub Enterprise, Gitlab 및 Bitbucket의 소스 코드 저장소와 직접 통합 할 수 있습니다. 이를 통해 코드 검토, 테스트 및 승인을 통해 간단한 DevOps 워크 플로를 구축 할 수 있습니다.

https://xkcd.com/1597/

이 워크숍에서는 4 ~ 5 개의 git 명령 만 필요합니다.

???
전에 git을 사용한 적이 없더라도 걱정하지 마십시오. 우리는 4 ~ 5 개의 기본 명령 만 사용할 것입니다. XKCD의 친구들이 지적했듯이 항상 모든 것을 깨끗하게 지우고 코드의 새 복사본을 복제 할 수 있습니다.

---
name: multi-user-collaboration
class: img-right-full
# 사용자 협업
.center[![](https://raw.githubusercontent.com/Great-Stone/images/master/uPic/DevOps-2-20201124102930637.png)]
서로 다른 팀 또는 부서의 사용자는 모두 중앙 집중식 코드 형 인프라의 이점을 누릴 수 있습니다.

인프라 변경은 더 이상 격리 된 사일로에서 생성되지 않습니다.

각 팀은 필요에 따라 Terraform 코드를 제공하거나 사용할 수 있습니다.

???
모든 테라 폼 코드를 git repos에 저장하면 사용자 협업과 같은 추가 기능을 활성화 합니다. 이것은 CommitStrip이라는 재미있는 만화입니다. 개발자와 운영팀이 함께 일하는 법을 배우려고합니다. HCP Terraform는 이러한 팀을보다 생산적인 방식으로 더 가깝게 만드는 데 도움이됩니다.

---
name: vcs-driven-workflow
# 테스트 파이프라인의 자동화
.center[![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/git_workflow_tests.png)]

Terraform 코드가 버전 제어 시스템에 저장되면 pull 요청, 코드 검토 및 테스트와 같은 추가 기능을 활성화합니다. 다음은 Training Lab 저장소에서 실행되는 몇 가지 테스트를 보여주는 예입니다.

???
VCS에 코드를 저장하면 자동화 된 테스트 파이프 라인을 구축하고 코드 검토를 수행하여 보류중인 변경 사항을 승인 할 수도 있습니다. 여러 사용자가 서로의 발을 밟지 않고도 코드 기반과 동일한 인프라를 구축하고 변경 사항을 기여할 수 있습니다.

---
name: everything-is-recorded
# 이제, 모든 변경사항은 추적 됩니다.
.center[![:scale 100%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/git_commit_log.png)]

모든 인프라 변경 사항은 git 로그에 기록되고 추적됩니다. 변경 한 사람, 변경된 사항, 변경 사항을 승인 한 사람, 변경 한시기와 이유를 항상 정확하게 알 수 있습니다.

???
모든 변경 사항이 추적되기 때문에 감사 자와 보안 담당자는 이것을 좋아할 것입니다. 더 이상 미스터리 변화가 없으며 추적되지 않은 변화로 인해 문제가 발생했는지 궁금해하지 않습니다.

---
name: sentinel-policy-enforcement
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/security_lasers.jpg)
# Sentinel
## Terraformd에서 정책을 코드로 실행

???
Sentinel은 HashiCorp 정책 시행 언어이며 테라 폼 클라우드 또는 엔터프라이즈에서 사용할 수 있습니다.

---
name: what-is-sentinel
# Sentinel 이란?
```hcl
# Restricting region in AWS
aws_region_valid = rule {
  all region_values as rv {
	rv == "us-east-1"
  }
}
```

Sentinel은 HashiCorp의 정책 시행 언어입니다. **`terraform plan` ** 실행 후 Sentinel 정책을 확인합니다. Sentinel은 정책을 위반하는 구성이 프로덕션으로 프로비저닝 되기 전에 차단됩니다.

???
작은 예방이 큰 사고를 방지합니다. Sentinel은 인프라가 배포 된 이후가 아니라 배포되기 전에 잘못된 구성 및 잘못된 동작을 포착하는 데 도움이됩니다.

---
name: what-can-sentinel-do
# Sentinel의 사용 예
* aws_ami 데이터 소스에 Owner 목록 작성
* 인스턴스에 필수 태그 적용
* AZ(가용 영역) 제한
* 0.0.0.0/0 CIDR 블록 허용 안함
* EC2 인스턴스의 인스턴스 유형 제한
* VPC에 태그를 지정하고 DNS 호스트 이름을 활성화 필수

Sentinel을 사용하여 이러한 규칙과 더 많은 것을 구현할 수 있습니다.

???
Sentinel은 유연하며 거의 모든 종류의 규정 준수 또는 보안 위반을 감지하는 데 사용할 수 있습니다.

---
name: sentinel-enforcement-levels
# Sentinel 적용 수준 정의
⏰ **Advisory** - 정책을 위반하는 계획을 트리거하면 사용자에게 경고를 보냅니다.

⚠️ **Soft-Mandatory** - 일반 사용자가 비준수 인프라를 배포하지 못하도록 차단합니다. 관리자만 재정의 하여 허용 여부를 결정할 수 있습니다.

🛑 **Hard-Mandatory** - 모든 사용자와 앱이 비준수 인프라를 배포하지 못하도록 차단합니다.

???
세 가지 정책 적용 수준이 있습니다. 모든 것을 Advisory로 설정하여 사용자에게 경고를 제공 할 수 있습니다. 그런 다음 조직의 일부 또는 모든 작업 영역에 대해 소프트 및 하드 필수 규칙을 적용하기 시작할 날짜를 설정할 수 있습니다.

---
name: org-or-workspace
# 조직 또는 작업 영역에 Sentinel 적용
.center[![:scale 80%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/policy_workspaces.png)]

???
정책 시행에 대해 매우 구체적이거나 매우 광범위 할 수 있습니다. 조직 전체의 정책을 구현하여 기본 보안 규칙이 항상 모든 곳에서 준수되도록 할 수 있습니다.

---
name: lab-exercise-3
# 👩‍💻 Lab Exercise: Version Control / Sentinel
<br><br>
이 실습에서는 VCS (Version Control System) 통합 및 Sentinel 정책 시행 (정책 코드화 실행)을 다룹니다.

중단 한 부분부터 실습을 계속합니다.

🛑 세 번째 퀴즈를 완료 한 후 **중지**합니다.

???
이 실습은 좀 더 어렵 기 때문에 시간을내어 메모를주의 깊게 읽으십시오. 세 번째 퀴즈가 끝나면 중지합니다.

---
name: TFE-Chapter-4
class: title
# Chapter 4
## Modules / API Automation

???
이것은 비공개 모듈 레지스트리와 API 자동화를 다룰 마지막 콘텐츠 장입니다.

---
name: private-module-registry
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/lego_wallpaper.jpg)
# Terraform Modules
## 재사용 가능한 Infrastructure as a Code

???
먼저 모듈을 살펴 보겠습니다. 이 LEGO 블록처럼 모듈은 재미 있습니다.

---
name: what-even-is-module
# Terraform Module이 뭘까요?
.center[![:scale 90%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/aws_vpc_module.png)]

모듈은 사용자에게 불필요한 복잡성을 숨기는 재사용 가능한 Terraform 코드 단위입니다. 예제의 모듈은 8 개의 변수로 표준 VPC 구성을 생성합니다.

???
실습에서이 모듈을 사용하게됩니다. 직접 VPC를 구축 한 적이 있다면 매우 간단한 프로세스가 아님을 알 수 있습니다. 올바른 네트워크 경로를 구성하고 서브넷, 인터넷 게이트웨이 및 기타 여러 설정을 올바르게 설정해야합니다. 이 VPC 모듈은 퍼블릭 및 / 또는 프라이빗 서브넷이있는 모범 사례 VPC를 구성하는 데 사용할 수있는 표준 입력 세트를 제공하기위한 것입니다. 이렇게하면 모든 테라 폼 코드를 직접 작성해야하는 수고를 덜 수 있습니다.

---
name: how-modules-configured
# Terraform Module은 어떻게 구성될까요?
간단한 3 단계로 Terraform 모듈 만들기 :

1. 입력 및 출력을 구성하여 몇 가지 Terraform 코드를 작성합니다.
2. 워크 스테이션에서 액세스 할 수있는 위치에 Terraform 코드를 저장합니다.
3. 파일 경로 또는 소스 URL로 모듈을 참조하십시오.

쉬운 것 같습니까?

각기 다른 버전으로 수십 또는 수백 개의 모듈을 관리해야한다면 어떨까요?

???
블랙 박스와 같은 테라 폼 모듈을 생각해보십시오. 변수 (입력)는 한쪽으로 가고 출력은 다른 쪽에서 나옵니다. 중간에 일어나는 일은 모듈에서 원하는 것을 얻는 한 실제로 사용자의 비즈니스가 아닙니다. 이를 통해 사용자가 무엇을 만들 수 있는지 제어하고 주변에 가드 레일을 두어 올바른 경로로 안내 할 수 있습니다. 사용자가 수정해서는 안되는 변수와 설정을 숨길 수 있으며, 이는 또한 VPC가 작동하기를 원하는 최종 사용자가 일부 인스턴스를 구축 할 수 있도록 더 간단하게 유지합니다.

문제는 수십 또는 수백 개의 모듈과 많은 사용자가이를 소비하기 시작할 때입니다 ...이 항목을 관리하기위한 중앙 집중식 방법이 필요합니다.

---
name: private-module-registry
class: img-right

# Terraform Private Registry
![](https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/aws_pmr.png)

Terraform 모듈은 인프라를 구축하는 데 사용할 수있는 재사용 가능한 Terraform 코드 패키지입니다.

HCP Terraform에는 조직과 팀에 모듈을 저장, 버전 화 및 배포 할 수있는 비공개 모듈 레지스트리가 포함되어 있습니다.

???
공용 모듈 레지스트리와 같지만 사용자 만 액세스 할 수있는 자체 Terraform 조직 내에서 실행됩니다. 이렇게하면 개인 또는 기밀 코드를 공유하거나 공용 모듈을 가져 와서 자신이 사용하도록 포크 할 수 있습니다.

---
name: api-driven-workflows
class: title, smokescreen, shelf
background-image: url(https://hashicorp.github.io/field-workshops-terraform/slides/aws/hcp-terraform/images/enter_the_matrix.jpg)
# HCP Terraform API
## 모든것을 자동화하기

???
이 섹션에서는 HCP Terraform API를 사용하여 자동화를 구축 할 수있는 것의 작은 샘플을 제공합니다. API는 기본 Terraform 지원 또는 통합이없는 시스템에서도 HCP Terraform와 상호 작용할 수있는 명확하고 잘 알려진 방법을 제공합니다.

---
name: whats-an-api
# Application Programming Interface
```ruby
curl -s -H "Accept: application/json" https://icanhazdadjoke.com

{
  "id": "jyPCYTKuskb",
  "joke": "How did Darth Vader know what Luke was getting for
           Christmas? He felt his presents.",
  "status": 200
}
```
API는 인터넷의 기본 언어입니다. Akamai 연구에 따르면 인터넷 트래픽의 83 %가 API 호출 (JSON/XML)로 구성됩니다.
.center[.small[https://www.akamai.com/us/en/about/news/press/2019-press/state-of-the-internet-security-retail-attacks-and-api-traffic.jsp]]

???
모든 종류의 API가 준비되어있습니다.

---
name: hcp-terraform-api
# HCP Terraform API - 동작
```bash
# Create a workspace using the API
curl --header "Authorization: Bearer $TOKEN" --header \
"Content-Type: application/vnd.api+json" --request POST \
--data @/tmp/create_workspace.json \
https://app.terraform.io/api/v2/organizations/$ORG/workspaces
```

1. 애플리케이션 및 도구는 토큰을 사용하여 API에 인증합니다.
2. JSON 페이로드는 실행할 엔드 포인트와 동작을 결정합니다.
3. JSON 페이로드는 수행중인 작업에 따라 다른 API 엔드 포인트에 제출됩니다.

대부분의 프로그래밍 언어에는 API 작업을위한 문서 라이브러리가 있습니다.

???
**실습 중에 Unix cURL 명령을 사용합니다. Curl은 API 및 웹 사이트와 대화하기위한 스위스 군용 칼과 같습니다.**

---
name: api-use-cases
# HCP Terraform API - 사용 사례

* CI/CD 테스트 파이프 라인
* 워크 플로우 관리 시스템과 연결
* 데이터에 대해 Terraform 상태를 쿼리해야하는 외부 시스템
* 백엔드에 Terraform이있는 셀프 서비스 포털
* 특정 요구에 맞는 사용자 지정 명령 줄 스크립트

???
다음은 HCP Terraform API로 빌드 할 수있는 몇 가지 사항입니다.

---
name: lab-exercise-4
# 👩‍💻 Lab Exercise: Modules / API Automation
<br><br>
이 실습에서는 HCP Terraform를 사용한 프라이빗 모듈 레지스트리 및 API 자동화에 대해 다룹니다.

중단 한 부분부터 실습을 계속합니다.

🛑 네 번째 퀴즈를 완료 한 후 **중지**합니다..

???
이것은 마지막 공식 실습입니다. 보너스 랩은 별도의 트랙에 저장됩니다.

---
name: TFE-Chapter-5
class: title

# Chapter 5
## Bonus Lab & Extra Resources

---
name: bonus-lab

# Bonus Lab
## 🦄 The Gauntlet 🏆

워크샵 콘텐츠를 모두 완료하고 보너스 랩을 시도하고 싶다면 강사가 초대를 제공 할 수 있습니다.

???
이 보너스 랩은 세 가지 Terraform 클라우드 워크숍 중 하나와 함께 사용할 수 있습니다. 학생과 공유하려면 초대장을 만드세요.

https://instruqt.com/hashicorp/tracks/terraform-cloud-bonus-lab

---
name: additional-resources-tfe
# Additional Resources
Terraform Enterprise 또는 HCP Terraform에 대해 자세히 알아 보려면 아래 링크를 방문하십시오.

Terraform Enterprise Product Page
https://www.hashicorp.com/products/terraform/

Why Consider Terraform Enterprise Over Community Edition?
https://www.hashicorp.com/resources/why-consider-terraform-enterprise-over-open-source

Terraform AWS Provider Documentation
https://registry.terraform.io/providers/hashicorp/aws/latest/docs

---
name: Feedback-Survey
# Workshop Feedback Survey
<br><br>
.center[

귀하의 의견은 우리에게 중요합니다!

설문 조사는 짧습니다. 우리는 또 다른 내용으로 함께 할 것을 약속합니다.

# https://bit.ly/hashiworkshopfeedback
]

---
name: the-end
class: img-caption

# 축하합니다! 워크샵을 모두 완료하셨습니다.
![HashiCorp Employees - 2019](https://raw.githubusercontent.com/Great-Stone/images/master/uPic/hashicorp_employees.jpg)
