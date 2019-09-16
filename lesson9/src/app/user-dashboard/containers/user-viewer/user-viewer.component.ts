import { Component, OnInit } from '@angular/core';

import { UserDashboardService } from '../../services/user-dashboard.service';

import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html'
})
export class UserViewerComponent implements OnInit {
  user: User;
  constructor(private userService: UserDashboardService) {}
  
  ngOnInit() {
    this.user = this.userService.getUser(0);
  }
  
  onUpdateUser(event: User) {
    this.userService.updateUser(event);
  }
}