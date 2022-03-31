import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    TopnavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
