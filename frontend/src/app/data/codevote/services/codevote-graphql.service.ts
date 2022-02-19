import { Injectable } from '@angular/core';
import { GraphglService } from '@app/data/services';
import { Observable } from 'rxjs';
import { CodevoteResponse } from '../interfaces';
import { getCodevoteQuery } from '../queries';

@Injectable({
  providedIn: 'root',
})
export class CodevoteGraphqlService {
  constructor(private graphglService: GraphglService) {}

  public getCodevote$(): Observable<CodevoteResponse> {
    return this.graphglService.request$(getCodevoteQuery);
  }
}
