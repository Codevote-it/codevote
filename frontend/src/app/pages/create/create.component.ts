import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingEnum } from '@app/routing';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor(private router: Router) {}

  public name = '';

  onInputValueChanged($event: string): void {
    console.log($event);
  }

  public onCreateCodeVote(): void {
    this.router.navigate([AppRoutingEnum.Codevote]);
  }
}
