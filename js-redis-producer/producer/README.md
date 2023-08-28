## Redis Streams demo - producer: [React.Js + TypeScript + Next.js + Firebase]

<div align="center">
  <img  width="70%" 
    src="https://github.com/gustavoramosdesousa/redis-stream-demo/blob/main/images/redis-stream-demo.png" alt="redis-arch" />
  <p>Arquitetura da Demonstração</p>
</div>

### Sobre o projeto

##### Funcionalidades

- [x]  Cadastrar ordens de compras, persistindo no firebase
- [x]  Listar ordens de compras no firebase  
- [ ]  Atualizar status de ordens de compras
- [x]  Implementar WevSocket entre *producer* e *server*
- [ ]  Enviar ordens de compras para *módulo server*
- [ ]  Mostrar streams criados no *redis* 


##### Tecnologias Utilizadas
 ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat&logo=typescript&logoColor=white) | ![ReactJS](https://img.shields.io/badge/-ReactJs-0A1A2F?style=flat&logo=react) ![Next.js](https://img.shields.io/badge/-Next.js-0A1A2F?style=flat&logo=next.js) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=black) 

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


Abra [http://localhost:3000](http://localhost:3000) e veja o resultado!

## Como Usar
