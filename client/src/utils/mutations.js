import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FAVORITES = gql`
  mutation Mutation($pets: ID!) {
  addFavorites(pets: $pets) {
    username
    favorites {
        id
        name
        breed
        age
        image
    }
  }
}
`;

export const REMOVE_FAVORITES = gql`
  mutation Mutation($pets: ID!) {
  removeFavorites(pets: $pets) {
    username
    favorites {
        id
        name
        breed
        age
        image
    }
  }
}
`;
