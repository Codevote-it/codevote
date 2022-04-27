import { GraphglErrorInterface } from '@app/core';
import { Observable } from 'rxjs';
export class PageBaseComponent {
  public disabled: boolean;
  public loading: boolean;
  public errors: GraphglErrorInterface | null;

  constructor() {
    this.disabled = false;
    this.loading = false;
    this.errors = null;
  }

  public request$<T>(request: Observable<T>): Observable<T> {
    this.loading = true;
    this.disabled = true;
    this.errors = null;

    return request;
  }

  public onSuccess(): void {
    this.loading = false;
    this.disabled = false;
    this.errors = null;
  }

  public onError(errors: GraphglErrorInterface): void {
    this.loading = false;
    this.disabled = false;
    this.errors = errors;
  }
}
