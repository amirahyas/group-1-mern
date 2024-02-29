const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    favorites: [Pet]
}

type Pet {
    id: ID!
    name: String!
    breed: String!
    age: Int!
    image: String
}

type Favorite {
  pets: [Pet]
}

type Auth {
    token: ID
    user: User
  }



type Query {
    users: [User]
    getUserByUsername(username: String!): User
    pets: [Pet]!
    user: User
    favorites: [Pet]
}

type Mutation {
    registerUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addFavorites(pets: ID!): User
  }
`;



module.exports = typeDefs