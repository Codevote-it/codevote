import { TokenService } from '@app/data/services';
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
    authenticated: true,
  })),
  on(removeTokenAction, (state) => ({
    ...state,
    token: '',
    authenticated: false,
  })),
  on(getMeSuccessAction, (state, { response }) => ({
    ...state,
    ...response,
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
      authenticated: true,
      token,
    };
  }

  return initialState;
}
