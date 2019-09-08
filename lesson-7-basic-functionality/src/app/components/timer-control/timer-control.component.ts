import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html'
})
export class TimerControlComponent {
  @Input()
  detail: number = 0;

  @Output()
  edit: EventEmitter<number> = new EventEmitter();

  timer: any;
   
  toggleEdit() {
  this.timer = setInterval(() => {this.detail++;
  this.edit.emit(this.detail);
  }, 1000);
  }
  onRemove() {
    clearInterval(this.timer);
  }
}