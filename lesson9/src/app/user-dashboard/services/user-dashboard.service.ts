import { Injectable } from '@angular/core';

import { User } from './../models/user.interface';

@Injectable()
export class UserDashboardService {
  users: User[] = [{
    "userData": 
    {
      "userName": "", 
      "email": ""
    },
    "secret": "phone",
    "questionAnswer": "",
    "gender": ""
  }];

  getUser(num: number): User {
    return this.users[num];
  }

  updateUser(user: User): void {
    this.users.push(user);
    // console.log(this.users); 
  }
}