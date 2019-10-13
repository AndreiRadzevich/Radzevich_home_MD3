import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LogService } from './log.service';
import { Store } from './store';
import { DisplayComponent } from './container/display/display.component';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule ],
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [LogService, Store]
})
export class AppModule { }
