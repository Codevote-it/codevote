import { Injectable } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

/* eslint-disable */
declare let Prism: any;
/* eslint-enable */

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  public highlightAll(): void {
    Prism.highlightAll();
  }

  public highlight(code: string): string {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
}
