import { Observable, BehaviorSubject } from 'rxjs';

import { Log } from './log';

export class Store {

  private subject = new BehaviorSubject<Log[]>([]);

  get value() {
    return this.subject.value;
  }

  set(log: Log) {
    let arr = this.value;
    arr.unshift(log);
    this.subject.next(arr);
  }

  delete(log) {
    let arr = this.value;
    arr.splice(log, 1);
    this.subject.next(arr);
  }
}