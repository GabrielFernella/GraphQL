const {startServer} = require("./startServer");

const {resolvers} = require('./graphql/resolvers')
const {typeDefs} = require('./graphql/typeDefs')

startServer({typeDefs, resolvers})
