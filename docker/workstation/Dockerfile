#FROM gcr.io/instruqt/cloud-client:latest
FROM codercom/code-server:v2
ARG VAULT_TOKEN
ARG TFC_USER_TOKEN

RUN sudo apt -y update
RUN sudo apt -y install software-properties-common unzip python3-pip jq cowsay
RUN echo "Installing Terraform and command line tools."
RUN wget https://releases.hashicorp.com/terraform/0.12.18/terraform_0.12.18_linux_amd64.zip -O /tmp/terraform.zip
RUN sudo unzip /tmp/terraform.zip -d /usr/local/bin
RUN sudo chmod +x /usr/local/bin/terraform
RUN sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
RUN sudo apt -y install graphviz
RUN sudo /usr/bin/pip3 install BlastRadius
RUN echo $TFC_USER_TOKEN > /tmp/tfc_user_token
RUN echo $VAULT_TOKEN > /tmp/vault_token
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

ENV VAULT_TOKEN $VAULT_TOKEN
ENV SHELL=/bin/bash
