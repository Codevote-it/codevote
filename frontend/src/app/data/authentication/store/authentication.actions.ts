import { MeResponse } from '@app/data/authentication/interfaces';
import { createAction, props } from '@ngrx/store';

export const enum authenticationActionTypes {
  SAVE_TOKEN = '[Authentication Action Service] Save Token',
  REMOVE_TOKEN = '[Authentication Action Service] Remove Token',
  GET_ME = '[Authentication Action Service] Get Me',
  GET_ME_SUCCESS = '[Authentication Action Effect] Get Me Success',
  GET_ME_ERROR = '[Authentication Action Effect] Get Me Error',
  RESET = '[Authentication Action Service] Reset',
}

export const saveTokenAction = createAction(
  authenticationActionTypes.SAVE_TOKEN,
  props<{ token: string }>(),
);

export const removeTokenAction = createAction(
  authenticationActionTypes.REMOVE_TOKEN,
);

export const getMeAction = createAction(authenticationActionTypes.GET_ME);

export const getMeSuccessAction = createAction(
  authenticationActionTypes.GET_ME_SUCCESS,
  props<{ response: MeResponse }>(),
);

export const getMeErrorAction = createAction(
  authenticationActionTypes.GET_ME_ERROR,
);

export const resetAuthenticationAction = createAction(
  authenticationActionTypes.RESET,
);
