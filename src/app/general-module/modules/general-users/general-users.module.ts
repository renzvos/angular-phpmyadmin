import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralUsersRoutingModule } from './general-users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersGlobalComponent } from './users-global/users-global.component';
import { UsersDatabaseComponent } from './users-database/users-database.component';
import { UsersChangepassComponent } from './users-changepass/users-changepass.component';
import { UsersLogininfoComponent } from './users-logininfo/users-logininfo.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersGlobalComponent,
    UsersDatabaseComponent,
    UsersChangepassComponent,
    UsersLogininfoComponent
  ],
  imports: [
    CommonModule,
    GeneralUsersRoutingModule,
    SharedModuleModule
  ]
})
export class GeneralUsersModule { }
