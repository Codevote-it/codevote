import { Injectable } from '@angular/core';
import { StoreCommunicationService } from '@app/core/services';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { CreateCodevoteRequest, CreateCodevoteResponse } from '../interfaces';
import { VoteRequest } from '../interfaces/vote.request';
import {
  createCodevoteAction,
  getAllCodevotesAction,
  getCodevoteAction,
  resetCodevoteAction,
  codevoteActionTypes,
  voteSuccessAction,
} from '../store';
import { CodevoteGraphqlService } from './codevote-graphql.service';

@Injectable({
  providedIn: 'root',
})
export class CodevoteActionService {
  constructor(
    private store: Store,
    private storeCommunicationService: StoreCommunicationService,
    private codevoteGraphqlService: CodevoteGraphqlService,
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

  public vote(request: VoteRequest): Observable<void> {
    const action$ = new Subject<void>();

    this.codevoteGraphqlService.vote$(request).subscribe(
      (response) => {
        this.store.dispatch(voteSuccessAction({ response }));
        action$.next();
        action$.complete();
      },
      (error) => action$.error(error),
    );

    return action$.asObservable();
  }

  public reset(): void {
    this.store.dispatch(resetCodevoteAction());
  }
}
