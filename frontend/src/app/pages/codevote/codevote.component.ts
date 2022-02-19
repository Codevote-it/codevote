import { Component, OnInit } from '@angular/core';
import {
  CodevoteActionService,
  CodevoteSelectorService,
} from '@app/app-store/codevote';
import { CodevoteInterface } from '@app/app-store/codevote/interfaces';

@Component({
  selector: 'app-codevote',
  templateUrl: './codevote.component.html',
  styleUrls: ['./codevote.component.scss'],
})
export class CodevoteComponent implements OnInit {
  public codevote: CodevoteInterface | null = null;
  public showEditSnippetModal = false;
  public showEditTitleModal = false;

  constructor(
    private codevoteActionService: CodevoteActionService,
    private codevoteSelectorService: CodevoteSelectorService,
  ) {}

  ngOnInit(): void {
    this.codevoteActionService.getCodevote();
    this.codevoteSelectorService
      .getCodevote$()
      .subscribe((codevote) => (this.codevote = codevote));
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
