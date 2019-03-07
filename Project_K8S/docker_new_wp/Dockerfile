FROM ubuntu:latest
ENV DEBIAN_FRONTEND noninteractive

RUN apt update -y && \
    apt-get install -y nginx wget tar locales php-pear php-apcu php-cli php-common php-curl php-fpm php-gd php-imagick php-imap php-intl php-json php-ldap php-mcrypt php-memcache php-mysqlnd php-pspell php-readline php-recode php-snmp php-tidy php-xmlrpc php-xsl php-zip supervisor

RUN wget https://wordpress.org/latest.tar.gz && tar -zxf latest.tar.gz
COPY

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
RUN dpkg-reconfigure locales
