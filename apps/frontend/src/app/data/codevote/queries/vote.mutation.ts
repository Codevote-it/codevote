import { gql } from 'graphql-request';
import { VoteRequest } from '../interfaces/vote.request';

export const voteMutation = function (request: VoteRequest): string {
  return gql`
    mutation {
      vote(input: {
        codevoteId: "${request.codevoteId}"
        snippetId: "${request.snippetId}"
      }) {
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
