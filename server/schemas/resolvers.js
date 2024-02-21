const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        // Query to return all users
        users: async () => {
            return User.find().select("-password")
        }
    },
    
    Mutation: {
        // Mutation to create a user
        addUser: async (parent, { username, email, password }) => {
            return User.create({ username, email, password });
        //   const token = signToken(profile);
    
        }

             
},
}

module.exports = resolvers;