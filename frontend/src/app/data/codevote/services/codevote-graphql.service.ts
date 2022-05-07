import { Injectable } from '@angular/core';
import { GraphglService } from '@app/core/services';
import { Observable } from 'rxjs';
import {
  AllCodevotesResponse,
  CodevoteResponse,
  CreateCodevoteRequest,
  CreateCodevoteResponse,
  EditCodevoteRequest,
  EditCodevoteResponse,
  VoteRequest,
  VoteResponse,
} from '../interfaces';
import {
  getAllCodevotesQuery,
  getCodevoteQuery,
  createCodevoteMutation,
  editCodevoteMutation,
  voteMutation,
} from '../queries';

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

  public editCodevote$(
    request: EditCodevoteRequest,
  ): Observable<EditCodevoteResponse> {
    return this.graphglService.request$(editCodevoteMutation(request));
  }

  public vote$(request: VoteRequest): Observable<VoteResponse> {
    return this.graphglService.request$(voteMutation(request));
  }
}
