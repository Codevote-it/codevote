import {
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { HorizontalScrollItemComponent } from './horizontal-scroll-item';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent {
  @ContentChildren(HorizontalScrollItemComponent, {
    descendants: false,
    read: ElementRef,
  })
  private horizontalScrollItems!: QueryList<ElementRef<HTMLElement>>;

  public width = '0px';
  public height = '0px';

  ngAfterContentInit(): void {
    // Set size when items change
    this.horizontalScrollItems.changes.subscribe((horizontalScrollItems) =>
      this.setSize(horizontalScrollItems),
    );

    // Initial size
    this.setSize(this.horizontalScrollItems);
  }

  private setSize(items: QueryList<ElementRef<HTMLElement>>): void {
    this.setHeight(items);
    this.setWidth(items);
  }

  private setHeight(items: QueryList<ElementRef<HTMLElement>>): void {
    let height = 0;

    if (!items) {
      return;
    }

    // Get highest element
    items.forEach((item) => {
      const element = item.nativeElement;

      if (element.clientHeight > height) {
        height = element.clientHeight;
      }
    });

    this.height = `${height}px`;
  }

  private setWidth(items: QueryList<ElementRef<HTMLElement>>): void {
    let width = 0;

    if (!items) {
      return;
    }

    // Count all element width
    items.forEach((item) => {
      const element = item.nativeElement;
      width = width + element.clientWidth;
    });

    this.width = `${width}px`;
  }
}
