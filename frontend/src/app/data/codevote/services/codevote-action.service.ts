import { Injectable } from '@angular/core';
import { StoreCommunicationService } from '@app/data/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateCodevoteRequest, CreateCodevoteResponse } from '../interfaces';
import {
  createCodevoteAction,
  getAllCodevotesAction,
  getCodevoteAction,
  resetCodevoteAction,
  codevoteActionTypes,
} from '../store';

@Injectable({
  providedIn: 'root',
})
export class CodevoteActionService {
  constructor(
    private store: Store,
    private storeCommunicationService: StoreCommunicationService,
  ) {}

  public getCodevote(props: { id: string }): void {
    this.store.dispatch(getCodevoteAction(props));
  }

  public getAllCodevotes(): void {
    this.store.dispatch(getAllCodevotesAction());
  }

  public createCodevote(
    request: CreateCodevoteRequest,
  ): Observable<CreateCodevoteResponse> {
    this.store.dispatch(createCodevoteAction({ request }));
    return this.storeCommunicationService.create<CreateCodevoteResponse>(
      codevoteActionTypes.CREATE_CODEVOTE,
    );
  }

  public reset(): void {
    this.store.dispatch(resetCodevoteAction());
  }
}
