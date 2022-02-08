import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserInterface } from '@app/interfaces';
import { AuthenticationService } from '@app/services';
import { environment } from '../../../environments/environment';

const githubLogin = '/auth/github/login';

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
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) =>
      this.onQueryParams(queryParams),
    );
  }

  public getUser(): void {
    const isAuthenticated = this.authenticationService.isAuthenticated();

    if (!isAuthenticated) {
      return;
    }

    this.authenticationService
      .getUser()
      .subscribe((response) => (this.user = response));
  }

  public onLogin(): void {
    document.location.href = `${environment.endpoint}${githubLogin}`;
  }

  public onQueryParams(queryParams: Params): void {
    const queryParamsToken = queryParams['token'];
    const localStorageToken = this.authenticationService.getToken();

    if (queryParamsToken) {
      this.authenticationService.saveToken(queryParamsToken);
      this.authenticated = true; // TODO: save in subject in authenticationService
      this.getUser();
    } else if (localStorageToken) {
      this.authenticated = true;
      this.getUser();
    } else {
      this.authenticated = false;
    }
  }
}
