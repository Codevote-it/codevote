import { gql } from 'graphql-request';
import { CreateCodevoteRequest } from '../interfaces';

export const createCodevoteMutation = function (
  request: CreateCodevoteRequest,
): string {
  return gql`
    mutation {
      createCodevote(input: {
        snippet1: {
          title: "${request.snippet1.title}",
          content: "${request.snippet1.content}",
        },
        snippet2: {
          title: "${request.snippet2.title}",
          content: "${request.snippet2.content}",
        }
      }) {
        id
      }
    }
  `;
};
