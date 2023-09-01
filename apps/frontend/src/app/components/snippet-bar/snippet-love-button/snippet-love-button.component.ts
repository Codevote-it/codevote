import { Component, Input } from '@angular/core';
import { CodevoteActionService, VoteRequest } from '@app/data';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-snippet-love-button',
  templateUrl: './snippet-love-button.component.html',
  styleUrls: ['./snippet-love-button.component.scss'],
})
export class SnippetLoveButtonComponent {
  public faHeart: IconDefinition;
  public loading: boolean;

  @Input() codevoteId: string | undefined;
  @Input() snippetId: string | undefined;

  constructor(private codevoteActionService: CodevoteActionService) {
    this.faHeart = faHeart;
    this.loading = false;
    this.codevoteId = '';
    this.snippetId = '';
  }

  public onVote(request: VoteRequest): void {
    this.loading = true;
    this.codevoteActionService.vote(request).subscribe(
      () => this.onSuccess(),
      () => this.onError(),
    );
  }

  private onSuccess(): void {
    this.loading = false;
  }

  private onError(): void {
    this.loading = false;
  }
}
