import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  AuthenticationActionService,
  AuthenticationSelectorService,
} from '@app/app-store';
import { UserInterface } from '@app/interfaces';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const GITHUB_LOGIN_URL = '/auth/github/login';
const TOKEN_KEY = 'token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public authenticated = false;
  public user: UserInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private authenticationActionService: AuthenticationActionService,
    private authenticationSelectorService: AuthenticationSelectorService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) =>
      this.onQueryParams(queryParams),
    );

    this.authenticationSelectorService
      .isAuthenticated$()
      .pipe(filter((isAuthenticated) => isAuthenticated))
      .subscribe((isAuthenticated) => {
        this.getUser();
        this.authenticated = isAuthenticated;
      });

    this.authenticationSelectorService
      .getUser$()
      .subscribe((user) => (this.user = user));
  }

  private getUser(): void {
    this.authenticationActionService.getUser();
  }

  public onLogin(): void {
    document.location.href = `${environment.endpoint}${GITHUB_LOGIN_URL}`;
  }

  public onQueryParams(queryParams: Params): void {
    const token = queryParams[TOKEN_KEY];

    if (token) {
      this.authenticationActionService.saveToken({ token });
    }
  }
}
