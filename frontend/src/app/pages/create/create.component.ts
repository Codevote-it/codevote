import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  public name = '';

  onInputValueChanged($event: string): void {
    console.log($event);
  }
}
