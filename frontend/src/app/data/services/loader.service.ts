import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public onStart = new EventEmitter<void>();
  public onStop = new EventEmitter<void>();
  public onComplete = new EventEmitter<void>();
  public onReset = new EventEmitter<void>();

  public start() {
    this.onStart.emit();
  }

  public stop() {
    this.onStop.emit();
  }

  public complete() {
    this.onComplete.emit();
  }

  public reset() {
    this.onReset.emit();
  }
}
