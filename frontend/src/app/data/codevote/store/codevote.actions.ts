import {
  AllCodevotesResponse,
  CodevoteResponse,
  CreateCodevoteRequest,
  EditCodevoteResponse,
} from '@app/data/codevote/interfaces';
import { createAction, props } from '@ngrx/store';
import { VoteRequest } from '../interfaces/vote.request';
import { VoteResponse } from '../interfaces/vote.response';

export const enum codevoteActionTypes {
  GET_CODEVOTE = '[Codevote Action Service] Get Codevote',
  GET_CODEVOTE_SUCCESS = '[Codevote Action Effect] Get Codevote Success',
  GET_CODEVOTE_ERROR = '[Codevote Action Effect] Get Codevote Error',

  GET_ALL_CODEVOTES = '[Codevote Action Service] Get All Codevotes',
  GET_ALL_CODEVOTES_SUCCESS = '[Codevote Action Effect] Get All Codevotes Success',
  GET_ALL_CODEVOTES_ERROR = '[Codevote Action Effect] Get All Codevotes Error',

  CREATE_CODEVOTE = '[Codevote Action Service] Create Codevote',
  CREATE_CODEVOTE_SUCCESS = '[Codevote Action Effect] Create Codevote Success',
  CREATE_CODEVOTE_ERROR = '[Codevote Action Effect] Create Codevote Error',

  VOTE = '[Codevote Action Service] Vote',
  VOTE_SUCCESS = '[Codevote Action Effect] Vote Success',
  VOTE_ERROR = '[Codevote Action Effect] Vote Error',

  EDIT_CODEVOTE_SUCCESS = '[Codevote Action Effect] Edit codevote',

  RESET = '[Codevote Action Service] Reset',
}

export const getCodevoteAction = createAction(
  codevoteActionTypes.GET_CODEVOTE,
  props<{ id: string }>(),
);

export const getCodevoteSuccessAction = createAction(
  codevoteActionTypes.GET_CODEVOTE_SUCCESS,
  props<{ response: CodevoteResponse }>(),
);

export const getCodevoteErrorAction = createAction(
  codevoteActionTypes.GET_CODEVOTE_ERROR,
);

export const getAllCodevotesAction = createAction(
  codevoteActionTypes.GET_ALL_CODEVOTES,
);

export const getAllCodevotesSuccessAction = createAction(
  codevoteActionTypes.GET_ALL_CODEVOTES_SUCCESS,
  props<{ response: AllCodevotesResponse }>(),
);

export const getAllCodevotesErrorAction = createAction(
  codevoteActionTypes.GET_ALL_CODEVOTES_ERROR,
);

export const createCodevoteAction = createAction(
  codevoteActionTypes.CREATE_CODEVOTE,
  props<{ request: CreateCodevoteRequest }>(),
);

export const createCodevoteSuccessAction = createAction(
  codevoteActionTypes.CREATE_CODEVOTE_SUCCESS,
);

export const createCodevoteErrorAction = createAction(
  codevoteActionTypes.CREATE_CODEVOTE_ERROR,
);

export const voteAction = createAction(
  codevoteActionTypes.VOTE,
  props<{ request: VoteRequest }>(),
);

export const voteSuccessAction = createAction(
  codevoteActionTypes.VOTE_SUCCESS,
  props<{ response: VoteResponse }>(),
);

export const editCodevoteSuccessAction = createAction(
  codevoteActionTypes.EDIT_CODEVOTE_SUCCESS,
  props<{ response: EditCodevoteResponse }>(),
);

export const voteErrorAction = createAction(codevoteActionTypes.VOTE_ERROR);

export const resetCodevoteAction = createAction(codevoteActionTypes.RESET);
