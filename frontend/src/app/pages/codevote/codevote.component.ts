import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CodevoteActionService,
  CodevoteSelectorService,
  CodevoteInterface,
} from '@app/data/codevote';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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

    this.codevoteActionService.getCodevote();
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
}
