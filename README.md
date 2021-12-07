# Buscador de CEP

## Sobre a aplicação
Este projeto consiste em uma aplicação feita para buscar um CEP usando a api [Busca CEP](https://apicep.com/api-de-consulta/). <br />
Ele retorna as seguintes informações (nem todos os CEPs retornam as cinco): <br />
• CEP; <br />
• Estado (sua sigla, no caso); <br />
• Cidade; <br />
• Bairro; <br />
• Rua.  <br />

## Instalação
1 - Caso você tenha o [git](https://git-scm.com) instalado no seu computador, execute o código abaixo no terminal. Caso contrário, você pode fazer o download do arquivo ZIP clicando no botão "code" em cima da seção com os arquivos do programa.
```bash
$ git clone git@github.com:biancarsouza/Buscador-de-CEP.git
```
2 - Abra a pasta "Buscador-de-CEP" no terminal.
```bash
$ cd Buscador-de-CEP
```
3 - Instale as dependências do programa com o seguinte comando, ainda no terminal:
```bash
$ yarn
```
4 - Abra a pasta "Buscador-de-CEP" em um editor de código, como o [VSCode](https://code.visualstudio.com/).
5 - Abra o terminal (Ctrl + `) e execute o comando abaixo.
```bash
$ yarn start
```
6 - Caso o não abra uma guia com o programa no navegador automaticamente, embaixo de "You can now view Buscador-de-CEP in the browser." irá aparecer um "Local:" indicando em qual porta do localhost o site está rodando. Exemplo:
```bash
$ Compiled successfully!
$
$ You can now view Buscador-de-CEP in the browser.
$
$   Local:            http://localhost:3000
$   On Your Network:  http://192.168.10.15:3000
$
$ Note that the development build is not optimized.
$ To create a production build, use yarn build.
```
