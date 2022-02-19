import { Injectable } from '@angular/core';
import { AppState } from '@app/app-store/app-store.state';
import { MeInterface } from '@app/app-store/authentication/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectAuthenticated,
  selectToken,
  selectMe,
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

  public getMe$(): Observable<MeInterface | null> {
    return this.store.select(selectMe);
  }
}
