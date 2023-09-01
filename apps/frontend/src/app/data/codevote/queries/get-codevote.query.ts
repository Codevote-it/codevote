import { gql } from 'graphql-request';

export const getCodevoteQuery = function (props: { id: string }): string {
  return gql`
    {
      codevote(id: "${props.id}") {
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
