import { Injectable } from '@angular/core';
import { GraphglService } from '@app/data/services';
import { gql } from 'graphql-request';
import { Observable } from 'rxjs';
import { CodevoteResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CodevoteGraphqlService {
  constructor(private graphglService: GraphglService) {}

  public getCodevote$(): Observable<CodevoteResponse> {
    const query = gql`
      {
        codeVote(id: "") {
          snippet1
          snippet2
          creator {
            id
            displayName
            username
            profileImageUrl
          }
        }
      }
    `;

    return this.graphglService.request$(query);
  }
}
