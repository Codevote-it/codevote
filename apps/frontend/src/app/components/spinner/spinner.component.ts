import { Component } from '@angular/core';
import { faSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  public faSlash: IconDefinition;

  constructor() {
    this.faSlash = faSlash;
  }
}
