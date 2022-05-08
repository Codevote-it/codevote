import { gql } from 'graphql-request';

export const getAllCodevotesQuery = function (): string {
  return gql`
    {
      allCodevotes {
        id
        createdAt
        snippet1 {
          id
          title
          content
          voteCount
        }
        snippet2 {
          id
          title
          content
          voteCount
        }
        creator {
          id
          displayName
          username
          profileImageUrl
        }
      }
    }
  `;
};
