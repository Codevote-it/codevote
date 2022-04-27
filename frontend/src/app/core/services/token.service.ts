import { Injectable } from '@angular/core';

const LOCAL_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public get(): string {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!token) {
      return '';
    }

    return token;
  }

  public set(token: string): void {
    if (!token) {
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, token);
  }

  public remove(): void {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
}
