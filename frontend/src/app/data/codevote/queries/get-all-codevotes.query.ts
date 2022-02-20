import { gql } from 'graphql-request';

export const getAllCodevotesQuery = function (): string {
  return gql`
    {
      allCodevotes {
        id
        createdAt
        snippet1 {
          title
          content
        }
        snippet2 {
          title
          content
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
