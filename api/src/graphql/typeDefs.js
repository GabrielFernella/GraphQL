// ./graphql/typeDefs.js
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))

const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs







// import { printSchema } from 'graphql';
// import { loadSchemaSync } from "@graphql-tools/load";
// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
// import path from 'path';

// const typeDefs = loadSchemaSync("./**/*.gql", {
//   loaders: [new GraphQLFileLoader()],
// });

// /*const typeDefs = loadSchemaSync(path.join(__dirname, 'modules', '**', '*.gql'), {
//   loaders: [new GraphQLFileLoader()],
// });*/

// console.log(printSchema(typeDefs));

// export default typeDefs;


// /*import { mergeTypeDefs } from '@graphql-toolkit/schema-merging'

// type Config = Parameters<typeof mergeTypeDefs>[1]

// export const mergeTypes = (types: any[], options?: { schemaDefinition?: boolean; all?: boolean } & Partial<Config>) => {
//   const schemaDefinition = options && typeof options.schemaDefinition === 'boolean' ? options.schemaDefinition : true

//   return mergeTypeDefs(types, {
//     useSchemaDefinition: schemaDefinition,
//     forceSchemaDefinition: schemaDefinition,
//     throwOnConflict: true,
//     commentDescriptions: true,
//     reverseDirectives: true,
//     ...options
//   })
// }
// */


// /*import {fileLoader, mergeTypes} from 'merge-graphql-schemas';// vai buscar todos os aquivos com extensão gql e juntar em um Array
// import path from 'path';

// const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql')); // vai buscar todos os arquivos gql e add em um array
// const typeDefs = mergeTypes(typesArray);

// console.log(typeDefs);

// export default typeDefs;*/