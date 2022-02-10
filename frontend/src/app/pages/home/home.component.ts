import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingEnum } from '@app/routing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public authenticated = true;
  public appRoutingEnum = AppRoutingEnum;

  constructor(private router: Router) {}

  onAddSnippet(): void {
    this.router.navigate([this.appRoutingEnum.Create]);
  }
}
