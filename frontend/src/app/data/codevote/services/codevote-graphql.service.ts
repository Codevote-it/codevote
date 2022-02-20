import { Injectable } from '@angular/core';
import { GraphglService } from '@app/data/services';
import { Observable } from 'rxjs';
import {
  AllCodevotesResponse,
  CodevoteResponse,
  CreateCodevoteProps,
} from '../interfaces';
import {
  getAllCodevotesQuery,
  getCodevoteQuery,
  createCodevoteMutation,
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
    props: CreateCodevoteProps,
  ): Observable<CodevoteResponse> {
    return this.graphglService.request$(createCodevoteMutation(props));
  }
}
