import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '@app/data/services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() color = '#bf3931'; // $color-primary
  @Input() height = 2;
  @Input() animationTime = 0.5;
  @Input() runInterval = 300;
  @Input() progress = 0;

  public visible = false;
  /* eslint-disable */
  private runningInterval: any; // NodeJS.Timeout
  /* eslint-enable */

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    if (this.loaderService) {
      this.loaderService.onStart.subscribe(() => this.start());
      this.loaderService.onStop.subscribe(() => this.stop());
      this.loaderService.onReset.subscribe(() => this.reset());
      this.loaderService.onComplete.subscribe(() => this.complete());
    }
  }

  ngOnDestroy(): void {
    if (this.loaderService) {
      this.loaderService.onStart.unsubscribe();
      this.loaderService.onStop.unsubscribe();
      this.loaderService.onReset.unsubscribe();
      this.loaderService.onComplete.unsubscribe();
    }
  }

  public start(): void {
    this.stop();
    this.visible = true;
    this.runningInterval = setInterval(() => {
      this.progress++;
      if (this.progress === 100) this.complete();
    }, this.runInterval);
  }

  public stop(): void {
    if (this.runningInterval) {
      clearInterval(this.runningInterval);
      this.runningInterval = null;
    }
  }

  public reset(): void {
    this.stop();
    this.progress = 0;
  }

  public complete(): void {
    this.progress = 100;
    this.stop();
    setTimeout(() => {
      this.visible = false;
      setTimeout(() => {
        this.progress = 0;
      }, this.animationTime * 1000);
    }, this.animationTime * 1000);
  }
}
