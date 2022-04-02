import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { GraphQLClient } from 'graphql-request';
import { Observable, Subject } from 'rxjs';
import { GraphglErrorInterface, TokenService } from './';

const GRAPHQL_URL = `${environment.endpoint}/graphql`;

@Injectable({
  providedIn: 'root',
})
export class GraphglService {
  constructor(private tokenService: TokenService) {}

  public request$<T>(query: string): Observable<T> {
    const request$ = new Subject<T>();
    const graphQLClient = this.createGraphqlClient();

    graphQLClient
      .request(query)
      .then((data: T) => {
        request$.next(data);
        request$.complete();
      })
      .catch((error) => {
        request$.error(this.parseGraphqlError(error));
      });

    return request$.asObservable();
  }

  private createGraphqlClient(): GraphQLClient {
    const token = this.tokenService.get();
    const options = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    if (!token) {
      return new GraphQLClient(GRAPHQL_URL);
    }

    return new GraphQLClient(GRAPHQL_URL, options);
  }

  private parseGraphqlError(
    error: GraphglErrorInterface,
  ): GraphglErrorInterface {
    const jsonString: string = JSON.stringify(error);
    const jsonParse: GraphglErrorInterface = JSON.parse(jsonString);
    return jsonParse;
  }
}
