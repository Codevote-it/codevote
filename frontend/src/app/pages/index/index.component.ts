import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public authenticated = true;

  constructor(private router: Router) {}

  onAddSnippet(): void {
    this.router.navigate(['codevote']);
  }
}
