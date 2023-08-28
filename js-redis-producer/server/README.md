## Redis Streams demo - server: [TypeScript + Node.js + Redis]

<div align="center">
  <img  width="70%" 
    src="https://github.com/gustavoramosdesousa/redis-stream-demo/blob/main/images/redis-stream-demo.png" alt="redis-arch" />
  <p>Arquitetura da Demonstração</p>
</div>


### Sobre o projeto

##### Funcionalidades
- [x]  Implementar WevSocket entre *producer* e *server*
- [x]  Implementar conexão com Redis  
- [ ]  Tratar mensagens do módulo *producer* para enviá-los aos streams corretos
- [ ]  Devolver mensagens para módulo *producer* com destino (stream) de cada ordem
- [ ]  Api Rest para consulta de status do serviço


##### Tecnologias Utilizadas
![NodeJS](https://img.shields.io/badge/-Node.Js-green?style=flat&logo=node) ![Express.JS](https://img.shields.io/badge/-Express.Js-0A1A2F?style=flat&logo=express) ![Redis](https://img.shields.io/badge/-Redis-red?style=flat&logo=redis&logoColor=white)


##### Status do Projeto
![](https://img.shields.io/badge/STATUS-EM_ANDAMENTO-orange)

## Instalação


```bash
#terminal 02
cd  .\js-redis-producer\server\
yarn install
yarn dev
```

## Como Usar