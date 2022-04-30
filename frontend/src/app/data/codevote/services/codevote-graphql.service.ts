import { Injectable } from '@angular/core';
import { GraphglService } from '@app/core/services';
import { Observable } from 'rxjs';
import {
  AllCodevotesResponse,
  CodevoteResponse,
  CreateCodevoteRequest,
  CreateCodevoteResponse,
} from '../interfaces';
import { VoteRequest } from '../interfaces/vote.request';
import { VoteResponse } from '../interfaces/vote.response';
import {
  getAllCodevotesQuery,
  getCodevoteQuery,
  createCodevoteMutation,
} from '../queries';
import { voteMutation } from '../queries/vote.mutation';

@Injectable({
  providedIn: 'root',
})
export class CodevoteGraphqlService {
  constructor(private graphglService: GraphglService) {}

  public getCodevote$(props: { id: string }): Observable<CodevoteResponse> {
    return this.graphglService.request$(getCodevoteQuery(props));
  }

  public getAllCodevotes$(): Observable<AllCodevotesResponse> {
    return this.graphglService.request$(getAllCodevotesQuery());
  }

  public createCodevote$(
    request: CreateCodevoteRequest,
  ): Observable<CreateCodevoteResponse> {
    return this.graphglService.request$(createCodevoteMutation(request));
  }

  public vote$(request: VoteRequest): Observable<VoteResponse> {
    return this.graphglService.request$(voteMutation(request));
  }
}
