const path = require('path')
//const { mergeResolvers } = require('@graphql-tools/merge')
import {mergeResolvers} from '@graphql-tools/merge'
const { loadFilesSync } = require('@graphql-tools/load-files')

const resolversArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolvers = mergeResolvers(resolversArray)

module.exports = {resolvers}