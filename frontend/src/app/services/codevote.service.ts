import { Injectable } from '@angular/core';
import { gql } from 'graphql-request';
import { Observable } from 'rxjs';
import { CodevoteInterface } from '@app/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CodevoteService {
  constructor(private apiService: ApiService) {}

  public getCodevote(): Observable<CodevoteInterface> {
    const query = gql`
      {
        codevote(id: "") {
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

    return this.apiService.request$<CodevoteInterface>(query);
  }
}
