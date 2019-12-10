FROM alpine:3.10

ARG SENTINEL_VERSION=0.13.1

WORKDIR /root

COPY *.sentinel ./
COPY test/require-even-number test/require-even-number/
COPY test/require-access-keys-use-pgp test/require-access-keys-use-pgp/
COPY test/restrict-acm-certificate-domains test/restrict-acm-certificate-domains/
COPY test/restrict-vault-auth-methods test/restrict-vault-auth-methods/
COPY test/require-modules-from-pmr test/require-modules-from-pmr/
COPY test/restrict-gcp-instance-image test/restrict-gcp-instance-image/
COPY test/prevent-auto-apply-in-production test/prevent-auto-apply-in-production/

RUN wget https://releases.hashicorp.com/sentinel/${SENTINEL_VERSION}/sentinel_${SENTINEL_VERSION}_linux_amd64.zip
RUN unzip -d /bin sentinel_${SENTINEL_VERSION}_linux_amd64.zip
RUN rm sentinel_${SENTINEL_VERSION}_linux_amd64.zip
