import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { WarningAlertComponent } from './task-one/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './task-one/success-alert.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TaskOneComponent, TaskTwoComponent, TaskThreeComponent, WarningAlertComponent, SuccessAlertComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
