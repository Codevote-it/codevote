import { Injectable } from '@angular/core';
import { AppState } from '@app/data/app.state';
import { CodevoteInterface } from '@app/data/codevote/interfaces';
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
