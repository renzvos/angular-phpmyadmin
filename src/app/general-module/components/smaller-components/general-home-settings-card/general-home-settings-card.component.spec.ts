import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHomeSettingsCardComponent } from './general-home-settings-card.component';

describe('GeneralHomeSettingsCardComponent', () => {
  let component: GeneralHomeSettingsCardComponent;
  let fixture: ComponentFixture<GeneralHomeSettingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralHomeSettingsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralHomeSettingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
