import { AppState } from '@app/data';
import { createSelector } from '@ngrx/store';
import { CodevoteState } from './codevote.state';

export const codevoteState = (state: AppState) => state.codevote;

export const selectCodevote = createSelector(
  codevoteState,
  (state: CodevoteState) => state.codevote,
);
