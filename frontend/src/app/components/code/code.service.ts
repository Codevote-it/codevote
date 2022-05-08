import { Injectable } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

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
