import { Injectable } from '@angular/core';
import { gql } from 'graphql-request';
import { Observable, of } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private apiService: ApiService,
  ) { }

  public isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }

  public getToken(): string {
    const token = localStorage.getItem('token');

    if (!token) {
      return '';
    }

    return token;
  }

  public saveToken(token: string): void {
    if (!token) {
      return;
    }

    localStorage.setItem('token', token);
  }

  public getUser(): Observable<UserInterface | null> {
    const query = gql`
      {
        me {
          id,
          displayName,
          username,
          profileImageUrl,
        }
      }
    `;

    return this.apiService.request$(query);
  }
}
