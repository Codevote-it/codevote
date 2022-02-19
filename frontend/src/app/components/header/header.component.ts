import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  AuthenticationActionService,
  AuthenticationSelectorService,
} from '@app/data';
import { MeInterface } from '@app/data/authentication/interfaces';
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
  public me: MeInterface | null = null;

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
        this.getMet();
        this.authenticated = isAuthenticated;
      });

    this.authenticationSelectorService
      .getMe$()
      .subscribe((me) => (this.me = me));
  }

  private getMet(): void {
    this.authenticationActionService.getMe();
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
