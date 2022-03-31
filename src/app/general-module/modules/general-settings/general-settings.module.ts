import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { SettingsRootComponent } from './settings-root/settings-root.component';
import { SettingsManageComponent } from './settings-manage/settings-manage.component';
import { SettingsTwofactComponent } from './settings-twofact/settings-twofact.component';
import { SettingsFeaturesComponent } from './settings-features/settings-features.component';
import { SettingsSqlqueriesComponent } from './settings-sqlqueries/settings-sqlqueries.component';
import { SettingsNavpanelComponent } from './settings-navpanel/settings-navpanel.component';
import { SettingsMainpanelComponent } from './settings-mainpanel/settings-mainpanel.component';
import { SettingsImportComponent } from './settings-import/settings-import.component';
import { SettingsExportComponent } from './settings-export/settings-export.component';


@NgModule({
  declarations: [
    SettingsRootComponent,
    SettingsManageComponent,
    SettingsTwofactComponent,
    SettingsFeaturesComponent,
    SettingsSqlqueriesComponent,
    SettingsNavpanelComponent,
    SettingsMainpanelComponent,
    SettingsImportComponent,
    SettingsExportComponent
  ],
  imports: [
    CommonModule,
    GeneralSettingsRoutingModule
  ]
})
export class GeneralSettingsModule { }
