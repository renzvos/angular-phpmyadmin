import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralExportComponent } from './general-export.component';

describe('GeneralExportComponent', () => {
  let component: GeneralExportComponent;
  let fixture: ComponentFixture<GeneralExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
