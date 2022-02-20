import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateCodevoteProps } from '../interfaces';
import {
  createCodevoteAction,
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

  public getAllCodevotes(): void {
    this.store.dispatch(getAllCodevotesAction());
  }

  public createCodevote(props: CreateCodevoteProps): void {
    this.store.dispatch(createCodevoteAction(props));
  }

  public reset(): void {
    this.store.dispatch(resetCodevoteAction());
  }
}
