import { Component, OnInit } from '@angular/core';
import { CodevoteService } from '../../services/codevote.service';

@Component({
  selector: 'app-codevote',
  templateUrl: './codevote.component.html',
  styleUrls: ['./codevote.component.scss']
})
export class CodevoteComponent implements OnInit {

  public timer: any = null;
  public displayName = '';
  public snippet1 = '';
  public snippet2 = '';

  constructor(
    private codeVoteService: CodevoteService,
  ) {
  }

  ngOnInit(): void {
    this.codeVoteService.getCodeVote()
      .subscribe((response) => {
        this.displayName = response.codeVote.creator.displayName;
        this.snippet1 = response.codeVote.snippet1;
        this.snippet2 = response.codeVote.snippet2;
      });
  }

  public onSnippetChanged(value: string, id: string): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      // this.codeVoteService.saveSnippet(value, id)
      //   .subscribe();
    }, 1000);
  }

}
