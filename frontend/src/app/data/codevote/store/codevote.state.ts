import { CodevoteInterface } from '@app/data/codevote/interfaces';

export interface CodevoteState {
  codevote: CodevoteInterface | null;
}

export const initialCodevoteState: CodevoteState = {
  codevote: null,
};
