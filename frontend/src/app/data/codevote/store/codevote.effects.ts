import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  codevoteActionTypes,
  createCodevoteErrorAction,
  createCodevoteSuccessAction,
  getAllCodevotesErrorAction,
  getAllCodevotesSuccessAction,
  getCodevoteErrorAction,
  getCodevoteSuccessAction,
} from './codevote.actions';
import { CodevoteGraphqlService } from '../services';
import { of } from 'rxjs';
import { CreateCodevoteProps } from '../interfaces';

@Injectable()
export class CodevoteEffects {
  getCodevote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(codevoteActionTypes.GET_CODEVOTE),
      map((action: { type: string; id: string }) => action),
      switchMap(({ id }) =>
        this.codevoteGraphqlService.getCodevote$({ id }).pipe(
          map((response) => getCodevoteSuccessAction({ response })),
          catchError(() => of(getCodevoteErrorAction())),
        ),
      ),
    ),
  );

  getAllCodevotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(codevoteActionTypes.GET_ALL_CODEVOTES),
      switchMap(() =>
        this.codevoteGraphqlService.getAllCodevotes$().pipe(
          map((response) => getAllCodevotesSuccessAction({ response })),
          catchError(() => of(getAllCodevotesErrorAction())),
        ),
      ),
    ),
  );

  createCodevote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(codevoteActionTypes.CREATE_CODEVOTE),
      map(
        (action: { type: string; props: CreateCodevoteProps }) => action.props,
      ),
      switchMap((props) =>
        this.codevoteGraphqlService.createCodevote$(props).pipe(
          map((response) => {
            console.log(response);
            return createCodevoteSuccessAction();
          }),
          catchError(() => of(createCodevoteErrorAction())),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private codevoteGraphqlService: CodevoteGraphqlService,
  ) {}
}
