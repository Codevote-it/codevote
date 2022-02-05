import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';

const loginUrl = 'https://green-bird-84.loca.lt/auth/github/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public authenticated: boolean = false;
  public user: UserInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((queryParams) => this.onQueryParams(queryParams))

    this.getUser();
    this.isAuthenticated();
  }

  public getUser(): void {
    const isAuthenticated = this.authenticationService.isAuthenticated();

    if (!isAuthenticated) {
      return;
    }

    this.authenticationService.getUser()
      .subscribe((response) => this.user = response);
  }

  public isAuthenticated(): void {
    this.authenticated = this.authenticationService.isAuthenticated();
  }

  public onLogin(): void {
    document.location.href = loginUrl;
  }

  public onQueryParams(queryParams: Params): void {
    if (!queryParams) {
      return;
    }

    this.authenticationService.saveToken(queryParams['token']);
    this.authenticated = true; // TODO: save in subject in authenticationService
  }

}
