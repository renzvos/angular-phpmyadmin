import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEnginesComponent } from './general-engines.component';

describe('GeneralEnginesComponent', () => {
  let component: GeneralEnginesComponent;
  let fixture: ComponentFixture<GeneralEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralEnginesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
