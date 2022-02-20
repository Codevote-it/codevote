import { gql } from 'graphql-request';
import { CreateCodevoteProps } from '../interfaces';

export const createCodevoteMutation = function (
  props: CreateCodevoteProps,
): string {
  return gql`
    {
      createCodevote(input: "${props}") {
        id
      }
    }
  `;
};
