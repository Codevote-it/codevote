import { Component, Input } from '@angular/core';
import { MeInterface } from '@app/app-store/authentication/interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() me: MeInterface | null = null;
}
// todo: profile picture
