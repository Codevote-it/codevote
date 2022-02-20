import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent {
  @Input() creator?: {
    id: string;
    displayName: string;
    username: string;
    profileImageUrl: string;
  };
  @Input() createdAt?: string;
}
