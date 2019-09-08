import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OddNumberComponent } from './components/odd-number/odd-number.component';
import { EvenNumberComponent } from './components/even-number/even-number.component';
import { TimerControlComponent } from './components/timer-control/timer-control.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, OddNumberComponent, EvenNumberComponent, TimerControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
