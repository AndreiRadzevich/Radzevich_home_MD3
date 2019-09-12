import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users.service';

import { User } from './../models/users.interface';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  activeUsers: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.getUsers();
  }

  toggle(currentUser: User): void {
   this.usersService.toggleUsers(currentUser);
  }
}