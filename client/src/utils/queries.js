import { gql } from "@apollo/client";

export const QUERY_PETS = gql`
  query Pets {
  pets {
    name
    breed
    age
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
