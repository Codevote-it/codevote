import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getAllCodevotesAction,
  getCodevoteAction,
  resetCodevoteAction,
} from '../store';

@Injectable({
  providedIn: 'root',
})
export class CodevoteActionService {
  constructor(private store: Store) {}

  public getCodevote(props: { id: string }): void {
    this.store.dispatch(getCodevoteAction(props));
  }

  public getAllCodevotesAction(): void {
    this.store.dispatch(getAllCodevotesAction());
  }

  public reset(): void {
    this.store.dispatch(resetCodevoteAction());
  }
}
