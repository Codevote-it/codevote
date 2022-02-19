import { TokenService } from '@app/services/token.service';
import { createReducer, on } from '@ngrx/store';
import {
  saveTokenAction,
  resetAction,
  removeTokenAction,
  getMeSuccessAction,
} from './authentication.actions';
import { AuthenticationState, initialState } from './authentication.state';

export const authenticationReducer = createReducer(
  getInitalState(),
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
  on(resetAction, () => initialState),
);

function getInitalState(): AuthenticationState {
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
