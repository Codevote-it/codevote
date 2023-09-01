import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() disabled = false;
  @Input() size: 'small' | 'default' | 'large' = 'default';
}
