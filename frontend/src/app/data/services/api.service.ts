import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { GraphQLClient } from 'graphql-request';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public request$<T>(query: string): Observable<T> {
    const token = this.getToken();
    const request$ = new Subject<T>();
    const graphQLClient = new GraphQLClient(`${environment.endpoint}/graphql`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    graphQLClient.request(query).then((data: T) => {
      request$.next(data);
      request$.complete();
    });

    return request$.asObservable();
  }

  private getToken(): string {
    const token = localStorage.getItem('token');

    if (!token) {
      return '';
    }

    return token;
  }
}
