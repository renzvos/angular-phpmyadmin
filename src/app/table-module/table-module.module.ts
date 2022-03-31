import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModuleRoutingModule } from './table-module-routing.module';
import { TableNewComponent } from './table-new/table-new.component';
import { TableBrowseComponent } from './table-browse/table-browse.component';
import { TableStructureComponent } from './table-structure/table-structure.component';
import { TableRelationviewComponent } from './table-relationview/table-relationview.component';
import { TableSqlComponent } from './table-sql/table-sql.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableZoomsearchComponent } from './table-zoomsearch/table-zoomsearch.component';
import { TableFindReplaceComponent } from './table-find-replace/table-find-replace.component';
import { TableInsertComponent } from './table-insert/table-insert.component';
import { TableExportComponent } from './table-export/table-export.component';
import { TableImportComponent } from './table-import/table-import.component';
import { TablePrivilagesComponent } from './table-privilages/table-privilages.component';
import { TableOperationsComponent } from './table-operations/table-operations.component';
import { TableTriggersComponent } from './table-triggers/table-triggers.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    TableNewComponent,
    TableBrowseComponent,
    TableStructureComponent,
    TableRelationviewComponent,
    TableSqlComponent,
    TableSearchComponent,
    TableZoomsearchComponent,
    TableFindReplaceComponent,
    TableInsertComponent,
    TableExportComponent,
    TableImportComponent,
    TablePrivilagesComponent,
    TableOperationsComponent,
    TableTriggersComponent
  ],
  imports: [
    CommonModule,
    TableModuleRoutingModule,
    SharedModuleModule
  ]
})
export class TableModuleModule { }
