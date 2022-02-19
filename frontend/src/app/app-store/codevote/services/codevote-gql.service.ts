import { Injectable } from '@angular/core';
import { ApiService } from '@app/services';
import { gql } from 'graphql-request';
import { Observable } from 'rxjs';
import { CodevoteResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CodevoteGqlService {
  constructor(private apiService: ApiService) {}

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

    return this.apiService.request$(query);
  }
}
