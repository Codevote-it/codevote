import { Component, Input, SimpleChanges } from '@angular/core';
import { CodeService } from './code.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  public value!: string;

  constructor(private codeService: CodeService) {}

  @Input() code: string | undefined = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'].currentValue) {
      this.value = this.codeService.highlight(changes['code'].currentValue);
    }
  }
}
