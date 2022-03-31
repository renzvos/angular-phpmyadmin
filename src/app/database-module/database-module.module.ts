import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseModuleRoutingModule } from './database-module-routing.module';
import { DatabaseStructureComponent } from './database-structure/database-structure.component';
import { DatabaseSqlComponent } from './database-sql/database-sql.component';
import { DatabaseSearchComponent } from './database-search/database-search.component';
import { DatabaseMultitableComponent } from './database-multitable/database-multitable.component';
import { DatabaseExamplequeryComponent } from './database-examplequery/database-examplequery.component';
import { DatabaseExportComponent } from './database-export/database-export.component';
import { DatabaseImportComponent } from './database-import/database-import.component';
import { DatabaseOperationsComponent } from './database-operations/database-operations.component';
import { DatabasePrivilagesComponent } from './database-privilages/database-privilages.component';
import { DatabaseRoutinesComponent } from './database-routines/database-routines.component';
import { DatabaseEventsComponent } from './database-events/database-events.component';
import { DatabaseTriggersComponent } from './database-triggers/database-triggers.component';
import { DatabaseDesignerComponent } from './database-designer/database-designer.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    DatabaseStructureComponent,
    DatabaseSqlComponent,
    DatabaseSearchComponent,
    DatabaseMultitableComponent,
    DatabaseExamplequeryComponent,
    DatabaseExportComponent,
    DatabaseImportComponent,
    DatabaseOperationsComponent,
    DatabasePrivilagesComponent,
    DatabaseRoutinesComponent,
    DatabaseEventsComponent,
    DatabaseTriggersComponent,
    DatabaseDesignerComponent
  ],
  imports: [
    CommonModule,
    DatabaseModuleRoutingModule,
    SharedModuleModule
  ]
})
export class DatabaseModuleModule { }
