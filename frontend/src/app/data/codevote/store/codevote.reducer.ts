import { createReducer, on } from '@ngrx/store';
import {
  editCodevoteSuccessAction,
  getAllCodevotesSuccessAction,
  getCodevoteSuccessAction,
  resetCodevoteAction,
  voteSuccessAction,
} from './codevote.actions';
import { initialCodevoteState } from './codevote.state';

export const codevoteReducer = createReducer(
  initialCodevoteState,
  on(getCodevoteSuccessAction, (state, { response }) => ({
    ...state,
    ...response,
  })),
  on(getAllCodevotesSuccessAction, (state, { response }) => ({
    ...state,
    ...response,
  })),
  on(voteSuccessAction, (state, { response }) => ({
    ...state,
    codevote: response.vote,
  })),
  on(editCodevoteSuccessAction, (state, { response }) => ({
    ...state,
    codevote: response.editCodevote,
  })),
  on(resetCodevoteAction, () => initialCodevoteState),
);
