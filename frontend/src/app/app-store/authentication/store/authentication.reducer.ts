import { TokenService } from '@app/services/token.service';
import { createReducer, on } from '@ngrx/store';
import {
  saveTokenAction,
  resetAction,
  removeTokenAction,
  getUserSuccessAction,
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
  on(getUserSuccessAction, (state, { response }) => ({
    ...state,
    user: response,
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
