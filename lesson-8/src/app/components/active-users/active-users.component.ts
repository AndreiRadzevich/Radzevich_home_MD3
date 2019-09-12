import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users.service';

import { User } from './../models/users.interface';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.getUsers();
  }

  toggle(currentUser: User): void {
   this.usersService.toggleUsers(currentUser);
  }
}