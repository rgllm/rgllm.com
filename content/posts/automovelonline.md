---
title: 'Como autenticar no Automóvel Online em macOS'
date: '2022-01-10T00:00:00.322Z'
excerpt: 'Fazer a autenticação no Automóvel online usando macOS e Firefox'
image: '/static/images/automovelonline.png'
---

[This is Portugal specific therefore this post is in portuguese]

O Automóvel On-line permite pedir pela Internet vários atos de registo sobre veículos e respetivos reboques e receber na sua
residência/sede, sem deslocações, o Certificado de Matrícula/Documento Único Automóvel.
Para este tutorial é necessário ter Cartão de Cidadão e um leitor.

Quando se acede ao site aparece o seguinte erro:

E063 - A área à qual tentou aceder é reservada e apenas acessível para utilizadores com um certificado digital válido.
Por favor, instale um certificado antes de tentar aceder a esta área do site.
Antes de voltar a tentar, por favor feche esta janela.

Os passos para contornar este erro são:

1. Fazer download e instalar a aplicação [Autenticação.gov](https://www.autenticacao.gov.pt/).

2. Fazer download do [Firefox 90.0](https://ftp.mozilla.org/pub/firefox/releases/90.0/mac/en-US/) já que isto não funciona nas versões mais recente e instalar.

3. Ir às configuraçõe do Firefox e pesquisar por "cert".

4. Clicar em "security devices" e clicar em "Load".

5. No Module Name colocar "autenticacao.gov" e apontar o ficheiro para "/usr/local/lib/libpteidpkcs11.2.0.0.dylib".

6. Iniciar a aplicação "Autenticação.gov", ligar o leitor de cartões e inserir o Cartão de Cidadão.

7. Ao entrar no [automovelonline.mj.pt](https://automovelonline.mj.pt/) aparece um aviso com os dados e certificados para aceitar.

8. Depois de aceitar é só colocar o Pin de Autenticação do Cartão de Cidadão e usar o portal.
