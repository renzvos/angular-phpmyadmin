import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHomeDatabaseServerDetailsComponent } from './general-home-database-server-details.component';

describe('GeneralHomeDatabaseServerDetailsComponent', () => {
  let component: GeneralHomeDatabaseServerDetailsComponent;
  let fixture: ComponentFixture<GeneralHomeDatabaseServerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralHomeDatabaseServerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralHomeDatabaseServerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
