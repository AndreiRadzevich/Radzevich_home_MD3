import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ActiveUsersComponent, InactiveUsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, CounterService]
})
export class AppModule { }
