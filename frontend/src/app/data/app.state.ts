import { authenticationReducer } from './authentication';
import { AuthenticationState } from './authentication/store';
import { codevoteReducer, CodevoteState } from './codevote/store';

export interface AppState {
  authentication: AuthenticationState;
  codevote: CodevoteState;
}

export const appReducers = {
  authentication: authenticationReducer,
  codevote: codevoteReducer,
};
