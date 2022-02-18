import { authenticationReducer } from './authentication';
import { AuthenticationState } from './authentication/store/authentication.state';

export interface AppState {
  authentication: AuthenticationState;
}

export const appReducers = {
  authentication: authenticationReducer,
};
