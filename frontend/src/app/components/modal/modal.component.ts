import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { faSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const BODY_CSS_CLASS = 'body-freeze';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public faSlash: IconDefinition;

  @Input() title = '';
  @Output() close = new EventEmitter<void>();

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.faSlash = faSlash;
  }

  ngOnInit(): void {
    this.freezeBody();
  }

  ngOnDestroy(): void {
    this.defrostBody();
  }

  public onClose(): void {
    this.close.emit();
  }

  private freezeBody(): void {
    if (this.body) {
      this.renderer.addClass(this.body, BODY_CSS_CLASS);
    }
  }

  private defrostBody(): void {
    if (this.body) {
      this.renderer.removeClass(this.body, BODY_CSS_CLASS);
    }
  }

  private get body(): HTMLBodyElement {
    const elements = this.document.getElementsByTagName('body');
    const body = elements[0];

    return body;
  }
}
