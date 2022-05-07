import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationSelectorService, MeInterface } from '@app/data';
import {
  CodevoteActionService,
  CodevoteSelectorService,
  CodevoteInterface,
  EditCodevoteRequest,
} from '@app/data/codevote';
import { VoteRequest } from '@app/data/codevote/interfaces/vote.request';
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
  public form: EditCodevoteRequest;

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
    this.form = this.createForm();
  }

  ngOnInit(): void {
    const getCodevote$ = this.codevoteSelectorService
      .getCodevote$()
      .subscribe((codevote) => this.onGetCodevote(codevote));

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

  public onEditCodevote(): void {
    const _request = this.codevoteActionService.editCodevote(this.form);

    this.request$(_request).subscribe(
      () => {
        this.onSuccess();
        this.editModal = false;
      },
      (errors) => this.onError(errors),
    );
  }

  public get canEdit(): boolean {
    return Boolean(this.me?.id === this.codevote?.creator?.id);
  }

  public onVote(request: VoteRequest): void {
    const _request = this.codevoteActionService.vote(request);

    this.request$(_request).subscribe(
      () => this.onSuccess(),
      (error) => this.onError(error),
    );
  }

  private handleParams(params: ParamMap): void {
    const id = params.get(CodevoteParamsEnum.Segment1);
    if (!id) {
      return;
    }

    this.codevoteActionService.getCodevote({ id });
  }

  private onGetCodevote(codevote: CodevoteInterface): void {
    this.codevote = codevote;
    this.form = {
      id: codevote?.id,
      input: {
        snippet1: {
          title: codevote?.snippet1.title,
          content: codevote?.snippet1.content,
        },
        snippet2: {
          title: codevote?.snippet2.title,
          content: codevote?.snippet2.content,
        },
      },
    };
  }

  private createForm(): EditCodevoteRequest {
    return {
      id: '',
      input: {
        snippet1: {
          title: '',
          content: '',
        },
        snippet2: {
          title: '',
          content: '',
        },
      },
    };
  }
}
