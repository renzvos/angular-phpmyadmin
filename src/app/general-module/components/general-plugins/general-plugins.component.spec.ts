import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPluginsComponent } from './general-plugins.component';

describe('GeneralPluginsComponent', () => {
  let component: GeneralPluginsComponent;
  let fixture: ComponentFixture<GeneralPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
