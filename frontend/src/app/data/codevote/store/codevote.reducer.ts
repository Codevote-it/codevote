import { createReducer, on } from '@ngrx/store';
import {
  getCodevoteSuccessAction,
  resetCodevoteAction,
} from './codevote.actions';
import { initialCodevoteState } from './codevote.state';

export const codevoteReducer = createReducer(
  initialCodevoteState,
  on(getCodevoteSuccessAction, (state, { response }) => ({
    ...state,
    codevote: response.codeVote,
  })),
  on(resetCodevoteAction, () => initialCodevoteState),
);
