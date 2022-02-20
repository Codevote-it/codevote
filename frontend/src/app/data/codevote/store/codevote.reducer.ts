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
    ...response,
  })),
  on(resetCodevoteAction, () => initialCodevoteState),
);
