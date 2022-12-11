const {gql} = require("apollo-server")
// Some comments
//Some more commens
//More of them
const typeDefs = gql`
  type Query{
    spaceCats: [SpaceCat]
  }
  type SpaceCat{
    id:ID!
    name: String!
    age: Int
    missions: [Mission]
  }
  type Mission{
    id: ID!
    name: String!
    description: String!
  }
`
module.exports = typeDefs