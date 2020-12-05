const Koa = require('koa')
const { ApolloServer } = require("apollo-server-koa")
const { makeExecutableSchema } = require('graphql-tools')

const { resolvers, typeDefs } = require('./schemas')

const PORT = 5000;
const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers })
})

const app = new Koa()
server.applyMiddleware({ app })

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT + server.graphqlPath}`)
})