import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingEnum } from '@app/routing';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  public name: string;

  constructor(private router: Router) {
    this.name = '';
  }

  public onInputValueChanged($event: string): void {
    console.log($event);
  }

  public onCreateCodevote(): void {
    this.router.navigate([AppRoutingEnum.Codevote]);
  }
}
