import { Injectable } from '@angular/core';
import { UserInterface } from '@app/interfaces';
import { TokenService } from '@app/services/token.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationGqlService } from '../services/authentication-gql.service';
import { actionTypes, getUserSuccessAction } from './authentication.actions';

@Injectable()
export class AuthenticationEffects {
  saveToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.SAVE_TOKEN),
      map((action: { type: string; token: string }) => {
        this.tokenService.set(action.token);
        return { type: 'EMPTY' };
      }),
    ),
  );

  removeToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.REMOVE_TOKEN),
      map(() => {
        this.tokenService.remove();
        return { type: 'EMPTY' };
      }),
    ),
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.GET_USER),
      switchMap(() =>
        this.authenticationGqlService.getUser$().pipe(
          map((response) => {
            return getUserSuccessAction({ response });
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private tokenService: TokenService,
    private authenticationGqlService: AuthenticationGqlService,
  ) {}
}
