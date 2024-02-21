const { User, Pet } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //  user by their username
    getUserByUsername: async (_, { username }) => {
      try {
        const user = await User.findOne({ username });
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user by username");
      }
    },

    users: async () => {
      return User.find().select("-password");
    },

    pets: async () => {
      return Pet.find();
    },
  },
  Mutation: {
    // register a new user
    registerUser: async (_, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { user, token };
      } catch (error) {
        throw new Error("Failed to register user");
      }
    },
    // login a user
    loginUser: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("User not found");
        }
        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
          throw new AuthenticationError("Incorrect password");
        }
        const token = signToken(user);
        return { user, token };
      } catch (error) {
        throw new Error("Failed to login user");
      }
    },
  },
};

module.exports = resolvers;
