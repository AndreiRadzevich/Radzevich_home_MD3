import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  arrayNumber: number[] = [];

  handleEdit(event) {
    this.arrayNumber.push(event); 
  }
}
