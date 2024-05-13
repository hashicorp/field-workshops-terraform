name: AWS-Terraform-Workshop
class: center
count: false
![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/tf_aws.png)

<br><br>

# AWS Terraform Workshop
## Infrastructure as Code를 사용하여 AWS 리소스 구성
???
강사 가이드 링크 : https://github.com/hashicorp/field-workshops-terraform/blob/main/instructor-guides/aws_intro_to_terraform_INSTRUCTOR_GUIDE.md

이 슬라이드 프레젠테이션은 특히 RemarkJS 엔진을 사용하여 렌더링하는 Markdown 코드로 저장됩니다. 모든 표준 마크 다운 태그가 지원되며이 문서 내에서 일부 HTML을 사용할 수도 있습니다.

슬라이드 데크의 모양과 느낌을 변경해야하는 경우 필요에 맞게 style.css 및 remark_settings.js 파일을 사용하세요. 이 파일의 내용은 페이지가로드 될 때 index.html에 의해 선택됩니다.

이와 같은 HTML 주석은 소스 코드에 표시되지만 슬라이드 나 발표자 노트에는 표시되지 않습니다.
--->

AWS 기반 Terraform에 대한 기초 안내서에 오신 것을 환영합니다. 이 슬라이드는 모두 Markdown 언어로 작성되었으므로, 편집하거나 추가 한 다음 풀 요청을 제출하여 변경 사항을 메인 브랜치에 추가 할 수 있습니다. 슬라이드 덱을 편집하려면이 저장소를 포크하고 Markdown 파일을 편집 한 다음 변경 사항과 함께 풀 요청을 제출하면됩니다.

Markdown 콘텐츠는 docs/slides 하위 디렉터리에 포함되어 있습니다.

다음은 강사 또는 참가자에게 유용한 키보드 단축키입니다.

⬆ ⬇ ⬅ ➡-앞뒤로 탐색
P              -발표자보기 전환
C              -프레젠테이션을위한 외부 창 열기

강사 메모는 일반 텍스트로, 설명 부분은 **굵게** 표시됩니다. 내러티브 인용문을 사용하거나 자신의 프레젠테이션 스타일에 맞게 변경할 수 있습니다.

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

**이 질문에 대한 오답은 없습니다.**

**선호하는 텍스트 편집기가 없더라도 괜찮습니다! 클라우드 랩에는 Visual Studio Code가 사전 설치되어 있습니다. VSC는 Microsoft 용 무료 프로그래머 용 텍스트 편집기이며 Terraform을 훌륭하게 지원합니다. 이 워크샵의 대부분은 단순히 코드를 복사하고 붙여 넣는 것이므로 개발자가 아니더라도 걱정하지 마십시오. Terraform은 배우기 쉽고 재미있게 작업 할 수 있습니다.**

---
name: Link-to-Slide-Deck
# The Slide Deck
<br><br><br>
Follow along on your own computer at this link:

### <https://hashicorp.github.io/field-workshops-terraform/slides/korean/aws/terraform-community/>

---
name: Table-of-Contents
# Table of Contents

1. Terraform 소개
1. Terraform 기본<br>
👩‍🔬 **Lab - Setup and Basic Usage**
1. Terraform In Action: plan, apply, destroy
1. Terraform 코드 구성<br>
🧪 **Lab - Terraform in Action**<br>
1. AWS 인스턴스 프로비저닝과 설정<br>
🔬 **Lab - Provisioning with Terraform**<br>
1. 인프라 상태를 변경하고 관리하기
1. HCP Terraform<br>
⚗️ **Lab - Terraform Remote State**

???
이 워크숍을 완료하는 데는 약 3 시간이 걸립니다.

**다음은 오늘의 교육 일정입니다. 형식은 간단합니다. 강의를 듣고 각 주제에 대한 슬라이드를 본 다음 해당 주제에 대한 실습 랩에 참여합니다. 강의와 실습을 번갈아 가며 몇 번의 휴식 시간이 주어집니다.**

---
name: intro-to-terraform-demo
class: title
# Chapter 1
## Terraform 소개

???
여기서는 "장"이라는 단어를 사용합니다. 워크샵 과정은 마치 이야기가 펼쳐지는 것처럼 느껴 져야하기 때문입니다. 강사의 역할은 이야기를 통해 학습자를 안내하는 것입니다.

---
name: How-to-Provision-an-AWS-Instance
# AWS 인스턴스를 어떻게 프로비저닝 하죠?

새 AWS 인스턴스를 프로비저닝 할 수있는 몇 가지 다른 방법을 살펴 보겠습니다. 시작하기 전에 다음을 포함한 몇 가지 기본 정보를 수집해야합니다 (더 많은 예가 있습니다).

- EC2 인스턴스 이름
- 운영 체제 (Image)
- VM 크기
- 지리적 위치 (Region)
- 보안 그룹

???
**AWS 사용 경험이있는 사람이 있습니까? 우리 대부분은 일반적으로 어떻게 시작합니까? 맞습니다. AWS 콘솔에 로그인하고 클릭을 시작합니다. 모든 주요 클라우드 제공 업체는이 부분을 정말 쉽게 만듭니다. 계정을 얻고 로그온하고 버튼을 클릭하기 시작합니다. 어떻게 생겼는지 살펴 보겠습니다 ...**

대부분의 AWS 사용자가 익숙 할 것이기 때문에 AWS 콘솔을 시작점으로 선택했습니다. 이 익숙한 출발점에서 우리는 여행을 시작합니다 ...

---
name: AWS-Console-Provision
# Method 1: AWS Console (GUI)
![:scale 70%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/aws_provision.png)

???
**AWS를 사용해 본 적이 있다면 익숙해 보일 것입니다. EC2 패널에서 인스턴스> 인스턴스 시작을 클릭하면 인스턴스를 프로비저닝하는 데 사용할 수있는 다양한 AWS 머신 이미지 (AMI) 목록이 표시됩니다. 이들 중 일부는 AWS에서 제공하고 다른 일부는 마켓 플레이스의 타사에서 제공합니다. 필요한 것을 검색하거나 찾아보고 클릭하세요.**

---
name: AWS-Console-Provision-2
# Method 1: AWS Portal (GUI)
![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/aws_provision_2.png)

???
**AMI를 선택한 후에는 인스턴스 유형, 시작하려는 VPC, 할당하려는 관련 IAM 역할, 외부 스토리지, 태그, 보안 그룹 등 몇 가지 세부 정보를 입력합니다. 긴 옵션 목록! AWS 콘솔은 개별 VM 및 개발 또는 테스트 환경을 가동하는 데 유용 할 수 있습니다. 좋은 소식은 이러한 방식으로 인프라를 가동하는 것이 정말 쉽다는 것입니다. 나쁜 소식은 확장되지 않는다는 것입니다. 그리고 아무도 빌드 된 것을 추적하지 않을 가능성이 있습니다.**

모든 사람에게 콘솔 계정을 제공하고 클라우드 환경에 대한 기본적인 설정만 하면 일을 아주 엉망으로 만들기가 정말 쉽습니다.

---
name: CloudFormation-Templates
class: compact
# Method 2: CloudFormation Templates
```json
{
  "AWSTemplateFormatVersion" : "2010-09-09",

  "Description" : "AWS CloudFormation Sample Template EC2InstanceWithSecurityGroupSample: Create an Amazon EC2 instance running the Amazon Linux AMI. The AMI is chosen based on the region in which the stack is run. This example creates an EC2 security group for the instance to give you SSH access. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.",

  "Parameters" : {
    "KeyName": {
      "Description" : "Name of an existing EC2 KeyPair to enable SSH access to the instance",
      "Type": "AWS::EC2::KeyPair::KeyName",
      "ConstraintDescription" : "must be the name of an existing EC2 KeyPair."
    },
```

CloudFormation 템플릿은 AWS 리소스를 프로비저닝하는 일관되고 안정적인 방법을 제공합니다. JSON은 컴퓨터가 읽기 쉽지만, 사람이 편집하고 문제를 해결하기에는 어떤가요?

???
 **CFT라고도하는 방법 # 2 인 CloudFormation 템플릿을 소개합니다. CFT를 사용한 적이 있습니까? 그 경험은 어떻습니까?**

**CFT는 JavaScript Object Notation을 나타내는 JSON으로 작성됩니다. 컴퓨터간에 데이터를 전송하기위한 개방형 표준 형식입니다. 오해하지 마세요. JSON은 훌륭합니다. 당신이 컴퓨터라면. 컴퓨터는 키-값 쌍과 목록으로 가득 찬 이러한 파일을 읽는 데 정말 능숙합니다.**

**문제는 거대한 JSON 파일을 편집하고 유지하는 것이 인간에게 어렵다는 것입니다. JSON은 프로그래밍 언어가 아니기 때문에 이해하고 변경하기 어려운 훨씬 더 많은 복잡한 코드를 작성하게됩니다.**

**CloudFormation 템플릿-컴퓨터는 읽기 쉽고 인간은 문제 해결 및 유지 관리가 어렵습니다.**

우리는 CloudFormation 템플릿 또는 기타 JSON / YAML 기반 프로비저닝 도구를 bash하지 않습니다. 간단한 사실은 이러한 데이터 형식이 논리 연산 (if / then, for 루프 등)에 적합하지 않다는 것입니다.

---
name: Provision-with-Terraform-2
# Method 3: Provision with Terraform
```terraform
resource aws_instance "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"

  // Name of an existing EC2 KeyPair to enable SSH access to the instance
  tags = {
    Name = "HelloWorld"
  }
}
```
.center[AWS 인스턴스를 생성하는 Terraform 예제 코드]

???
**그리고 마지막으로 옵션 # 3, Terraform이 있습니다. Terraform은 사람에게 친숙하고 기계가 읽을 수 있도록 설계된 도메인 특정 언어 또는 DSL을 사용합니다. 이것은 Terraform 코드의 예제 스 니펫입니다. 이제 이전 슬라이드로 돌아가는 것을보십시오. 이 복잡하고 지저분한 JSON이나 간단하고 컴팩트 한 테라 폼 코드를 작성하고 유지해야합니까? **

이전 슬라이드로 돌아가서 JSON과 동등한 Terraform의 차이점을 설명합니다.

---
name: What-is-Terraform
# What is Terraform?
```terraform
resource aws_instance "catapp" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  tags = {
    Name = "${var.prefix}-meow"
  }
```
* 실행 가능한 문서
* 인간과 기계 모두 해독 가능
* 배우기 쉬움
* 테스트, 공유, 재사용, 자동화
* 모든 주요 클라우드 제공 업체에서 작동 가능

???
그래서 정확히 Terraform은 무엇입니까? Terraform은 하이브리드 인프라의 DNA입니다. Terraform 코드는 HCL 또는 HashiCorp 구성 언어로 작성됩니다. 모든 플랫폼에서 인프라 프로비저닝을 위해 특별히 설계된 유일한 프로그래밍 언어입니다.

프로비저닝 지침이 포함 된 Wiki 또는 Runbook 집합이 있습니까? 그 위키에 대해 잠시 생각해보십시오. 이제 마지막으로 편집 한 날짜 스탬프를 상상해보십시오. 4 년 전이라고합시다. 지난 4 년 동안 무언가 변경되었을 수 있다고 생각하십니까?

위키가 인프라의 마지막으로 알려진 상태의 자료라는 것입니다. terraform을 사용하는 주된 이유 중 하나는 자체 문서화이기 때문입니다. 코드 자체는이 인프라를 구축하는 데 필요한 모든 단계를 설명하므로 항상 최신 상태입니다.

---
name: IaC
# What is Infrastructure as Code?
<br><br><br>
.biglist[
IaC (Infrastructure as Code)는 컴퓨터에서 읽을 수있는 정의 파일을 사용하여 클라우드 인프라를 관리하고 프로비저닝하는 프로세스입니다.

**실행 가능한 '문서'라고 생각하시면 됩니다.**
]

???
생각해볼 수 있습니다 ... 왜 내가 손으로 이것을 하면 안될까요? 결국 AWS 포털은 정말 쉽고, 수동으로 인프라를 구축 할 수 있습니다. 이유는 다음과 같습니다.

Terraform은 모든 유형의 인프라를 구축 할 때 매번 정확하게 동일한 방식으로 구축되도록 보장합니다. 좀더 생각해볼까요? 여러분 모두에게 동일한 빌드 문서를주고 서버를 설정 해달라고 요청했다면, 여러분이 그것들을 넘겨 줄 때 그 머신들에 차이가있을 것이라고 확신합니다. 큰 차이는 아니지만 시간이 지남에 따라 쌓여서 환경에 모든 종류의 불확실성과 문제를 일으킬 수 있습니다.

키보드 (또는 마우스)를 손에 쥐고 인프라를 변경하고 수동 단계를 시작하면 자동화 전투가 시작되기도 전에 패배 한 것입니다. 한 번의 수동 단계만으로도 제공 일정이 느려지고 불필요한 위험이 발생하고 환경이 변경 될 수 있습니다.

---
name: IaC2
# Infrastructure as Code를 통해...
???
우리는 때때로 이런 방식을 'Infrastructure as Code'라고 부르거나 모든 프로비저닝 단계를 기계가 읽을 수있는 코드와 변수로 표현하는 일종의 방법 이라고 부릅니다.

---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
???
**...코드화 된 워크 플로우. 모든 수동 단계를 코드화하면 위험을 줄이면서 더 빠르고 효율적으로 프로비저닝 할 수있는 몇 가지 이점을 얻을 수 있습니다.**


---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
* 기존 인프라 변경 및 업데이트
???
IaC의 주요 이점 중 하나는 구축 한 내용을 변경하고 업데이트 할 수 있다는 것입니다. 인프라를 프로비저닝 할 수있는 많은 도구가 있습니다. 이를 작업의 '0 일차'라고도합니다. 진짜 과제는 Day N을 관리하는 것입니다. 구축 한 인프라를 변경해야 할 경우 어떻게됩니까? 일부 또는 전부를 파괴하거나 재생성해야할까요? 다운 타임없이이 인프라를 유지하고 관리 할 준비가되어 있습니까? Terraform은 _stateful_ 도구이기 때문에 인프라를 추적하고 최소한의 영향으로 변경하는 데 도움이 될 수 있습니다.

---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
* 기존 인프라 변경 및 업데이트
* **`terraform plan` **을 사용하여 변경 사항을 안전하게 테스트 및 확인

![Hold onto your butts](https://raw.githubusercontent.com/Great-Stone/images/master/uPic/mememe_6237bb7da6df53bc523c92c05944bcac-1.jpg)

???
영화 쥬라기공원 의 장면을 기억하십니까? Samuel L Jackson이 돌아 서서 테스트되지 않은 코드 변경을 프로덕션으로 밀어 붙이면서 '엉덩이를 붙잡고'라고 말하는 장면을 기억하십니까? 모든 시스템 관리자는 한 번에 그런 느낌을 받았습니다. 정말 효과가 있었으면 좋겠어요 ...

대신 이런으로 운영에 반영되는 모든 변경 사항을 안전하게 테스트 할 수있는 방법이 있다면 어떨까요? 지금이 코드를 실행하면 실제로 어떻게됩니까? Terraform에는 바로 지금 적용 버튼을 눌렀을 때 발생하는 상황을 정확히 시각화 할 수있는 기본 제공 Dry-run 모드가 있습니다. 이는 안정성과 가동 시간을 중시하는 시스템 관리자 및 운영 팀에게 유용한 도구입니다.

테라 폼 계획 출력의 예상치 못한 변경은 운영에 반영되기 전에 조사 할 수 있습니다.

---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
* 기존 인프라 변경 및 업데이트
* **`terraform plan` **을 사용하여 변경 사항을 안전하게 테스트 및 확인
* 애플리케이션 코드 워크플로우 도구 (Git, CI/CD)와 통합

???
**Terraform을 사용하면 수동 프로세스를 자동화하고 지속적 통합 또는 지속적 배포 파이프 라인을 구축 할 수 있습니다. 강화 된 머신 이미지를 생성하기위한 파이프 라인이 있다고 상상해보십시오. 인프라 빌드 프로세스를 테스트하기위한 또 다른 파이프 라인이있을 수 있습니다. 이는 애플리케이션이 테스트되고 강화 된 인프라에 배포되는 다른 CI / CD 애플리케이션 파이프 라인에 연결될 수 있습니다. 누구나 사용하고 이해할 수있는 간단한 언어로 작성된 API 기반 인프라 빌드를 생각해보십시오.**

---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
* 기존 인프라 변경 및 업데이트
* **`terraform plan` **을 사용하여 변경 사항을 안전하게 테스트 및 확인
* 애플리케이션 코드 워크플로우 도구 (Git, CI/CD)와 통합
* 간편한 공유 및 공동 작업을 위해 재사용 가능한 모듈 제공

???
테라 폼 사용을 확장하면 재사용하려는 인프라의 특정 패턴과 부분을 갖게됩니다. 네트워크 보안이 매번 특정 방식으로 설정되기를 원할 수도 있습니다. 또는 누군가 웹 애플리케이션을위한 훌륭한 Terraform 구성을 작성했을 수도 있습니다. Terraform은 다른 사용자가 사용할 수있는 미리 빌드 된 Terraform 코드의 패키지 인 사용자 지정 모듈을 지원합니다. Terraform 모듈을 사용하여 반복을 방지하고 보안을 강화하며 표준을 준수하는지 확인할 수 있습니다.

---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
* 기존 인프라 변경 및 업데이트
* **`terraform plan` **을 사용하여 변경 사항을 안전하게 테스트 및 확인
* 애플리케이션 코드 워크플로우 도구 (Git, CI/CD)와 통합
* 간편한 공유 및 공동 작업을 위해 재사용 가능한 모듈 제공
* 보안 정책(취약점 검사) 및 조직 표준 시행

???
**Terraform Enterprise는 정책 시행도 지원합니다. 사용자를 위해해야 할 일과하지 말아야 할 일 목록을 만들고 사람들이하지 말아야 할 일을 만들거나 환경에 불필요한 위험을 초래하지 않도록 할 수 있습니다. 예를 들어 서버가 공용 인터넷에 노출되어서는 안된다는 정책이있을 수 있습니다. 모든 인프라가 코드로 저장되기 때문에 해당 코드를 신속하게 분석하여 규칙을 위반하는지 확인하여 인프라가 구축되기 이전에 잘못된 동작을 방지 할 수 있습니다.**

---
name: IaC2
# Infrastructure as Code를 통해...
* 인프라 프로비저닝을 위한 체계화된 **워크 플로우** 제공
* 기존 인프라 변경 및 업데이트
* **`terraform plan` **을 사용하여 변경 사항을 안전하게 테스트 및 확인
* 애플리케이션 코드 워크플로우 도구 (Git, CI/CD)와 통합
* 간편한 공유 및 공동 작업을 위해 재사용 가능한 모듈 제공
* 보안 정책(취약점 검사) 및 조직 표준 시행
* 서로 다른 팀 간의 협업 활성화

???
**이제 모든 인프라가 소스 코드 저장소에 저장되므로 여러 사용자와 팀이 매우 쉽게 협업 할 수 있습니다. 개발자에게 새로운 기능이 필요하십니까? 그들은 소스 코드를 쉽게 조정하고 검토를 위해 변경 사항을 운영 담당자에게 다시 보낼 수 있습니다. Terraform은 개발자와 운영 팀이 모두 이해하는 범용 언어입니다.**

---
name: IaC-Tools
# 다른 Infrastructure as Code 도구들
.center[![:scale 40%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/infra_tools.png)]

이러한 도구는 OS나 애플리케이션 구성에 적합합니다.

클라우드 인프라 및 플랫폼 서비스를 프로비저닝하기 위해 특별히 제작 된 것은 아닙니다.

???
다른 도구는 어떻습니까? 이미 Ansible을 가지고 있는데 왜 사용하면 안되나요? 아니면 내 사람들은 Powershell 만 수행합니다. 이것들은 모두 훌륭한 도구입니다. 그러나 이들 중 어느 것도 프로비저닝 작업을 위해 특별히 설계된 것은 아닙니다.

Chef, Puppet 및 Ansible은 모두 운영 체제 및 애플리케이션의 맥락에서 훌륭하게 작동합니다. 이러한 각 도구를 사용하여 일부 클라우드 프로비저닝을 수행 할 수 있지만 실제로 Terraform만큼 잘 작동하는 것은 없습니다. 반대로 HashiCorp에는 구성 관리 도구가 없습니다. Terraform은 이러한 모든 도구와 잘 작동합니다.

---
name: Native-Tools
# Native-Cloud 프로비저닝 도구들
.center[![:scale 90%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/clouds.png)]

각 클라우드에는 자체 YAML 또는 JSON 기반 프로비저닝 도구가 있습니다.

Terraform은 모든 주요 클라우드 제공 업체 및 VM 하이퍼 바이저에서 사용할 수 있습니다.

???
**모든 주요 클라우드 제공 업체에는 자체 JSON 또는 YAML 기반 프로비저닝 도구가 있습니다. 그러나 그들 모두는 YAML 또는 JSON으로 작성되었습니다. 이 시스템 중 하나를 배우면 다른 시스템은 완전히 다릅니다. 이제 다중 클라우드 전략을 원한다면 세 가지 별도의 프로비저닝 시스템을 배워야합니다. Terraform을 사용하면 이러한 세 가지 클라우드 공급자 모두에서 동일한 언어, 동일한 간단한 구문을 사용합니다.**

---
name: Config-Hell
.center[![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/Config_Hell.jpg)]
???
**이것은 재미있는 웹 만화입니다. 중첩 된 JSON 템플릿을 살펴보면서 중괄호의 어떤 레이어에 있는지 알아 내려고 노력한 사람들은 이것을 이해할 것입니다.**

---
Name: Terraform-vs-JSON
# Terraform vs. JSON
CFT JSON:
```json
"name": "{ "Fn::Join" : [ "-", [ PilotServerName, vm ] ] }",
```

Terraform:
```hcl
name = "${var.PilotServerName}-vm"
```

Terraform 코드 (HCL)는 배우기 쉽고 읽기 쉽습니다. 또한 동등한 JSON 구성보다 50-70 % 더 간결합니다.

---
Name: Why-Terraform-1
# 그래서, 왜 Terraform 일까요?
.center[![:scale 60%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/1password_terraform.png)]

.center[### <https://blog.1password.com/terraforming-1password/>]

1Password는 단 몇 주 만에 전체 프로덕션 인프라를 Terraform으로 이동할 수있었습니다. 이제 그들은 몇 시간 만에 운영 환경을 해체하고 다시 완전히 재 구축 할 수 있습니다.

???
1Password는 AWS Cloudformation (JSON)과 Terraform의 차이점을 보여주는 훌륭한 블로그 게시물을 작성했습니다.

https://blog.1password.com/terraforming-1password/

1Password는 단 몇 주 만에 전체 프로덕션 인프라를 Terraform으로 이동할 수있었습니다. 이제 그들은 몇 시간 만에 운영 환경을 해체하고 다시 완전히 재 구축 할 수 있습니다.

---
Name: Why-Terraform-on-AWS
# AWS를 위해 Terraform을 쓰는 이유

* 다중 클라우드 및 하이브리드 인프라 지원

???
AWS에서 Terraform을 특히 사용해야하는 이유는 무엇입니까? 첫 번째 이유는 Terraform이 하이브리드 또는 다중 클라우드 전략을 지원하기 때문입니다. 일부 인프라를 온 프레미스로 구축해야하고 일부는 AWS에 구축해야하는 경우 Terraform이 적합합니다. 기술 직원은 두 환경 모두에서 프로비저닝 할 수있는 단일 언어 만 배우면됩니다.

---
Name: Why-Terraform-on-AWS
# AWS를 위해 Terraform을 쓰는 이유

* 다중 클라우드 및 하이브리드 인프라 지원
* 다른 클라우드 제공 업체로부터 **마이그레이션**

???
Terraform은 클라우드 제공 업체 간 마이그레이션에도 유용합니다. AWS에서 AWS로 일부 워크로드를 이동하려한다고 가정 해 보겠습니다. Terraform의 코드 변경은 CloudFormation 템플릿을 사용하는 것보다 구현하기가 훨씬 쉽습니다. 학습 곡선이 거의 없었기 때문에 간단한 데모 애플리케이션을 한 클라우드에서 다른 클라우드로 몇 시간 만에 마이그레이션 할 수있었습니다. Terraform 코드는 어디서 실행하든 동일하게 보입니다.

---
Name: Why-Terraform-on-AWS
# AWS를 위해 Terraform을 쓰는 이유

* 다중 클라우드 및 하이브리드 인프라 지원
* 다른 클라우드 제공 업체로부터 **마이그레이션**
* 프로비저닝 속도 향상

???
사용자가 Terraform을 채택하면 프로비저닝 시간이 며칠 또는 몇 주에서 몇 시간 또는 몇 분으로 줄어드는 것은 드문 일이 아닙니다. 비효율적 인 수동 단계 및 변경 승인은 엄격한 테스트 및 보안이 내장 된 빠른 코드 파이프 라인으로 대체 될 수 있습니다. 이제 사용자는 변경 요청이 승인 될 때까지 며칠을 기다리지 않고 병목 현상이나 느린 승인 프로세스없이 인프라를 자체 프로비저닝 할 수 있습니다. .

---
Name: Why-Terraform-on-AWS
# AWS를 위해 Terraform을 쓰는 이유

* 다중 클라우드 및 하이브리드 인프라 지원
* 다른 클라우드 제공 업체로부터 **마이그레이션**
* 프로비저닝 속도 향상
* 효율성 향상

???
'두번 측정하고 한 번 자르세요'라는 말을 들어 보셨나요? Terraform은 운영 팀이 모든 단일 빌드에 대해 훈련되고 일관성을 갖도록합니다. 빌드 중에 간과 된 변경 또는 설정이 있습니까? 이제 코드 내에서 실수를 즉시 수정할 수 있으므로 특정 단계를 다시 놓치는 일이 없습니다. 모든 향후 빌드에는 변경 사항이 포함됩니다. 계약이 명확하기 때문에 개발자와 운영 간의 관계를 개선 할 수도 있습니다. 빌드되는 것은 항상 코드에 정의되며 추측 또는 수동 프로세스에 맡겨지지 않습니다.

---
Name: Why-Terraform-on-AWS
# AWS를 위해 Terraform을 쓰는 이유

* 다중 클라우드 및 하이브리드 인프라 지원
* 다른 클라우드 제공 업체로부터 **마이그레이션**
* 프로비저닝 속도 향상
* 효율성 향상
* 위험 최소화

???
모든 현대 IT 조직은 위험을 컨트롤 해야합니다. 보안과 유용성 사이의 균형 잡힌 행동입니다. 아무도 사용할 수 없도록 보안을 유지할 수 있습니다. 또는 사용자가 원하는 모든 작업을 수행 할 수 있지만 위험한 행동으로 인해 전체 클라우드 계정을 위험에 빠뜨리는 모든 곳에서 무료로 사용할 수 있습니다. Terraform을 사용하면 웹 UI 또는 API에서 사용자를 추상화하여 위험을 줄일 수 있습니다. 대신 사용자가 안전하고 안전한 방식으로 작업을 수행 할 수 있도록 안전하고 감사 가능한 추상화 계층을 제공하여 불필요한 권한있는 액세스를 허용하지 않습니다.

---

name: Chapter-2
class: title
# Chapter 2
## Terraform 기본

???
이제 terraform을 설치하고 AWS와 함께 작업 했으므로 실제 인프라를 구축하기 전에 몇 가지 테스트 실행을 수행 할 수 있습니다. 주의 깊게 따라 가면서 각 슬라이드의 명령을 복사하여 쉘에 붙여 넣으십시오.

---
name: what-is-terraform-community
class: img-left
# Terraform이란
![Terraform](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/Terraform_VerticalLogo_FullColor.png)

Terraform은 오픈 소스 프로비저닝 도구입니다.

Go로 작성된 단일 바이너리로 제공됩니다. Terraform은 크로스 플랫폼이며 Linux, Windows 또는 MacOS에서 실행할 수 있습니다.

terraform 설치는 쉽습니다. zip 파일을 다운로드하고 압축을 풀고 실행하기 만하면됩니다.

---
name: terraform-command-line
class: col-2
# Terraform Command Line
Terraform은 커맨드라인 도구입니다.

Terraform 명령은 수동으로 입력하거나 스크립트에서 자동으로 실행됩니다.

명령은 Linux, Windows 또는 MacOS에 상관없이 동일합니다.

Terraform에는 다른 작업을 수행하는 하위 명령들이 있습니다.

```terraform
# Basic Terraform Commands
terraform version
terraform help
terraform init
terraform plan
terraform apply
terraform destroy
```

---
name: terraform-help
# Terraform Help
```tex
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
특정 하위 명령에 대한 도움말을 보려면`terraform <subcommand> help`를 입력합니다.
???
이것은 알아두면 좋은 명령입니다. Terraform 도움말은 사용 가능한 모든 하위 명령을 표시합니다.

---
name: terraform-code
# Terraform Code
```terraform
resource aws_vpc "main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "dedicated"
}
```

Terraform 코드는 [HCL2 툴킷](https://github.com/hashicorp/hcl)을 기반으로합니다. HCL은 HashiCorp 구성 언어를 나타냅니다.

Terraform 코드는 모든 클라우드 또는 플랫폼에서 인프라를 프로비저닝하기 위해 특별히 설계된 선언적 언어입니다.

---
name: main.tf
# Terraform Comments
줄 주석은 octothorpe* 또는 파운드 기호로 시작합니다....샵! #
```hcl
# This is a line comment.
```

블록 주석은 /\*와 \*/ 기호 사이에 포함됩니다.
```tex
/* This is a block comment.
Block comments can span multiple lines.
The comment ends with this symbol: */
```
.small[
\* 는 [octothorpe](https://www.merriam-webster.com/dictionary/octothorpe) 라고 불립니다.
]

---
name: terraform-workspaces
# Terraform Workspaces

테라 폼 작업 공간은 단순히 테라 폼 코드가 포함 된 폴더 또는 디렉토리입니다.

Terraform 파일은 항상`* .tf` 또는`* .tfvars` 확장자로 끝납니다.

대부분의 테라 폼 작업 공간에는 일반적으로 아래 3개정도의 파일을 둡니다. (정해진건 아닙니다.)

**main.tf** - 대부분의 기능 코드는 여기에 있습니다.
**variables.tf** - 이 파일은 변수를 저장하기위한 것입니다.
**outputs.tf** - 테라 폼 실행 끝에 표시되는 내용을 정의합니다.

---
name: terraform-init
# Terraform Init
```tex
*$ terraform init

Initializing provider plugins...
- Checking for available provider plugins...
- Downloading plugin for provider "aws" (hashicorp/aws) 2.35.0...
...
 provider.aws: version = "~> 2.35"

Terraform has been successfully initialized!

```
Terraform은 필요한 공급자와 모듈을 가져와 .terraform 디렉터리에 저장합니다. 모듈 또는 공급자를 추가, 변경 또는 업데이트하는 경우 init를 다시 실행해야합니다.

???
Terraform에는 확장 가능한 아키텍처가 있습니다. 핵심 프로그램 인 terraform을 다운로드하면 코드에 필요한 플러그인과 모듈을 가져옵니다.

---
name: terraform-plan
# Terraform Plan
```tex
*$ terraform plan
An execution plan has been generated and is shown below.
Terraform will perform the following actions:
  # aws_vpc.main will be created
  + resource "aws_vpc" "main" {
      + arn                              = (known after apply)
      + cidr_block                       = "10.0.0.0/16"
      ...
      + instance_tenancy                 = "dedicated"
    }
```
변경 사항을 적용하기 전에 `terraform plan` 으로 미리 봅니다.

???
**`terraform plan`은 드라이런 명령입니다. 우리는 실제로 아직 아무것도 구축하지 않고 있습니다. Terraform은 단지 우리가 실제로 실행하면 무엇을 할 것인지 말하고 있습니다.**

---
name: defining-variables
# 변수는 어디에?
Terraform 변수는 `variables.tf`라는 파일에 배치됩니다. 변수는 기본 설정을 가질 수 있습니다. 기본값을 생략하면 사용자에게 값을 입력하라는 메시지가 표시됩니다. 여기서 우리는 사용하려는 변수를 **선언**합니다.

```tex
variable "prefix" {
  description = "This prefix will be included in the name of most resources."
}

variable "instance_tenancy" {
  description = "A tenancy option for instances launched into the VPC."
* default     = "dedicated"
}
```

???
이러한 모든 변수가 어디에 정의되어 있는지 궁금하다면 일반적으로 _variables.tf_ 파일에서 모두 볼 수 있습니다. 여기서는 사용 가능한 모든 설정을 정의하고 선택적으로 일부 기본값을 선언합니다. 이러한 기본값은 사용자가 자신의 설정으로 재정의하지 않는 경우 terraform에서 사용할 것입니다.

Q. 이러한 기본값을 어디에서 재정의 할 수 있습니까?

A. terraform.tfvars 파일에서 또는 선택적으로 명령 줄에서 또는 환경 변수를 통해. 가장 일반적인 방법은 tfvars 파일을 사용하는 것입니다.

---
name: setting-variables
class: col-2
# 변수는 어떻게 설정할까요?
일부 변수를 정의한 후에는 다른 방법으로 설정하고 재정의 할 수 있습니다. 다음은 각 방법의 우선 순위입니다.

이 목록은 가장 높은 우선 순위 (1)에서 가장 낮은 순위 (5)로 이동합니다.

<br>

```tex
1. Command line flag - 명령 줄 스위치로 실행
2. Configuration file - terraform.tfvars 파일에 설정
3. Environment variable - 쉘 환경의 일부
4. Default Config - variables.tf의 기본값
5. User manual entry - 지정되지 않은 경우 사용자에게 입력을 요청합니다.
```
---
name: lab-exercise-0
# 👩‍💻 Instruqt 시작하기
<br><br>
[Instruqt](https://instruqt.com)는 HashiCorp 교육 플랫폼입니다. 짧은 자습서를 보려면 아래 링크를 방문하거나 Instruqt에 이미 익숙한 경우 다음 슬라이드로 건너 뛸 수 있습니다.

[https://instruqt.com/instruqt/tracks/getting-started-with-instruqt](https://instruqt.com/instruqt/tracks/getting-started-with-instruqt)

---
name: lab-exercise-1
# 👩‍💻 Lab Exercise: Terraform 기본
<br><br>
이 실습에서는 편집기를 설정하고, Terraform 명령 줄 도구를 사용하고, AWS와 통합하고, 다른 설정으로 몇 가지 테스트 실행을 수행하는 방법을 배웁니다.

강사가 실습 환경의 URL을 제공합니다.

🛑 두번째 퀴즈를 완료한 후 중지 합니다.
---
name: chapter-2-review
# 📝 Chapter 2 Review
.contents[
이 장에서 우리는:

* **`terraform init` ** 명령 사용
* **`terraform plan` ** 명령 실행
* 변수에 대해 배웠습니다.
* 임차 및 접두사 설정

]

---
name: Chapter-3
class: title
# Chapter 3
## Terraform in Action

???
**이 장에서는 실제로 샘플 코드를 사용하여 실제 인프라를 구축합니다.**

---
name: anatomy-of-a-resource
# 리소스 분석
모든 테라 폼 리소스는 정확히 동일한 방식으로 구성됩니다.

```terraform
resource type "name" {
  parameter = "foo"
  parameter2 = "bar"
  list = ["one", "two", "three"]
}
```

**resource** = 최상위 키워드<br>
**type** = 리소스 타입. Example: `aws_instance`.<br>
**name** = 이 리소스를 참조하는 임의의 이름입니다. terraform에서 내부적으로 사용합니다. 이 필드는 변수가 될 수 없습니다.

???
리소스 내에서 구성하려는 다른 모든 항목은 중괄호 사이에 삽입됩니다. 여기에는 문자열, 목록 및 맵이 포함될 수 있습니다.

---
name: provider-block
# Terraform 공급자 구성
terraform 핵심 프로그램은 무엇이든 빌드하려면 하나 이상의 공급자가 필요합니다.

사용하려는 공급자의 버전을 수동으로 구성 할 수 있습니다. 이 옵션을 비워두면 Terraform은 기본적으로 사용 가능한 최신 버전의 공급자를 사용합니다.

```hcl
provider "aws" {
  version = "=2.35.0"
}
```

---
name: provider-versioning
# 버전관리 연산자

```tex
- = (or no operator): 정확한 버전 동등성
- !=: 버전이 같지 않음
- \>, >=, <, <=: 버전 비교
- ~>: 약한 제약, 허용되는 가장 오래된 버전과 최신 버전을 모두 제한합니다.
	~> 0.9 설정은 다음과 같습니다.  >= 0.9, < 1.0
	~> 0.8.4 설정은 다음과 같습니다. >= 0.8.4, < 0.9
```
재사용 가능한 모듈은> = 2.35.0과 같이 허용되는 최소 버전 만 제한해야합니다.

???
**이는 모듈을 변경하지 않고 새로운 버전의 Terraform으로 업그레이드 할 수있는 모듈 유연성을 유지하면서 모듈이 호환되는 가장 초기 버전을 지정합니다.**

---

name: terraform-apply
class: compact
# Terraform Apply
```tex
*$ terraform apply
An execution plan has been generated and is shown below.

Terraform will perform the following actions:
  # aws_vpc.main will be created
  + resource "aws_vpc" "main" {
      + cidr_block                       = "10.0.0.0/16"
      + instance_tenancy                 = "dedicated"
        ...
      + tags                             = {
          + "Name" = "main"
        }
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```
`terraform apply`는 계획을 실행하고 승인하면 변경 사항을 적용합니다.

---
name: terraform-destroy
class: compact
# Terraform Destroy
```tex
*$ terraform destroy
An execution plan has been generated and is shown below.

Terraform will perform the following actions:
  # aws_vpc.main will be destroyed
  - resource "aws_vpc" "main" {
      - cidr_block                       = "10.0.0.0/16" -> null
      - instance_tenancy                 = "dedicated" -> null
        ...
      - tags                             = {
          - "Name" = "main"
        } -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.
```
`terraform destroy`는 그 반대입니다. 승인하면 인프라가 제거됩니다.
???
Terraform은 인프라를 생성하는 것처럼 쉽게 파괴 할 수 있습니다. 큰 힘에는 큰 책임이 따른다!

---
name: terraform-fmt
# Terraform Format
Terraform은 내장 된 코드 포맷터/클리너와 함께 제공됩니다. 모든 여백과 목록 들여 쓰기를 깔끔하고 깔끔하게 만들 수 있습니다. 아름다운 코드가 더 잘 동작하는 것(?) 같습니다.

```tex
terraform fmt
```

*.tf 파일이 포함 된 디렉토리에서 실행하기 만하면 코드가 정리됩니다.

---

name: Data-Sources
class: compact

# Terraform Data Sources

```terraform
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"] # Canonical
}
```
데이터 소스는 공급자가 기존 리소스를 반환하도록 쿼리하는 방법이므로 자체적으로 사용할 매개 변수에 액세스 할 수 있습니다.

---

name: dependency-mapping
class: compact

# Terraform Dependency Mapping
Terraform은 자동으로 종속성을 추적 할 수 있습니다. 아래의 두 가지 리소스를 살펴보십시오. aws_instance 리소스에서 강조 표시된 줄을 확인합니다. 이것이 테라 폼에서 한 리소스가 다른 리소스를 참조하도록하는 방법입니다.

```terraform
resource aws_key_pair "my-keypair" {
  key_name   = "my-keypair"
  public_key = file(var.public_key)
}

resource "aws_instance" "web" {
* ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
* key_name      = aws_key_pair.my-keypair.name
```
???
**SSH 키 쌍 외에도 이전 슬라이드에서 데이터 소스 블록을 참조하는 방법도 볼 수 있습니다. 관계를 표시하려면 이전 슬라이드로 돌아가십시오.**

---
name: organizing-your-terraform
# Terraform 코드 구성
Terraform은 작업 공간에서`.tf` 확장자로 끝나는 모든 파일을 읽지 만 관례는 main.tf, variables.tf 및 outputs.tf를 갖는 것입니다. 원하는 경우 더 많은 tf 파일을 추가 할 수 있습니다.

```bash
main.tf
variables.tf
outputs.tf
```

이러한 각 파일을 자세히 살펴 보겠습니다.

---
name: terraform-main
class: compact
# The Main File

첫 번째 파일은 `main.tf`입니다. 일반적으로 테라 폼 코드를 저장하는 곳입니다. 더 크고 복잡한 인프라를 사용하면이를 여러 파일로 나눌 수 있습니다.

```bash
# This is the main.tf file.
resource aws_vpc "main" {
  cidr_block       = var.cidr_block
  instance_tenancy = var.instance_tenancy
}

resource aws_subnet "main" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.cidr_block
  }
}
...
```

???
슬라이드에 맞도록이 코드에서 모든 주석을 제거했습니다.

---
name: terraform-variables
class: compact
# The Variables File

두 번째 파일은 `variables.tf`입니다. 여기에서 변수를 정의하고 선택적으로 일부 기본값을 설정합니다.

```bash
variable "cidr_block" {
  description = "The address space that is used within the VPC. Changing this forces a new resource to be created."
}

variable "instance_tenancy" {
  description = "A tenancy option for instances launched into the VPC. Acceptable values are 'dedicated' and ''"
  default     = "dedicated"
}
```

---
name: terraform-outputs
class: compact

# The Outputs File
출력 파일은 테라 폼 적용이 끝날 때 표시 할 메시지 또는 데이터를 구성하는 곳입니다.

```terraform
output "catapp_url" {
  value = "http://${aws_route53_record.hashicat.fqdn}"
}


output "private_key" {
  value = "${tls_private_key.hashicat.private_key_pem}"
}
```

???
여기 EOF가있는이 비트는 HEREDOC의 예입니다. 출력에 여러 줄 텍스트를 저장할 수 있습니다.

---
name: tf-dependency-graph
class: img-right
# Terraform Dependency Graph
.center[![:scale 100%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/blast_radius_graph_1.png)]

terraform 리소스 그래프는 리소스 간의 종속성을 시각적으로 보여줍니다.

지역 및 접두사 변수는 리소스 그룹을 만드는 데 필요하며 이는 가상 네트워크를 구축하는 데 필요합니다.

???
이것은 종속성 그래프가 어떻게 형성되는지에 대해 약간 이야기하기에 좋은 지점입니다.

---
name: lab-exercise-2a
# 👩‍💻 Lab Exercise: Terraform in Action
Terraform을 사용하여 AWS 리소스를 구축, 관리 및 폐기 해 보겠습니다. 이것은 세 부분으로 구성된 실습입니다. 1 부에서는 HashiCat 애플리케이션 스택을 빌드합니다.

강사가 두 번째 실습 환경의 URL을 제공합니다. 쉽게 참조 할 수 있도록 북마크하세요.

첫 번째 챌린지에서 워크 스테이션을 다시 설정해야합니다. 이는 각 실습에 대해 새 인스턴스를 생성 할 때 예상됩니다.

🛑세 번째 퀴즈를 완료 한 후 **중지**합니다.

???
모든 사람이 실습을 완료하면 Terraform 그래프를 함께 살펴볼 것입니다. instruqt 랩에서 그래프를 실행하면 거기서 멈 춥니 다.

---
name: chapter-3-review
# 📝 Chapter 3 Review

이 장에서 우리는 :

* Terraform 리소스에 대해 배웠습니다.
* 테라 폼 계획 실행, 그래프, 적용 및 파괴
* 종속성에 대해 배웠습니다.
* 랩에서 그래프보기
* main.tf, variables.tf 및 outputs.tf 살펴보기
* Meow World 애플리케이션 구축

---
name: Chapter-4
class: title
# Chapter 4
## AWS 인스턴스 프로비저닝 및 구성

---
name: intro-to-provisioners
# Terraform 프로비저닝 도구 사용
Terraform을 사용하여 가상 머신 또는 컨테이너를 세우고 나면 운영 체제와 애플리케이션을 구성 할 수 있습니다. 여기에서 Provisioner가 등장합니다. Terraform은 Bash, Powershell, Chef, Puppet, Ansible 등을 포함한 여러 유형의 Provisioner를 지원합니다.

.center[https://www.terraform.io/docs/provisioners/index.html]

???
Terraform은 이러한 다른 구성 관리 도구와 함께 작동하여 패키지를 설치하고, 애플리케이션을 구성하고, 가상 머신 또는 컨테이너 내부에서 OS 설정을 변경합니다.

---
name: file-provisioner
class: compact
# The File Provisioner
Terraform 파일 프로비저닝 도구는 원격 시스템에 파일을 복사합니다.

```terraform
provisioner "file" {
  source        = "files/"
  destination   = "/home/${var.admin_username}/"

  connection {
    type        = "ssh"
    user        = var.username
    private_key = file(var.ssh_key)
    host        = ${self.ip}
  }
}
```

provisioner 블록 안에있는 코드의 connection 블록에 주목하세요. 파일 프로비저닝 도구는 SSH 및 WinRM 연결을 모두 지원합니다.

???
Linux 용 SSH, Windows 시스템 용 WinRM.

---
name: remote-exec-provisioner
class: compact
# The Remote Exec Provisioner
원격 exec 프로 비져 너를 사용하면 대상 호스트에서 스크립트 또는 기타 프로그램을 실행할 수 있습니다. 자동으로 실행할 수있는 경우 (예 : 소프트웨어 설치 프로그램) 원격 exec로 실행할 수 있습니다.

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

이 예에서는 일부 권한 및 소유권을 변경하고 일부 환경 변수가있는 스크립트를 실행하기 위해 몇 가지 명령을 실행합니다.

???
로컬 exec 및 원격 exec를 사용하여 Puppet 또는 Ansible 실행을 트리거 할 수 있습니다. 전담 Chef Provisioner도 있습니다.

---
name: puppet-chef-ansible
class: compact
# Terraform & Config Management Tools
.center[![:scale 50%](https://hashicorp.github.io/field-workshops-terraform/slides/aws/terraform-community/images/cpa.jpg)]

Terraform은 Chef, Puppet 또는 Ansible과 같은 일반적인 구성 관리 도구와 잘 작동합니다.

Official Chef Terraform provisioner:<br>
https://www.terraform.io/docs/provisioners/chef.html

Run Puppet with 'local-exec':<br>
https://www.terraform.io/docs/provisioners/local-exec.html

Terraform and Ansible - Better Together:<br>
https://github.com/scarolan/ansible-terraform

---
name: provisioner-tips
# Terraform Provisioner 팁
remote-exec와 같은 Terraform 프로비저닝 도구는 몇 가지 간단한 명령이나 스크립트를 실행해야 할 때 유용합니다. 더 복잡한 구성 관리의 경우 Chef 또는 Ansible과 같은 도구가 필요합니다.

Provisioner는 Terraform 실행이 처음 실행될 때만 실행됩니다. 이러한 의미에서 그들은 멱 등성이 아닙니다. 수명이 긴 VM 또는 서버의 지속적인 상태 관리가 필요한 경우 구성 관리 도구를 사용하는 것이 좋습니다.

반면에 변경 불가능한 인프라를 원하면 [Packer](https://packer.io) 도구를 사용하는 것이 좋습니다.

---
name: lab-exercise-2b
# 👩‍💻 Lab Exercise: Provisioners, Variables and Outputs
실습 2 부에서는 프로비저닝 도구를 사용하여 새 소프트웨어 패키지를 설치합니다. 변수와 출력도 살펴볼 것입니다.

교육 랩으로 돌아가 중단 한 부분부터 계속합니다.

🛑 네 번째 퀴즈를 완료 한 후 **중지**합니다.

---
name: chapter-4-review
# 📝 Chapter 4 Review
.contents[
이 장에서 우리는 :

* Terraform Provisioners에 대해 배웠습니다.
* **file** 과 **remote-exec** 프로비저닝 도구에 대해 알아보았습니다.
* 새로운 프로비저닝 단계로 웹 서버 재 구축을 해보았습니다.
]

---
name: Chapter-5
class: title
# Chapter 5
## Terraform State

---
name: terraform-state
class: compact
# Terraform State
Terraform은 _stateful_ 애플리케이션입니다. 즉, **state file** 내부에서 빌드 한 모든 내용을 추적합니다. 작업 디렉토리에 나타난 terraform.tfstate 및 terraform.tfstate.backup 파일을 보셨을 것입니다.

상태 파일은 Terraform이 알고있는 모든 것에 대한 기록 소스입니다.

```json
{
  "version": 4,
  "terraform_version": "0.12.7",
  "serial": 14,
  "lineage": "452b4191-89f6-db17-a3b1-4470dcb00607",
  "outputs": {
    "catapp_url": {
      "value": "http://go-hashicat-5c0265179ccda553.workshop.aws.hashidemos.io",
      "type": "string"
    },
```

---
name: terraform-refresh
# Terraform Refresh

때때로 인프라는 Terraform의 통제 범위 밖에서 변경 될 수 있습니다.

상태 파일은 인프라의 마지막으로 갱신된 상태를 나타냅니다. 상태 파일이 빌드 한 파일과 여전히 일치하는지 확인하고 확인하려면 `terraform refresh` 명령을 사용할 수 있습니다.

이것은 인프라를 업데이트하지 않는 상태 파일 만 업데이트합니다.

```bash
terraform refresh
```

---
name: change-existing-infra
class: compact
# 기존 인프라 변경

계획을 실행하거나 적용 할 때마다 Terraform은 세 가지 데이터 소스를 조정합니다.

1. 코드에 작성한 내용
2. 상태 파일
3. 실제로 존재하는 것

Terraform은 *.tf 파일에있는 내용을 기반으로 기존 리소스를 추가, 삭제, 변경 또는 교체하기 위해 최선을 다합니다. 다음은 Plan/Apply 중에 각 리소스에 발생할 수있는 네 가지 사항입니다.

```tex
+   create
-   destroy
-/+ replace
~   update in-place
```

---
name: state-quiz
class: compact
# Terraform State Quiz
| Configuration           | State                   | Reality                 | Operation |
| ----------------------- | ----------------------- | ----------------------- |:---------:|
| aws_instance |                         |                         |    ???    |
| aws_instance | aws_instance |                         |    ???    |
| aws_instance | aws_instance | aws_instance |    ???    |
|                         | aws_instance | aws_instance |    ???    |
|                         |                         | aws_instance |    ???    |
|                         | aws_instance |                         |    ???    |

각 시나리오에서 어떤 일이 발생합니까? 논의해 볼까요?

---
name: state-quiz-answers
class: compact

# Terraform State Quiz
| Configuration           | State                   | Reality                 | Operation    |
| ----------------------- | ----------------------- | ----------------------- |:------------:|
| aws_instance |                         |                         | create       |
| aws_instance | aws_instance |                         | create       |
| aws_instance | aws_instance | aws_instance | no-op        |
|                         | aws_instance | aws_instance | delete       |
|                         |                         | aws_instance | no-op        |
|                         | aws_instance |                         | update state |

각 시나리오에서 어떤 일이 발생합니까? 논의해 볼까요?

---
name: Chapter-6
class: title
# Chapter 6
## HCP Terraform

---
name: hcp-terraform
class: img-right

# HCP Terraform
##### HCP Terraform는 Terraform을 사용하여 코드로 인프라를 작성하고 구축하기위한 최고의 워크 플로를 제공하는 무료 SaaS 애플리케이션입니다.
![HCP Terraform](https://hashicorp.github.io/field-workshops-assets/assets/logos/Terraform_Cloud_Logo_Color_RGB.png)

* 상태 저장 및 관리
* Terraform 실행을보고 승인하기위한 웹 UI
* 개인 모듈 레지스트리
* VCS (Version Control System) 통합
* CLI, API 또는 GUI 기반 작업
* 실행 이벤트 알림
* 자동화를위한 전체 HTTP API

---
name: hcp-terraform-vs-tfe
# HCP Terraform or Terraform Enterprise
**HCP Terraform**는 원격 상태 관리, API 기반 실행, 정책 관리 등과 같은 기능을 제공하는 호스팅 된 애플리케이션입니다. 많은 사용자가 클라우드 기반 SaaS 솔루션을 선호하는 이유 중 한가지는 인프라를 유지하여 실행하는 것이 부담될 때 입니다.

**Terraform Enterprise**는 동일한 애플리케이션이지만 클라우드 환경이나 데이터 센터에서 실행됩니다. 일부 사용자는 Terraform Enterprise 애플리케이션에 대한 더 많은 제어가 필요하거나 회사 방화벽 뒤의 제한된 네트워크에서 실행하려고합니다.

이 두 제품의 기능 목록은 거의 동일합니다. 다음 실습에서는 HCP Terraform 계정을 사용할 것입니다.

---
name: hcp-terraform-remote-state
# Terraform Remote State
기본적으로 Terraform은 랩톱 또는 워크스테이션의 작업 공간 디렉토리에 상태 파일을 저장합니다. 이것은 개발 및 실험에는 괜찮지만 프로덕션 환경에서는 상태 파일을 안전하게 보호하고 저장해야합니다.

Terraform에는 상태 파일을 원격으로 저장하고 보호하는 옵션이 있습니다. HCP Terraform 계정은 이제 오픈 소스 사용자에게도 무제한 상태 파일 스토리지를 제공합니다.

모든 상태 파일은 암호화되어 (HashiCorp Vault 사용) HCP Terraform 계정에 안전하게 저장됩니다. 상태 파일을 다시 잃어 버리거나 삭제하는 것에 대해 걱정할 필요가 없습니다.

---
name: execution-mode
# HCP Terraform Execution Modes

**로컬 실행** - Terraform 명령은 랩톱 또는 워크 스테이션에서 실행되며 모든 변수는 로컬로 구성됩니다. 테라 폼 상태 만 원격으로 저장됩니다.

**원격 실행** - Terraform 명령은 HCP Terraform 컨테이너 환경에서 실행됩니다. 모든 변수는 원격 작업 공간에 저장됩니다. 코드는 Version Control System 저장소에 저장할 수 있습니다. 프리 티어 사용자의 경우 동시 실행이 1 회로 제한됩니다.

---
name: lab-exercise-2c
# 👩‍💻 Lab Exercise: HCP Terraform
두 번째 실습의 마지막 부분에서는 무료 HCP Terraform 계정을 만들고 상태 파일의 원격 저장소를 활성화합니다.

교육 랩으로 돌아가 중단 한 부분부터 계속합니다.

---
name: the-end
class: img-caption

# 축하합니다. 워크샵을 완료하셨습니다!
![HashiCorp Employees - 2019](https://storage.googleapis.com/instruqt-hashicorp-tracks/terraform-shared/hashicorp_employees.jpg)

---
name: additional-resources
class: compact
# Additional Resources
If you'd like to learn more about Terraform on AWS try the links below:

HashiCorp Learning Portal<br>
https://learn.hashicorp.com/terraform/

Terraform - Beyond the Basics with AWS<br>
https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/

Terraform AWS Provider Documentation<br>
https://registry.terraform.io/providers/hashicorp/aws/latest/docs

Link to this Slide Deck<br>
https://git.io/JerH6

---
name: Feedback-Survey
# Workshop Feedback Survey
<br><br>
.center[
귀하의 의견은 우리에게 중요합니다!

설문 조사는 짧습니다. 우리는 또 다른 내용으로 함께 할 것을 약속합니다.

## https://bit.ly/hashiworkshopfeedback
]
