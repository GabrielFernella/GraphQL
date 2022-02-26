const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'))

const resolvers = mergeTypeDefs(typesArray)

export default resolvers

// import { printSchema } from 'graphql';
// import { loadSchemaSync } from "@graphql-tools/load";
// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
// import path from 'path';

// const resolvers = loadSchemaSync("./modules/**/resolvers.js", {
//   loaders: [new GraphQLFileLoader()],
// });

// export default resolvers;

