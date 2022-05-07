import { Component, HostListener } from '@angular/core';
import { ScreensizeService } from '@app/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  public minHeight = 'auto';

  @HostListener('window:resize', ['$event']) onResize() {
    this.setMinHeight();
  }

  constructor(private screensizeService: ScreensizeService) {
    this.setMinHeight();
  }

  private setMinHeight(): void {
    const screenHeight = this.screensizeService.getHeight();
    const margin = 120; // header + footer
    const minHeight = screenHeight - margin;

    if (!window) {
      this.minHeight = 'auto';
    } else {
      this.minHeight = `${minHeight}px`;
    }
  }
}
