import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ConsoleComponent } from './console/console.component';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    TopnavComponent,
    SidebarComponent,
    UnderDevelopmentComponent,
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  exports :[
    SidebarComponent,
    TopnavComponent,
    UnderDevelopmentComponent]
})
export class SharedModuleModule { }
