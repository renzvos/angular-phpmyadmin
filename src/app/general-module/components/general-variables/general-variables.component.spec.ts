import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralVariablesComponent } from './general-variables.component';

describe('GeneralVariablesComponent', () => {
  let component: GeneralVariablesComponent;
  let fixture: ComponentFixture<GeneralVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
