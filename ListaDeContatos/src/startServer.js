const { ApolloServer} = require('apollo-server');

const UsuarioCadastroService = require("./services/UsuarioCadastroService");

function startServer({typeDefs, resolvers, services}){
  // mongoose.connect('mongodb://localhost:27017/graphql', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true, // para não mostrar os warns quando iniciar a aplicação 
  // });

  const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: () =>  services,
    formatError: (err) => {
    if(err.message.startsWith("Error")){
      return new Error(err.message)
    }

    return err;
  },
});

  server.listen().then(({url}) => console.log(`💥 Server started at ${url}`));
}

module.exports = {startServer};
