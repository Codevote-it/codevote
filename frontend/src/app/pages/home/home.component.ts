import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthenticationSelectorService,
  CodevoteActionService,
  CodevoteInterface,
  CodevoteSelectorService,
} from '@app/data';
import { AppRoutingEnum } from '@app/routing';
import { Subscription } from 'rxjs';
import { PageBaseComponent } from '../_abstract';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
  extends PageBaseComponent
  implements OnInit, OnDestroy
{
  public isAuthenticated: boolean;
  public allCodevotes: CodevoteInterface[];
  public subscription: Subscription;

  constructor(
    private router: Router,
    private authenticationSelectorService: AuthenticationSelectorService,
    private codevoteActionService: CodevoteActionService,
    private codevoteSelectorService: CodevoteSelectorService,
  ) {
    super();

    this.isAuthenticated = false;
    this.allCodevotes = [];
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    const isAuthenticated$ = this.authenticationSelectorService
      .isAuthenticated$()
      .subscribe((isAuthenticated) => (this.isAuthenticated = isAuthenticated));

    const getAllCodevotes$ = this.codevoteSelectorService
      .getAllCodevotes$()
      .subscribe((allCodevotes) => (this.allCodevotes = allCodevotes));

    this.codevoteActionService.getAllCodevotes();
    this.subscription.add(isAuthenticated$).add(getAllCodevotes$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onAddSnippet(): void {
    this.router.navigate([AppRoutingEnum.Create]);
  }

  public onViewCodevote(id: string): void {
    this.router.navigate([AppRoutingEnum.Codevote, id]);
  }
}
