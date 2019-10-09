FROM gcr.io/instruqt/cloud-client:latest
ARG VAULT_TOKEN

RUN echo "Installing Terraform and command line tools."
RUN wget https://releases.hashicorp.com/terraform/0.12.10/terraform_0.12.10_linux_amd64.zip -O /tmp/terraform.zip
RUN unzip /tmp/terraform.zip -d /usr/local/bin
RUN chmod +x /usr/local/bin/terraform
RUN apt -y update 
RUN apt -y install software-properties-common
RUN add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
RUN apt -y install graphviz
RUN /usr/local/bin/pip install BlastRadius
RUN echo $VAULT_TOKEN > /tmp/vault_token

ENV VAULT_TOKEN $VAULT_TOKEN