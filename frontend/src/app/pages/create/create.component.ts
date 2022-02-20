import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CodevoteActionService } from '@app/data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  public name: string;

  constructor(
    private router: Router,
    private codevoteActionService: CodevoteActionService,
  ) {
    this.name = '';
  }

  public onInputValueChanged($event: string): void {
    console.log($event);
  }

  public onCreateCodevote(): void {
    this.codevoteActionService.createCodevote({
      snippet1: {
        title: 'My first codevote A',
        content: '// TODO: add snippet A',
      },
      snippet2: {
        title: 'My first codevote B',
        content: '// TODO: add snippet B',
      },
    });
  }
}
