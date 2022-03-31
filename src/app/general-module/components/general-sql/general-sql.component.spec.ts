import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSqlComponent } from './general-sql.component';

describe('GeneralSqlComponent', () => {
  let component: GeneralSqlComponent;
  let fixture: ComponentFixture<GeneralSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
