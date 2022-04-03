import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snippet-percentage',
  templateUrl: './snippet-percentage.component.html',
  styleUrls: ['./snippet-percentage.component.scss'],
})
export class SnippetPercentageComponent {
  @Input() percentage = '0';
}
