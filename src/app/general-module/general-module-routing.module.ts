import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralCharsetsComponent } from './components/general-charsets/general-charsets.component';
import { GeneralDatabasesComponent } from './components/general-databases/general-databases.component';
import { GeneralEnginesComponent } from './components/general-engines/general-engines.component';
import { GeneralExportComponent } from './components/general-export/general-export.component';
import { GeneralHomeComponent } from './components/general-home/general-home.component';
import { GeneralImportComponent } from './components/general-import/general-import.component';
import { GeneralPluginsComponent } from './components/general-plugins/general-plugins.component';
import { GeneralReplicationComponent } from './components/general-replication/general-replication.component';
import { GeneralSqlComponent } from './components/general-sql/general-sql.component';
import { GeneralVariablesComponent } from './components/general-variables/general-variables.component';

const routes: Routes = [
  {path : "" , component : GeneralHomeComponent},
  {path : "databases" , component : GeneralDatabasesComponent},
  {path : "sql" , component : GeneralSqlComponent},
  {path : "status" , loadChildren : ()=>import('./modules/general-status/general-status.module').then(m=>m.GeneralStatusModule)},
  {path : "users" , loadChildren : ()=>import('./modules/general-users/general-users.module').then(m=>m.GeneralUsersModule)},
  {path : "export" , component : GeneralExportComponent},
  {path : "import" ,  component : GeneralImportComponent},
  {path : "settings" , loadChildren : ()=>import('./modules/general-settings/general-settings.module').then(m=>m.GeneralSettingsModule)},
  {path : "replicaction" , component : GeneralReplicationComponent},
  {path : "variables" , component : GeneralVariablesComponent},
  {path : "charsets" , component : GeneralCharsetsComponent},
  {path : "engines" , component : GeneralEnginesComponent},
  {path : "plugins" , component : GeneralPluginsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralModuleRoutingModule { }
