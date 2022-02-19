import { Injectable } from '@angular/core';
import { AppState } from '@app/app-store/app-store.state';
import { CodevoteInterface } from '@app/app-store/codevote/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCodevote } from '../store';

@Injectable({
  providedIn: 'root',
})
export class CodevoteSelectorService {
  constructor(private store: Store<AppState>) {}

  public getCodevote$(): Observable<CodevoteInterface | null> {
    return this.store.select(selectCodevote);
  }
}
