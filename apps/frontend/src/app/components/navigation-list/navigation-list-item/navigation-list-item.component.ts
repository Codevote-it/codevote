import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-list-item',
  templateUrl: './navigation-list-item.component.html',
  styleUrls: ['./navigation-list-item.component.scss'],
})
export class NavigationListItemComponent {
  @Input() url: string;

  constructor() {
    this.url = '';
  }
}
