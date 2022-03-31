import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralStatusRoutingModule } from './general-status-routing.module';
import { StatusRootComponent } from './status-root/status-root.component';
import { StatusServerComponent } from './status-server/status-server.component';
import { StatusProcessComponent } from './status-process/status-process.component';
import { StatusQuerystatComponent } from './status-querystat/status-querystat.component';
import { StatusAllvarsComponent } from './status-allvars/status-allvars.component';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component';
import { StatusAdvisorComponent } from './status-advisor/status-advisor.component';


@NgModule({
  declarations: [
    StatusRootComponent,
    StatusServerComponent,
    StatusProcessComponent,
    StatusQuerystatComponent,
    StatusAllvarsComponent,
    StatusMonitorComponent,
    StatusAdvisorComponent
  ],
  imports: [
    CommonModule,
    GeneralStatusRoutingModule
  ]
})
export class GeneralStatusModule { }
