import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNavpanelComponent } from './settings-navpanel.component';

describe('SettingsNavpanelComponent', () => {
  let component: SettingsNavpanelComponent;
  let fixture: ComponentFixture<SettingsNavpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsNavpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsNavpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
