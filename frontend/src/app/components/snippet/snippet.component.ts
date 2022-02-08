import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent {
  @Input() title = '';
  @Input() snippet = '';
  @Output() snippetChanged = new EventEmitter<string>();
}
