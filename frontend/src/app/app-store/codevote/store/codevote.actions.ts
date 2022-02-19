import { CodevoteResponse } from '@app/app-store/codevote/interfaces';
import { createAction, props } from '@ngrx/store';

export const enum actionTypes {
  GET_CODEVOTE = '[Codevote Action Service] Get Codevote',
  GET_CODEVOTE_SUCCESS = '[Codevote Action Effect] Get Codevote Success',
  GET_CODEVOTE_ERROR = '[Codevote Action Effect] Get Codevote Error',
  RESET = '[Codevote Action Service] Reset',
}

export const getCodevoteAction = createAction(actionTypes.GET_CODEVOTE);

export const getCodevoteSuccessAction = createAction(
  actionTypes.GET_CODEVOTE_SUCCESS,
  props<{ response: CodevoteResponse }>(),
);

export const getCodevoteErrorAction = createAction(
  actionTypes.GET_CODEVOTE_ERROR,
);

export const resetAction = createAction(actionTypes.RESET);
