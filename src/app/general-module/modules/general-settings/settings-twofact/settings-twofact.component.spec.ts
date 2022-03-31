import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTwofactComponent } from './settings-twofact.component';

describe('SettingsTwofactComponent', () => {
  let component: SettingsTwofactComponent;
  let fixture: ComponentFixture<SettingsTwofactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTwofactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTwofactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
