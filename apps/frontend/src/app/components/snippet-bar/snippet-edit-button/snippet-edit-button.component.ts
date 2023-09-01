import { Component } from '@angular/core';
import { faPen, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-snippet-edit-button',
  templateUrl: './snippet-edit-button.component.html',
  styleUrls: ['./snippet-edit-button.component.scss'],
})
export class SnippetEditButtonComponent {
  public faPen: IconDefinition;

  constructor() {
    this.faPen = faPen;
  }
}
