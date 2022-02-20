import { Component, OnInit } from '@angular/core';
import { CodevoteService } from '@app/services';

@Component({
  selector: 'app-codevote',
  templateUrl: './codevote.component.html',
  styleUrls: ['./codevote.component.scss'],
})
export class CodevoteComponent implements OnInit {
  public displayName = '';
  public snippet1 = '';
  public snippet2 = '';
  public showEditSnippetModal = false;
  public showEditTitleModal = false;

  constructor(private codevoteService: CodevoteService) {}

  ngOnInit(): void {
    this.codevoteService.getCodevote().subscribe((response) => {
      this.displayName = response.codevote.creator.displayName;
      this.snippet1 = response.codevote.snippet1;
      this.snippet2 = response.codevote.snippet2;
    });
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
