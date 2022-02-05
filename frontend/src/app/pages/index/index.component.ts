import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public authenticated = true;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  onAddSnippet(): void {
    this.router.navigate(['codevote']);
    // this.authenticated = this.authenticationService.isAuthenticated();
  }
}
