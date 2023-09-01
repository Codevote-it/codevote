import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum ToasterMessageEnum {
  Success = 'Request is successful',
  Error = 'Request has error',
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private message$: Subject<string>;

  constructor() {
    this.message$ = new Subject();
  }

  public getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }

  public setMessage(message: string): void {
    this.message$.next(message);
  }
}
