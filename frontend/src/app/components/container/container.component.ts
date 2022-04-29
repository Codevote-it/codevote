import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  public minHeight = 'auto';

  @HostListener('window:resize', ['$event']) onResize() {
    this.setContainerMinHeight();
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.setContainerMinHeight();
  }

  public setContainerMinHeight(): void {
    const screenHeight = this.document.documentElement.clientHeight;
    const margin = 120; // header + footer
    const minHeight = screenHeight - margin;

    if (!window) {
      this.minHeight = 'auto';
    } else {
      this.minHeight = `${minHeight}px`;
    }
  }
}
