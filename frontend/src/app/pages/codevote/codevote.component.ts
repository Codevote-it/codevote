import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationSelectorService, MeInterface } from '@app/data';
import {
  CodevoteActionService,
  CodevoteSelectorService,
  CodevoteInterface,
} from '@app/data/codevote';
import { Subscription } from 'rxjs';
import { PageBaseComponent } from '../_abstract';
import { CodevoteParamsEnum } from './codevote.params.enum';

@Component({
  selector: 'app-codevote',
  templateUrl: './codevote.component.html',
})
export class CodevoteComponent
  extends PageBaseComponent
  implements OnInit, OnDestroy
{
  public codevote!: CodevoteInterface;
  public editModal: boolean;
  public subscription: Subscription;
  public me: MeInterface | null;
  public isAuthenticated: boolean;

  constructor(
    private route: ActivatedRoute,
    private codevoteActionService: CodevoteActionService,
    private codevoteSelectorService: CodevoteSelectorService,
    private authenticationSelectorService: AuthenticationSelectorService,
  ) {
    super();

    this.editModal = false;
    this.subscription = new Subscription();
    this.me = null;
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    const getCodevote$ = this.codevoteSelectorService
      .getCodevote$()
      .subscribe((codevote) => (this.codevote = codevote));

    const getMe$ = this.authenticationSelectorService
      .getMe$()
      .subscribe((me) => (this.me = me));

    const isAuthenticated$ = this.authenticationSelectorService
      .isAuthenticated$()
      .subscribe((isAuthenticated) => (this.isAuthenticated = isAuthenticated));

    const paramMap = this.route.paramMap.subscribe((params) =>
      this.handleParams(params),
    );

    this.subscription
      .add(getCodevote$)
      .add(isAuthenticated$)
      .add(getMe$)
      .add(paramMap);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onOpenEditModal(): void {
    this.editModal = true;
  }

  public onCloseEditModal(): void {
    this.editModal = false;
  }

  public get canEdit(): boolean {
    return Boolean(this.me?.id === this.codevote?.creator?.id);
  }

  private handleParams(params: ParamMap): void {
    const id = params.get(CodevoteParamsEnum.Segment1);
    if (!id) {
      return;
    }

    this.codevoteActionService.getCodevote({ id });
  }
}
