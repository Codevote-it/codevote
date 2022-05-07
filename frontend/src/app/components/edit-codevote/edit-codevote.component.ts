import { Component, Input, SimpleChanges } from '@angular/core';
import {
  CodevoteActionService,
  CodevoteInterface,
  EditCodevoteRequest,
} from '@app/data';
import { PageBaseComponent } from '@app/pages';

@Component({
  selector: 'app-edit-codevote',
  templateUrl: './edit-codevote.component.html',
  styleUrls: ['./edit-codevote.component.scss'],
})
export class EditCodevoteComponent extends PageBaseComponent {
  @Input() codevote!: CodevoteInterface;
  public form: EditCodevoteRequest;

  constructor(private codevoteActionService: CodevoteActionService) {
    super();
    this.form = this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['codevote']) {
      this.setCodevote(changes['codevote'].currentValue);
    }
  }

  public onEditCodevote(): void {
    const request = this.codevoteActionService.editCodevote(this.form);

    this.request$(request).subscribe(
      () => this.onSuccess(),
      (errors) => this.onError(errors),
    );
  }

  private setCodevote(codevote: CodevoteInterface): void {
    this.form = {
      id: codevote?.id,
      input: {
        snippet1: {
          title: codevote?.snippet1.title,
          content: codevote?.snippet1.content,
        },
        snippet2: {
          title: codevote?.snippet2.title,
          content: codevote?.snippet2.content,
        },
      },
    };
  }

  private createForm(): EditCodevoteRequest {
    return {
      id: '',
      input: {
        snippet1: {
          title: '',
          content: '',
        },
        snippet2: {
          title: '',
          content: '',
        },
      },
    };
  }
}
