import { gql } from 'graphql-request';

export const getMeQuery = function (): string {
  return gql`
    {
      me {
        id
        displayName
        username
        profileImageUrl
      }
    }
  `;
};
