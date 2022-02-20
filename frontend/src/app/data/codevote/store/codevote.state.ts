import { CodevoteInterface } from '@app/data/codevote/interfaces';

export interface CodevoteState {
  codevote: CodevoteInterface | null;
  allCodevotes: CodevoteInterface[] | [];
}

export const initialCodevoteState: CodevoteState = {
  codevote: null,
  allCodevotes: [],
};
