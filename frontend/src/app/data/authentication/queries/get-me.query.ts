import { gql } from 'graphql-request';

export const getMeQuery = gql`
  {
    me {
      id
      displayName
      username
      profileImageUrl
    }
  }
`;
