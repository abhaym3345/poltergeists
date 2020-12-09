import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AdminComponent, 
    AddUserComponent, 
    ManageUserComponent, 
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
