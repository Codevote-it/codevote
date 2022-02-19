import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getMeAction,
  removeTokenAction,
  resetAction,
  saveTokenAction,
} from '../store';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationActionService {
  constructor(private store: Store) {}

  public saveToken(props: { token: string }): void {
    this.store.dispatch(saveTokenAction(props));
  }

  public removeToken(): void {
    this.store.dispatch(removeTokenAction());
  }

  public getMe(): void {
    this.store.dispatch(getMeAction());
  }

  public reset(): void {
    this.store.dispatch(resetAction());
  }
}
