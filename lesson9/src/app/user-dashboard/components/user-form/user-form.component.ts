import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user.interface';
import { Secret } from '../../models/secret.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input()
  detail: User;

  @Output()
  update: EventEmitter<User> = new EventEmitter<User>();

  secret: Secret[] = [{ 
    key: 'phone',
    value: 'What your number'
  },{
    key: 'name_pet',
    value: 'What is the name of your pet'
  }];

  setUserName(){
    this.detail.userData.userName = "Ivan";
  }

  handleSubmit(user: User, isValid: boolean) {
    if (isValid) {
      this.update.emit(user);
    }
  }
}