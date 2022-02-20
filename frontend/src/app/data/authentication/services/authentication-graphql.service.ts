import { Injectable } from '@angular/core';
import { MeResponse } from '@app/data/authentication/interfaces';
import { GraphglService } from '@app/data/services';
import { Observable } from 'rxjs';
import { getMeQuery } from '../queries';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGraphqlService {
  constructor(private graphglService: GraphglService) {}

  public getMe$(): Observable<MeResponse> {
    return this.graphglService.request$(getMeQuery());
  }
}
