import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ErrorInterface } from '@app/core';
import {
  CodevoteActionService,
  CodevoteInterface,
  EditCodevoteRequest,
} from '@app/data';

@Component({
  selector: 'app-edit-codevote',
  templateUrl: './edit-codevote.component.html',
  styleUrls: ['./edit-codevote.component.scss'],
})
export class EditCodevoteComponent {
  @Input() codevote!: CodevoteInterface;
  @Output() readonly onSuccess: EventEmitter<void>;

  public form: EditCodevoteRequest;
  public loading: boolean;
  public errors!: ErrorInterface[];

  constructor(private codevoteActionService: CodevoteActionService) {
    this.form = this.createForm();
    this.loading = false;
    this.onSuccess = new EventEmitter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['codevote']) {
      this.setCodevote(changes['codevote'].currentValue);
    }
  }

  public onEditCodevote(): void {
    this.codevoteActionService.editCodevote(this.form).subscribe(
      () => this.onEditCodevoteSuccess(),
      (errors: ErrorInterface[]) => this.onEditCodevoteError(errors),
    );

    this.loading = true;
    this.errors = [];
  }

  private onEditCodevoteSuccess(): void {
    this.loading = false;
    this.onSuccess.emit();
  }

  private onEditCodevoteError(errors: ErrorInterface[]): void {
    this.errors = errors;
    this.loading = false;
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
