import { Injectable } from '@angular/core';
import { AppState } from '@app/app-store/app-store.state';
import { UserInterface } from '@app/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectAuthenticated,
  selectToken,
  selectUser,
} from '../store/authentication.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationSelectorService {
  constructor(private store: Store<AppState>) {}

  public getToken$(): Observable<string> {
    return this.store.select(selectToken);
  }

  public isAuthenticated$(): Observable<boolean> {
    return this.store.select(selectAuthenticated);
  }

  public getUser$(): Observable<UserInterface | null> {
    return this.store.select(selectUser);
  }
}
