import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { GraphQLClient } from 'graphql-request';
import { Observable, Subject } from 'rxjs';
import {
  TokenService,
  LoaderService,
  ToasterMessageEnum,
  ToasterService,
} from '@app/core/services';
import { GraphglErrorInterface } from '@app/core/interfaces';

const GRAPHQL_URL = `${environment.endpoint}/graphql`;

@Injectable({
  providedIn: 'root',
})
export class GraphglService {
  private error$: Subject<GraphglErrorInterface>;

  constructor(
    private tokenService: TokenService,
    private loaderService: LoaderService,
    private toasterService: ToasterService,
  ) {
    this.error$ = new Subject<GraphglErrorInterface>();
  }

  public lastError$(): Observable<GraphglErrorInterface> {
    return this.error$.asObservable();
  }

  public request$<T>(query: string): Observable<T> {
    const request$ = new Subject<T>();
    const graphQLClient = this.createGraphqlClient();

    graphQLClient
      .request(query)
      .then((data: T) => {
        request$.next(data);
        request$.complete();
        this.loaderService.complete();
      })
      .catch((error: GraphglErrorInterface) => {
        const _error = this.parseGraphqlError(error);
        request$.error(_error);
        this.error$.next(_error);
        this.loaderService.complete();
        this.toasterService.setMessage(ToasterMessageEnum.Error);
      });

    this.loaderService.start();

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
