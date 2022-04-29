import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationSelectorService, MeInterface } from '@app/data';
import {
  CodevoteActionService,
  CodevoteSelectorService,
  CodevoteInterface,
  SnippetInterface,
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
  public codevote: CodevoteInterface | null;
  public editModal: boolean;
  public subscription: Subscription;
  public me: MeInterface | null;
  public isAuthenticated: boolean;
  public snippetForm: {
    title: string;
    content: string;
  };

  constructor(
    private route: ActivatedRoute,
    private codevoteActionService: CodevoteActionService,
    private codevoteSelectorService: CodevoteSelectorService,
    private authenticationSelectorService: AuthenticationSelectorService,
  ) {
    super();

    this.codevote = null;
    this.editModal = false;
    this.subscription = new Subscription();
    this.me = null;
    this.isAuthenticated = false;
    this.snippetForm = {
      title: '',
      content: '',
    };
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

    this.route.paramMap.subscribe((params) => this.handleParams(params));

    this.subscription.add(getCodevote$).add(isAuthenticated$).add(getMe$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onEdit(snippet: SnippetInterface | undefined): void {
    const title = snippet?.title ? snippet.title : '';
    const content = snippet?.content ? snippet.content : '';

    this.editModal = true;
    this.snippetForm = {
      title,
      content,
    };
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
