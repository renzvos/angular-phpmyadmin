import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFeaturesComponent } from './settings-features.component';

describe('SettingsFeaturesComponent', () => {
  let component: SettingsFeaturesComponent;
  let fixture: ComponentFixture<SettingsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
