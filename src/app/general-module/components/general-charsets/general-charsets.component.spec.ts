import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCharsetsComponent } from './general-charsets.component';

describe('GeneralCharsetsComponent', () => {
  let component: GeneralCharsetsComponent;
  let fixture: ComponentFixture<GeneralCharsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCharsetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCharsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
