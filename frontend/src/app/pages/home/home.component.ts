import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSelectorService } from '@app/data';
import { AppRoutingEnum } from '@app/routing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public isAuthenticated = false;

  constructor(
    private router: Router,
    private authenticationSelectorService: AuthenticationSelectorService,
  ) {}

  ngOnInit(): void {
    this.authenticationSelectorService
      .isAuthenticated$()
      .subscribe((isAuthenticated) => (this.isAuthenticated = isAuthenticated));
  }

  onAddSnippet(): void {
    this.router.navigate([AppRoutingEnum.Create]);
  }
}
