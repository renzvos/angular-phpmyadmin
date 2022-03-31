import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

import { GeneralModuleRoutingModule } from './general-module-routing.module';
import { GeneralRootComponent } from './components/general-root/general-root.component';
import { GeneralHomeComponent } from './components/general-home/general-home.component';
import { GeneralDatabasesComponent } from './components/general-databases/general-databases.component';
import { GeneralSqlComponent } from './components/general-sql/general-sql.component';
import { GeneralExportComponent } from './components/general-export/general-export.component';
import { GeneralImportComponent } from './components/general-import/general-import.component';
import { GeneralReplicationComponent } from './components/general-replication/general-replication.component';
import { GeneralVariablesComponent } from './components/general-variables/general-variables.component';
import { GeneralCharsetsComponent } from './components/general-charsets/general-charsets.component';
import { GeneralEnginesComponent } from './components/general-engines/general-engines.component';
import { GeneralPluginsComponent } from './components/general-plugins/general-plugins.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { GeneralHomeSettingsCardComponent } from './components/smaller-components/general-home-settings-card/general-home-settings-card.component';
import { GeneralHomeDatabaseServerDetailsComponent } from './components/smaller-components/general-home-database-server-details/general-home-database-server-details.component';
import { GeneralHomeWebserverDetailsComponent } from './components/smaller-components/general-home-webserver-details/general-home-webserver-details.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    GeneralRootComponent,
    GeneralHomeComponent,
    GeneralDatabasesComponent,
    GeneralSqlComponent,
    GeneralExportComponent,
    GeneralImportComponent,
    GeneralReplicationComponent,
    GeneralVariablesComponent,
    GeneralCharsetsComponent,
    GeneralEnginesComponent,
    GeneralPluginsComponent,
    ToolbarComponent,
    GeneralHomeSettingsCardComponent,
    GeneralHomeDatabaseServerDetailsComponent,
    GeneralHomeWebserverDetailsComponent
  ],
  imports: [
    CommonModule,
    GeneralModuleRoutingModule,
    SharedModuleModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class GeneralModuleModule { }
