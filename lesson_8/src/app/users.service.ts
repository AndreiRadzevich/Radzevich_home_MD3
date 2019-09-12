import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

import { User } from './components/models/users.interface';

@Injectable()
export class UsersService {
  users: User[] = [
    {isActive: true},
    {isActive: true},
    {isActive: false},
    {isActive: false}
  ];

  constructor(private counterService: CounterService) { }

  getUsers(): User[] {
    return this.users;
  }

  toggleUsers(user: User): void {
    user.isActive = !user.isActive;
    this.counterService.logCount(user.isActive); 
  }
}