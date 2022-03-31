import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMainpanelComponent } from './settings-mainpanel.component';

describe('SettingsMainpanelComponent', () => {
  let component: SettingsMainpanelComponent;
  let fixture: ComponentFixture<SettingsMainpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMainpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
