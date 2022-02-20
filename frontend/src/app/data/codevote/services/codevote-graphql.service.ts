import { Injectable } from '@angular/core';
import { GraphglService } from '@app/data/services';
import { Observable } from 'rxjs';
import { AllCodevotesResponse, CodevoteResponse } from '../interfaces';
import { getAllCodevotesQuery, getCodevoteQuery } from '../queries';

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
}
