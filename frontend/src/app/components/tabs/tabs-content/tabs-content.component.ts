import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-content',
  templateUrl: './tabs-content.component.html',
  styleUrls: ['./tabs-content.component.scss'],
})
export class TabsContentComponent {
  @Input() id = '';
  @Input() title: string | undefined = '';
  @Input() visible = false;
}
