import { Injectable } from '@angular/core';
import { MeResponse } from '@app/data/authentication/interfaces';
import { GraphglService } from '@app/data/services';
import { gql } from 'graphql-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGraphqlService {
  constructor(private graphglService: GraphglService) {}

  public getMe$(): Observable<MeResponse> {
    const query = gql`
      {
        me {
          id
          displayName
          username
          profileImageUrl
        }
      }
    `;

    return this.graphglService.request$(query);
  }
}
