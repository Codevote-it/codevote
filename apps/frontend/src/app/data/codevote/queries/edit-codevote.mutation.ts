import { gql } from 'graphql-request';
import { EditCodevoteRequest } from '@app/data/codevote/interfaces';

export const editCodevoteMutation = function (
  request: EditCodevoteRequest,
): string {
  return gql`
    mutation {
      editCodevote(
        id: "${request.id}"
        input: {
          snippet1: {
            title: "${request.input.snippet1.title}"
            content: "${request.input.snippet1.content}"
          }
          snippet2: {
            title: "${request.input.snippet2.title}"
            content: "${request.input.snippet2.content}"
          }
        }
      ) {
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
