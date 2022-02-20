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

  constructor(private codeVoteService: CodevoteService) {}

  ngOnInit(): void {
    this.codeVoteService.getCodeVote().subscribe((response) => {
      this.displayName = response.codeVote.creator.displayName;
      this.snippet1 = response.codeVote.snippet1;
      this.snippet2 = response.codeVote.snippet2;
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
