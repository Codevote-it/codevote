import { UserInterface } from '@app/interfaces';

export interface AuthenticationState {
  token: string;
  authenticated: boolean;
  user: UserInterface | null;
}

export const initialState: AuthenticationState = {
  token: '',
  authenticated: false,
  user: null,
};
