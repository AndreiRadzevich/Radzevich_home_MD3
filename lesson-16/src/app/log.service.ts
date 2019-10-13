import { Injectable } from '@angular/core';

import { Store } from './store';

@Injectable()
export class LogService {

  constructor( private store: Store) { }

  addLog(input) {
    const text = input;
    const id = Math.random() + '';
    const date = new Date();
    let obj = Object.assign({},{id: id}, {text: text}, {date: date.toLocaleString()} )
      this.store.set(obj);
  }

  deleteLog(event){
    this.store.delete(event);
  }
}