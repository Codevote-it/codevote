import { createReducer, on } from '@ngrx/store';
import { getCodevoteSuccessAction, resetAction } from './codevote.actions';
import { initialState } from './codevote.state';

export const codevoteReducer = createReducer(
  initialState,
  on(getCodevoteSuccessAction, (state, { response }) => ({
    ...state,
    codevote: response.codeVote,
  })),
  on(resetAction, () => initialState),
);
