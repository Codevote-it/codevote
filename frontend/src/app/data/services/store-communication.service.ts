import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreCommunicationService {
  // eslint-disable-line: Subject can be any type
  private actions: { [id: string]: Subject<any> };

  constructor() {
    this.actions = {};
  }

  public create<T>(actionType: string): Observable<T> {
    this.actions[actionType] = new Subject<T>();
    return this.actions[actionType].asObservable();
  }

  public complete<T>(actionType: string, response: T): void {
    const subject = this.actions[actionType];

    if (subject) {
      subject.next(response);
      subject.complete();
    }
  }

  public error<T>(actionType: string, error: T): void {
    const subject = this.actions[actionType];

    if (subject) {
      subject.error(error);
    }
  }
}
