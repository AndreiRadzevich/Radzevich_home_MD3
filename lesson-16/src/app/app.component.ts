import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Store } from './store';
import { Log } from './log';

import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  arrLog$: Log[];

  @ViewChild("logvalue", {static: false})
  nameParagraph: ElementRef;
    
  constructor(
    private store: Store,
    private logService: LogService
  ) {}

  ngOnInit() {
    this.arrLog$ = this.store.value;
  }

  clear() { 
    this.nameParagraph.nativeElement.value = "";
  }

  addLog(value) {
    this.logService.addLog(value);
    localStorage.setItem('log', JSON.stringify(this.arrLog$));
    this.nameParagraph.nativeElement.value = "";
  }

  deleteLog(event) {
    if(confirm('Are you sure?')){
      this.logService.deleteLog(event);
      localStorage.setItem('log', JSON.stringify(this.arrLog$));
    }
  }
}
