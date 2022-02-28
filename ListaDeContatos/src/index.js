const {startServer} = require("./startServer");

const {resolvers,typeDefs} = require('./graphql')

startServer({typeDefs, resolvers})
