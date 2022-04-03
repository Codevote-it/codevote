import { Component, Input } from '@angular/core';
import { CodevoteInterface } from '@app/data';

@Component({
  selector: 'app-snippet-preview',
  templateUrl: './snippet-preview.component.html',
  styleUrls: ['./snippet-preview.component.scss'],
})
export class SnippetPreviewComponent {
  @Input() codevote: CodevoteInterface | null = null;
}
