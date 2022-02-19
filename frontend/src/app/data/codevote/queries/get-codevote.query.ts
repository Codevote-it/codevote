import { gql } from 'graphql-request';

export const getCodevoteQuery = gql`
  {
    codeVote(id: "") {
      snippet1
      snippet2
      creator {
        id
        displayName
        username
        profileImageUrl
      }
    }
  }
`;
