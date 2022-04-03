import { Component } from '@angular/core';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-snippet-love-button',
  templateUrl: './snippet-love-button.component.html',
  styleUrls: ['./snippet-love-button.component.scss'],
})
export class SnippetLoveButtonComponent {
  public faHeart: IconDefinition;

  constructor() {
    this.faHeart = faHeart;
  }
}
