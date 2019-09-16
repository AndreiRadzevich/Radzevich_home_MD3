import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// containers
import { UserViewerComponent } from './containers/user-viewer/user-viewer.component';

// components 
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDashboardService } from 
'./services/user-dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserViewerComponent,
    UserFormComponent
  ],
  exports: [
    UserViewerComponent
  ],
  providers: [
    UserDashboardService
  ]
})
export class UserDashboardModule { }
