import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getUserAction,
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

  public getUser(): void {
    this.store.dispatch(getUserAction());
  }

  public reset(): void {
    this.store.dispatch(resetAction());
  }
}
