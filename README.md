# Apliação com Docker e Nodemon

## Pré-requisitos:

#### necessidade do docker + docker-compose instalado

#### npm install express<br>npm install -g nodemon

Aplicação modelo utilziando

&nbsp; - `Docker`<br>
&nbsp; - `Nodemon`

## Passo-a-passo:

&nbsp; - `Dockerfile`: Configurar o Dockerfile.<br>
&nbsp; - `docker image build`: Builde sua image, ou consiga uma apartir do docker hub para funcionar.<br>
&nbsp; - `Express`: Utilizar Express como 'base' para um mini-servidor.<br>
&nbsp; - `package.json`: Dentro do package.json, existe um comando em `scripts`, com uma propriedade `start`, essa propriedade é passado como parametro o `nodemon`, uma ferramenta interna do Node para restartar a aplicação a qualquer mudança. Exemplo: `"nodemon index.js"`<br>

## Subindo a aplicação:

Após a configuração do docker-compose(descrito dentro do arquivo), e toda a aplicação, basta executar o comando `docker-compose up` para subir toda a apliação, se tudo der certo, a apliação ira abrir na porta selecionada.<br>
Por padrão, Ctrl+C "quebra" a aplicação. Docker-compose utiliza também de um comando docker-compose down, que desce a aplicação.
