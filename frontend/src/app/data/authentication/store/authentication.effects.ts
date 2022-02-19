import { Injectable } from '@angular/core';
import { TokenService } from '@app/data/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationGraphqlService } from '@app/data/authentication/services';
import {
  authenticationActionTypes,
  getMeErrorAction,
  getMeSuccessAction,
} from './authentication.actions';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class AuthenticationEffects {
  saveToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authenticationActionTypes.SAVE_TOKEN),
        map((action: { type: string; token: string }) => {
          this.tokenService.set(action.token);
          return EMPTY;
        }),
      ),
    { dispatch: false },
  );

  removeToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authenticationActionTypes.REMOVE_TOKEN),
        map(() => {
          this.tokenService.remove();
          return EMPTY;
        }),
      ),
    { dispatch: false },
  );

  getMe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActionTypes.GET_ME),
      switchMap(() =>
        this.authenticationGraphqlService.getMe$().pipe(
          map((response) => getMeSuccessAction({ response })),
          catchError(() => of(getMeErrorAction())),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private tokenService: TokenService,
    private authenticationGraphqlService: AuthenticationGraphqlService,
  ) {}
}
