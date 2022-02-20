import { gql } from 'graphql-request';

export const getCodevoteQuery = function (props: { id: string }): string {
  return gql`
    {
      codevote(id: "${props.id}") {
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
