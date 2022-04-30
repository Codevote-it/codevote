import { Component, Input, SimpleChanges } from '@angular/core';
import { CodevoteInterface, SnippetInterface } from '@app/data';

@Component({
  selector: 'app-snippet-percentage',
  templateUrl: './snippet-percentage.component.html',
  styleUrls: ['./snippet-percentage.component.scss'],
})
export class SnippetPercentageComponent {
  @Input() snippet: SnippetInterface | undefined;
  @Input() counterSnippet: SnippetInterface | undefined;

  public percentage = 0;

  ngOnChanges(changes: SimpleChanges): void {
    const snippet = changes['snippet'].currentValue;
    const counterSnippet = changes['counterSnippet'].currentValue;

    this.countVotes(snippet, counterSnippet);
  }

  private countVotes(
    snippet: SnippetInterface,
    counterSnippet: SnippetInterface,
  ): void {
    const partial = snippet.voteCount;
    const total = snippet.voteCount + counterSnippet.voteCount;

    if (total < 1) {
      this.percentage = 0;
    } else {
      this.percentage = this.calculatePercentage(partial, total);
    }
  }

  private calculatePercentage(partial: number, total: number): number {
    return (100 * partial) / total;
  }
}
