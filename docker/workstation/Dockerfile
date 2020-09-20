#FROM gcr.io/instruqt/cloud-client:latest
FROM codercom/code-server:v2
ARG VAULT_TOKEN
ARG TFC_USER_TOKEN

RUN sudo apt -y update
RUN sudo apt -y install software-properties-common unzip python3-pip jq cowsay nano emacs
RUN sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
RUN sudo apt -y install graphviz
RUN sudo /usr/bin/pip3 install BlastRadius
RUN echo $TFC_USER_TOKEN > /var/tfc_user_token
RUN echo $VAULT_TOKEN > /var/vault_token
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
RUN wget https://storage.googleapis.com/instruqt-hashicorp-tracks/vsc-extensions/mauve.terraform-1.4.0.tar.gz -O /tmp/mauve.terraform-1.4.0.tar.gz
RUN wget http://www.vcheng.org/ponysay/ponysay_3.0.2-1_all.deb -O /tmp/ponysay_3.0.2-1_all.deb
RUN sudo dpkg -i /tmp/ponysay_3.0.2-1_all.deb
RUN sudo mkdir -p /root/.vim/pack/jvirtanen/start
RUN sudo git clone git://github.com/jvirtanen/vim-hcl.git /tmp/vim-hcl
RUN sudo mv /tmp/vim-hcl /root/.vim/pack/jvirtanen/start
RUN sudo git clone https://github.com/altercation/vim-colors-solarized /tmp/vim-colors-solarized
RUN sudo mv /tmp/vim-colors-solarized/colors /root/.vim/colors
RUN sudo echo -e "let g:solarized_termcolors=256\nset t_Co=256\nsyntax enable\nset background=dark\ncolorscheme solarized" > /tmp/.vimrc
RUN sudo mv /tmp/.vimrc /root/.vimrc
RUN wget https://releases.hashicorp.com/terraform/0.12.20/terraform_0.12.20_linux_amd64.zip -O /tmp/terraform.zip
RUN sudo unzip -o /tmp/terraform.zip -d /usr/local/bin
RUN sudo chmod +x /usr/local/bin/terraform
ENV VAULT_TOKEN $VAULT_TOKEN
ENV SHELL=/bin/bash
