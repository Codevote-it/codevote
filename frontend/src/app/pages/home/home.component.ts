import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationSelectorService } from '@app/data';
import { AppRoutingEnum } from '@app/routing';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public subscription: Subscription;

  constructor(
    private router: Router,
    private authenticationSelectorService: AuthenticationSelectorService,
  ) {
    this.isAuthenticated = false;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    const isAuthenticated$ = this.authenticationSelectorService
      .isAuthenticated$()
      .subscribe((isAuthenticated) => (this.isAuthenticated = isAuthenticated));

    this.subscription.add(isAuthenticated$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onAddSnippet(): void {
    this.router.navigate([AppRoutingEnum.Create]);
  }
}
