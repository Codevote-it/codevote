import { CodevoteInterface } from '@app/data/codevote/interfaces';

export interface CodevoteState {
  codevote: CodevoteInterface;
  allCodevotes: CodevoteInterface[];
}

export const initialCodevoteState = {};
