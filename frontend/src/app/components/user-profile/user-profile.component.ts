import { Component, Input } from '@angular/core';
import { UserInterface } from '@app/interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() user: UserInterface | null = null;
}
