const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
}

type Pet {
    name: String!
    breed: String!
    age: Int!
}

type Auth {
    token: ID!
    user: User
  }



type Query {
    users: [User]
    getUserByUsername(username: String!): User
    pets: [Pet]!
}

type Mutation {
    registerUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
  }
`;



module.exports = typeDefs