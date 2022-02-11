import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-snippet',
  templateUrl: './edit-snippet.component.html',
  styleUrls: ['./edit-snippet.component.scss'],
})
export class EditSnippetComponent {
  @Output() onClose = new EventEmitter();
}
