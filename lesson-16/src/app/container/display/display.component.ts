import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input()
  list: [];

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  deleteLog(id){
    this.delete.emit(id);
  }
}