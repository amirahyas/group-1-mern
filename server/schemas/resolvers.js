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

    user: async (parent, args, context) => {
      // if (context.user) {
        const user = await User.findById("65de76d569b6b55e6efe433b").populate("favorites")

        return user;
      // }

      throw AuthenticationError;
    },

    pets: async () => {
      return Pet.find();
    },
    favorites: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate("favorites");

        return user.favorites.id(_id);
      }

      throw AuthenticationError;
    },
  },
  Mutation: {
    // register a new user
    registerUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // login a user
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addFavorites: async (parent, { pets }, context) => {
      if (context.user) {
      
        const data = await User.findByIdAndUpdate(context.user._id, { $push: { favorites: pets } }, {new: true}).populate("favorites");
      console.log(data);
        return data;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
