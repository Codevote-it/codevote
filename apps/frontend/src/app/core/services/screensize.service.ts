import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreensizeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public getHeight(): number {
    return this.document.documentElement.clientHeight;
  }

  public getWidth(): number {
    return this.document.documentElement.clientWidth;
  }
}
