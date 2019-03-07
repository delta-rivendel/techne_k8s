#!/bin/bash
#Script para atualizar automaticamente os plugins do Wordpress
#Executar dentro da path wp-content/plugins
#Author: Rivendel DevOps
#Date: 28/02/2019

#Vars

#Lista os plugins
ls -l | awk '{print $9}' > plugins.txt

#Obtem a lista de URLs para download
while read -r line; do
  plugin="$line"
  curl -il https://br.wordpress.org/plugins/$plugin | grep Baixar | grep href | awk '{print $6}' | cut -c 7- | cut -d '"' -f 1 >> url.txt
done < plugins.txt

#Faz o backup dos plugins antigos
mkdir ../bkp_oldplugins && cp -Rf * ../bkp_oldplugins/

#Faz o download
while read -r url; do
  wget $url
done < url.txt

#Atualiza os plugins
unzip -o *.zip
