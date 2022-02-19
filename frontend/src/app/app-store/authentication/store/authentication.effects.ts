import { Injectable } from '@angular/core';
import { TokenService } from '@app/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationGqlService } from '@app/app-store/authentication/services';
import { actionTypes, getMeSuccessAction } from './authentication.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class AuthenticationEffects {
  saveToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionTypes.SAVE_TOKEN),
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
        ofType(actionTypes.REMOVE_TOKEN),
        map(() => {
          this.tokenService.remove();
          return EMPTY;
        }),
      ),
    { dispatch: false },
  );

  getMe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.GET_ME),
      switchMap(() =>
        this.authenticationGqlService
          .getMe$()
          .pipe(map((response) => getMeSuccessAction({ response }))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private tokenService: TokenService,
    private authenticationGqlService: AuthenticationGqlService,
  ) {}
}
