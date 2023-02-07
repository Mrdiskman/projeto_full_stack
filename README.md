# Desafio-Full-Stack

## Projeto Realizado com:
  * NodeJs, Express, React
  * 
### Descrição
O desafio consiste criar um projeto back end e um front end e fazer eles conversarem entre si

### Documentação
Para instalar as dependencias use o comando

```
yarn install
```

**Atenção:** é necessario preencher o dotenv com base no .env.example

Agora é necessario usar o comando para aplicar as migrações 

```
 yarn typeorm migration:run -d src/data-source.ts
```

Agora basta iniciar o servidor com o comando:

```
 yarn dev
```

Agora basta abrir o Arquivo com a aplicaçao front-end e seguir o README da mesma
