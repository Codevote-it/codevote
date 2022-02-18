import { UserInterface } from '@app/interfaces';
import { createAction, props } from '@ngrx/store';

export const enum actionTypes {
  SAVE_TOKEN = '[Authentication Action Service] Save Token',
  REMOVE_TOKEN = '[Authentication Action Service] Remove Token',
  GET_USER = '[Authentication Action Service] Get User',
  GET_USER_SUCCESS = '[Authentication Action Effect] Get User Success',
  GET_USER_ERROR = '[Authentication Action Effect] Get User Error',
  RESET = '[Authentication Action Service] Reset',
}

export const saveTokenAction = createAction(
  actionTypes.SAVE_TOKEN,
  props<{ token: string }>(),
);

export const removeTokenAction = createAction(actionTypes.REMOVE_TOKEN);

export const getUserAction = createAction(actionTypes.GET_USER);

export const getUserSuccessAction = createAction(
  actionTypes.GET_USER_SUCCESS,
  props<{ response: UserInterface | null }>(),
);

export const getUserErrorAction = createAction(actionTypes.GET_USER_ERROR);

export const resetAction = createAction(actionTypes.RESET);
