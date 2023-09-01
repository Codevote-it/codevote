import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabs-content',
  templateUrl: './tabs-content.component.html',
  styleUrls: ['./tabs-content.component.scss'],
})
export class TabsContentComponent {
  @Input() id = '';
  @Input() title: string | undefined = '';
  @Input() visible = false;

  public onChanges: Subject<void>;

  constructor() {
    this.onChanges = new Subject();
  }

  ngOnChanges(): void {
    this.onChanges.next();
  }
}
