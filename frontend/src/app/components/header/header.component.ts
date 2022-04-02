import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  AuthenticationActionService,
  AuthenticationSelectorService,
  MeInterface,
} from '@app/data';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';

const GITHUB_LOGIN_URL = '/auth/github/login';
const TOKEN_KEY = 'token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public me: MeInterface | null;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private authenticationActionService: AuthenticationActionService,
    private authenticationSelectorService: AuthenticationSelectorService,
  ) {
    this.isAuthenticated = false;
    this.me = null;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    // const queryParams = this.route.queryParams.subscribe((queryParams) =>
    //   this.onQueryParams(queryParams),
    // );
    // const getToken$ = this.authenticationSelectorService
    //   .getToken$()
    //   .subscribe((token) => this.getMe(token));
    // const isAuthenticated$ = this.authenticationSelectorService
    //   .isAuthenticated$()
    //   .subscribe((isAuthenticated) => (this.isAuthenticated = isAuthenticated));
    // const getMe$ = this.authenticationSelectorService
    //   .getMe$()
    //   .subscribe((me) => (this.me = me));
    // this.subscription
    //   .add(queryParams)
    //   .add(getToken$)
    //   .add(isAuthenticated$)
    //   .add(getMe$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getMe(token: string): void {
    if (token) {
      this.authenticationActionService.getMe();
    }
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
