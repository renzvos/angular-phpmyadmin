import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDatabasesComponent } from './general-databases.component';

describe('GeneralDatabasesComponent', () => {
  let component: GeneralDatabasesComponent;
  let fixture: ComponentFixture<GeneralDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDatabasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
