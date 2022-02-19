import { MeResponse } from '@app/app-store/authentication/interfaces';
import { createAction, props } from '@ngrx/store';

export const enum actionTypes {
  SAVE_TOKEN = '[Authentication Action Service] Save Token',
  REMOVE_TOKEN = '[Authentication Action Service] Remove Token',
  GET_ME = '[Authentication Action Service] Get Me',
  GET_ME_SUCCESS = '[Authentication Action Effect] Get Me Success',
  GET_ME_ERROR = '[Authentication Action Effect] Get Me Error',
  RESET = '[Authentication Action Service] Reset',
}

export const saveTokenAction = createAction(
  actionTypes.SAVE_TOKEN,
  props<{ token: string }>(),
);

export const removeTokenAction = createAction(actionTypes.REMOVE_TOKEN);

export const getMeAction = createAction(actionTypes.GET_ME);

export const getMeSuccessAction = createAction(
  actionTypes.GET_ME_SUCCESS,
  props<{ response: MeResponse }>(),
);

export const getMeErrorAction = createAction(actionTypes.GET_ME_ERROR);

export const resetAction = createAction(actionTypes.RESET);
