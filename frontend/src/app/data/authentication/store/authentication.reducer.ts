import { TokenService } from '@app/core/services';
import { createReducer, on } from '@ngrx/store';
import {
  saveTokenAction,
  resetAuthenticationAction,
  removeTokenAction,
  getMeSuccessAction,
} from './authentication.actions';
import {
  AuthenticationState,
  initialAuthenticationState,
} from './authentication.state';

export const authenticationReducer = createReducer(
  getInitalState(initialAuthenticationState),
  on(saveTokenAction, (state, { token }) => ({
    ...state,
    token,
  })),
  on(removeTokenAction, (state) => ({
    ...state,
    token: '',
  })),
  on(getMeSuccessAction, (state, { response }) => ({
    ...state,
    ...response,
    authenticated: true,
  })),
  on(resetAuthenticationAction, () => initialAuthenticationState),
);

function getInitalState(
  initialState: AuthenticationState,
): AuthenticationState {
  const tokenService = new TokenService();
  const token = tokenService.get();

  if (token) {
    return {
      ...initialState,
      token,
    };
  }

  return initialState;
}
