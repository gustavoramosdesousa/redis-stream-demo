## Redis Streams demo: [React.Js + TypeScript + Node.js] + [SpringBoot + Firebase] + [Python]

<div align="center">
  <img  width="70%" 
    src="https://github.com/gustavoramosdesousa/redis-stream-demo/blob/main/images/redis-stream-demo.png" alt="redis-arch" />
  <p>Arquitetura da Demonstração</p>
  <br/>
  <img  width="70%" 
    src="https://github.com/gustavoramosdesousa/redis-stream-demo/blob/main/images/redis-stream-demo-tela-inicial.png" alt="redis-arch" />
  <p>Tela inicial da aplicação (em construção)</p>



</div>


### Sobre o projeto
Trata-se de uma aplicação de demonstração que se propõe a criar um _producer_ de mensagens (React.js) para ser consumido por vários _consumers_ (Node.js, Java e Python), utilizando a estrutura de dados Stream, do Redis. Todas as mensagens também são salvas no Firebase, como banco de dados da aplicação FrontEnd.

Como diferencial, o projeto se utiliza de WebSockets para atualizar o frontend (_producer_ feito em React.js) sempre que os streams do Redis forem atualizados, mesmo que esta atualização não parta do frontend, além de demonstrar a conexão de outras tecnologias com o Redis (Java e Python). O projeto totalmente tipado, fazendo forte uso do TypeScript.

##### Funcionalidades
- **_Producer_: FrontEnd em React.js**
  - Salvar registros no firebase (simular funcionamento da aplicação frontend); ✅
  - Transmitir registros para Stream Redis (via WebSocket para Node.js); ✅
  - Recuperar registros do Redis de forma automática; ✅
  - Mostrar status de utilização dos streams; ⏳
- **_Producer_: BackEnd em Node.js**
  - Receber registros para Stream Redis (via WebSocket pelo React.js); ✅
  - Recuperar registros do Redis e enviá-los para FrontEnd; ✅
  - Aplicar filtro (regra de negócio) aos registros do recuperados do Redis e enviá-los para uma nova fila temporária no Redis; ⏳

- **_Consumers_: BackEnd Java**
  - Integração com Redis; ⏳
  - Recuperar registros do Redis e atualizar Firebase com último estado do registro; ⏳

- **_Consumers_: BackEnd Python**
  - Integração com Redis; ⏳
  - Recuperar registros do Redis e logar no console; ⏳

##### Tecnologias Utilizadas
 ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat&logo=typescript&logoColor=white) | ![ReactJS](https://img.shields.io/badge/-ReactJs-0A1A2F?style=flat&logo=react) ![Next.js](https://img.shields.io/badge/-Next.js-0A1A2F?style=flat&logo=next.js) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=black) | ![NodeJS](https://img.shields.io/badge/-Node.Js-green?style=flat&logo=node) ![Express.JS](https://img.shields.io/badge/-Express.Js-0A1A2F?style=flat&logo=express)
<br/>
![Java](https://img.shields.io/badge/-Java-orange?style=flat&logo=openjdk&logoColor=white) | ![SpringBoot](https://img.shields.io/badge/-SpringBoot-0A1A2F?style=flat&logo=springboot)
<br/>
![Python](https://img.shields.io/badge/-Phyton-orange?style=flat&logo=python&logoColor=white)

##### Status do Projeto
![](https://img.shields.io/badge/STATUS-EM_ANDAMENTO-orange)

## Instalação

Este projeto possui três partes:
- Producer: apartir da raiz `"redis-stream-demo/"`, acessar `"redis-stream-demo/js-redis-producer/"`
```bash
#terminal 01
cd  .\js-redis-producer\server\
yarn install
yarn dev
```
```bash
#terminal 02
cd  .\js-redis-producer\
yarn install
yarn dev
```
Mais detalhes [aqui](https://github.com/gustavoramosdesousa/redis-stream-demo/tree/main/js-redis-producer).

- Consumer 01: apartir da raiz `"redis-stream-demo/"`, acessar `"redis-stream-demo/java-redis-consumer/"`
```bash
cd  .\java-redis-consumer\

```
Mais detalhes [aqui](https://github.com/gustavoramosdesousa/redis-stream-demo/tree/main/java-redis-consumer).

- Consumer 02: apartir da raiz `"redis-stream-demo/"`, acessar `"redis-stream-demo/python-redis-consumer/"`
```bash
cd  .\python-redis-consumer\

```
Mais detalhes [aqui](https://github.com/gustavoramosdesousa/redis-stream-demo/tree/main/python-redis-consumer).


Abra [http://localhost:3000](http://localhost:3000) e veja o resultado!
<!--
Você deve, contudo, atualizar os arquivos

`".../firebase.ts"` para colocar suas credenciais de acesso ao firebase:
```typescript



```

E remover o import, também do arquivo firebase.ts:

`import {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '../../app/private';`
-->
## Como Usar
<em_breve_COMO_USAR>