import { CodevoteInterface } from '@app/app-store/codevote/interfaces';

export interface CodevoteState {
  codevote: CodevoteInterface | null;
}

export const initialState: CodevoteState = {
  codevote: null,
};
