FROM gcr.io/instruqt/cloud-client:latest
ARG VAULT_TOKEN

RUN echo "Installing Terraform and command line tools."
RUN wget https://releases.hashicorp.com/terraform/0.12.9/terraform_0.12.9_linux_amd64.zip -O /tmp/terraform.zip
RUN unzip /tmp/terraform.zip -d /usr/local/bin
RUN chmod +x /usr/local/bin/terraform

ENV VAULT_TOKEN $VAULT_TOKEN