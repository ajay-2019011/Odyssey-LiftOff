const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
//shorthand property notation with implied keys, 
//because we've named our constant with the matching key (typeDefs)
const server = new ApolloServer({ typeDefs })

server.listen().then( () => {
        console.log("Server is running at PORT 4000........")
    }
)

