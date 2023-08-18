## Redis Streams demo: [React.Js + TypeScript + Node.js] + [SpringBoot + Firebase] + [Python]

<div align="center">
  <img  width="60%" 
    src="https://github.com/gustavoramosdesousa/redis-stream-demo/blob/main/images/redis-stream-demo.png" alt="redis-arch" />
  <p>Arquitetura da Demonstração</p>
</div>

### Sobre o projeto
<em_breve_DESCRICAO_DO_PROJETO>
<!--
Trata-se de uma aplicação de demonstração que se propõe a integrar os serviços do Firebase (versão superior a 9) com ReactJS. O diferencial do projeto é que ele é totalmente tipado, fazendo forte uso do TypeScript. 
-->
##### Funcionalidades
<em_breve_FUNCIONALIDADES_DO_PROJETO>
<!--
- Salvar documentos no firebase (utilizando [addDoc](https://firebase.google.com/docs/reference/js/firestore_?hl=pt-br#adddoc));
- Recuperar documentos via chamada síncrona (utilizando [getDocs](https://firebase.google.com/docs/reference/js/firestore_?hl=pt-br#getdocs));
- Recuperar documento de forma automática (utilizando [onSnapShot](https://firebase.google.com/docs/reference/js/firestore_?hl=pt-br#onsnapshot)).
-->
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
cd  .\js-producer\
yarn dev
```
Mais detalhes [aqui](https://github.com/gustavoramosdesousa/redis-stream-demo/tree/main/js-redis-producer).

- Consumer 01: apartir da raiz `"redis-stream-demo/"`, acessar `"redis-stream-demo/java-redis-consumer/"`
```bash
cd  .\java-redis-consumer\
yarn dev
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