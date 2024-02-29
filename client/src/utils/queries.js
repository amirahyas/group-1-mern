import { gql } from "@apollo/client";

export const QUERY_PETS = gql`
  query Pets {
  pets {
    id
    name
    breed
    age
    image
  }
}
`

export const QUERY_USERS = gql`
  query users {
  users {
    username
    email
  }
}
`

export const QUERY_USER = gql`
  {
  user {
    _id
    username
    email
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
