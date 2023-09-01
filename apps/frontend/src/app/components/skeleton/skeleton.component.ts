import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '10rem';

  @HostBinding('style.width') public styleWidth = this.width;
}
