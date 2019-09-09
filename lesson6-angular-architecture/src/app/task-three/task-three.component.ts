import { Component } from '@angular/core';

interface InfoClickInt {
  numberClick: number;
  date: {};
}

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent {

  isHidden: boolean = true;
  arrayClick: object[] = [];
  newObj;
  click: number = 0;
  infoClick: InfoClickInt = {
  numberClick: null,
  date: {}
  };

  setHidden(){
    this.click++;
    this.isHidden = !this.isHidden;
    this.newObj = Object.create(this.infoClick);
    this.newObj.numberClick = this.click;
    this.newObj.date = new Date();
    this.arrayClick.push(this.newObj);
    }
}