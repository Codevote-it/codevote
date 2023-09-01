import { Component, Input } from '@angular/core';
import { SnippetInterface } from '@app/data';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
})
export class SnippetComponent {
  @Input() snippet?: SnippetInterface;
}
