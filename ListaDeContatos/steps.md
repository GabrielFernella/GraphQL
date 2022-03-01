# Commands ans packages
1. yarn init -y
2. yarn add nodemon -D 
3. yarn add graphql apollo-server
4. yarn add @babel/core @babel/cli @babel/preset-env @babel/node -D
5. yarn add @graphql-tools/merge @graphql-tools/load-files
6. yarn add knex pg
7. yarn knex init  (gerar arquivo de configuração do knex)
8. yarn knex migrate:make create_table_contato (criando a migration)
9. yarn knex migrate:latest




Modelo alternativo
Developer  eu estou trabalhando com esse modelo
src{
    config = pasta de configs onde esta o arquivo q da merge nos types e resolvers

    controller=  igual a pasta service so q eu to mais acostumado em usar o nome controller

    database = igual a pasta db

     model = igual a pasta modules 

     server.js = igual seu arquivo index da pasta src, por costume eu uso o server

OBS: eu n estou usando a pasta graphql
}

query ExampleQuery{
  contatos {
    id,email,nome,password
  }
}

mutation{
  criarContato (
    data: {
      email: "daniel@gmail.com",
      nome: "Daniel",
      password: "123"
    }
  ){
    id, nome
  }

  # atualizarContato (
  #   id: $atualizarContatoId2
  #   data: {
  #     email: "gabrielfernella@gmail.com",
  #     nome: "Fernella",
  #     password: "123"
  #   }
  # ){
  #   id, nome, email
  # }

  # deletarContato(
  #   filtro: {
  #     email: "gabrielfernella@gmail.com",
  #   }
  # )
}