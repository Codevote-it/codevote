import { AppState } from '@app/app-store/app-store.state';
import { createSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication.state';

export const authenticationState = (state: AppState) => state.authentication;

export const selectToken = createSelector(
  authenticationState,
  (state: AuthenticationState) => state.token,
);

export const selectAuthenticated = createSelector(
  authenticationState,
  (state: AuthenticationState) => state.authenticated,
);

export const selectUser = createSelector(
  authenticationState,
  (state: AuthenticationState) => state.user,
);
