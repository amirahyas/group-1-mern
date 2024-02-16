const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
}

type Query {
    users: [User]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`;



module.exports = typeDefs