import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseRoutinesComponent } from './database-routines.component';

describe('DatabaseRoutinesComponent', () => {
  let component: DatabaseRoutinesComponent;
  let fixture: ComponentFixture<DatabaseRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseRoutinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
