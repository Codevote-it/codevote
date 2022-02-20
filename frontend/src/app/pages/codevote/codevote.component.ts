import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  CodevoteActionService,
  CodevoteSelectorService,
  CodevoteInterface,
} from '@app/data/codevote';
import { AppRoutingEnum } from '@app/routing';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-codevote',
  templateUrl: './codevote.component.html',
})
export class CodevoteComponent implements OnInit, OnDestroy {
  public codevote: CodevoteInterface | null;
  public showEditSnippetModal;
  public showEditTitleModal;
  public subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private codevoteActionService: CodevoteActionService,
    private codevoteSelectorService: CodevoteSelectorService,
  ) {
    this.codevote = null;
    this.showEditSnippetModal = false;
    this.showEditTitleModal = false;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    const getCodevote$ = this.codevoteSelectorService
      .getCodevote$()
      .subscribe((codevote) => (this.codevote = codevote));

    this.route.paramMap.subscribe((params) => this.handleParams(params));
    this.subscription.add(getCodevote$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onEditSnippet(): void {
    this.showEditSnippetModal = true;
  }

  public onEditTitle(): void {
    this.showEditTitleModal = true;
  }

  public onCloseEditTitleModal(): void {
    this.showEditTitleModal = false;
  }

  public onCloseEditSnippetModal(): void {
    this.showEditSnippetModal = false;
  }

  private handleParams(params: ParamMap): void {
    const id = params.get(AppRoutingEnum.CodevoteSegment1);
    if (!id) {
      return;
    }

    this.codevoteActionService.getCodevote({ id });
  }
}
