import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenheightService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public getHeight(): number {
    return this.document.documentElement.clientHeight;
  }
}
