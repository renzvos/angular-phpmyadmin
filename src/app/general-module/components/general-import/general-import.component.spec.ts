import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralImportComponent } from './general-import.component';

describe('GeneralImportComponent', () => {
  let component: GeneralImportComponent;
  let fixture: ComponentFixture<GeneralImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
