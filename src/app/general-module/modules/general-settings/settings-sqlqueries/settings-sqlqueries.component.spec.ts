import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSqlqueriesComponent } from './settings-sqlqueries.component';

describe('SettingsSqlqueriesComponent', () => {
  let component: SettingsSqlqueriesComponent;
  let fixture: ComponentFixture<SettingsSqlqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSqlqueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSqlqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
