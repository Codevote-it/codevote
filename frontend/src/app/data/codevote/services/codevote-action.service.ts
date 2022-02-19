import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCodevoteAction, resetAction } from '../store';

@Injectable({
  providedIn: 'root',
})
export class CodevoteActionService {
  constructor(private store: Store) {}

  public getCodevote(): void {
    this.store.dispatch(getCodevoteAction());
  }

  public reset(): void {
    this.store.dispatch(resetAction());
  }
}
