import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "" , loadChildren : ()=>import('./general-module/general-module.module').then(m=>m.GeneralModuleModule)},
  {path : "database" , loadChildren : ()=>import('./database-module/database-module.module').then(m=>m.DatabaseModuleModule)},
  {path : "table" , loadChildren : ()=>import('./table-module/table-module.module').then(m=>m.TableModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
