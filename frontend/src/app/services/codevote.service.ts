import { Injectable } from '@angular/core';
import { gql } from 'graphql-request';
import { Observable } from 'rxjs';
import { CodevoteInterface } from 'src/app/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CodevoteService {
  constructor(private apiService: ApiService) {}

  public getCodeVote(): Observable<CodevoteInterface> {
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

    return this.apiService.request$<CodevoteInterface>(query);
  }

  public saveSnippet(value: string, id: string): Observable<boolean> {
    const query = gql``;
    return this.apiService.request$<boolean>(query);
  }
}
