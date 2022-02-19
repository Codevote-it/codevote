import { CodevoteResponse } from '@app/data/codevote/interfaces';
import { createAction, props } from '@ngrx/store';

export const enum codevoteActionTypes {
  GET_CODEVOTE = '[Codevote Action Service] Get Codevote',
  GET_CODEVOTE_SUCCESS = '[Codevote Action Effect] Get Codevote Success',
  GET_CODEVOTE_ERROR = '[Codevote Action Effect] Get Codevote Error',
  RESET = '[Codevote Action Service] Reset',
}

export const getCodevoteAction = createAction(codevoteActionTypes.GET_CODEVOTE);

export const getCodevoteSuccessAction = createAction(
  codevoteActionTypes.GET_CODEVOTE_SUCCESS,
  props<{ response: CodevoteResponse }>(),
);

export const getCodevoteErrorAction = createAction(
  codevoteActionTypes.GET_CODEVOTE_ERROR,
);

export const resetCodevoteAction = createAction(codevoteActionTypes.RESET);
