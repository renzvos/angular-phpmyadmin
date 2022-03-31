import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseOperationsComponent } from './database-operations.component';

describe('DatabaseOperationsComponent', () => {
  let component: DatabaseOperationsComponent;
  let fixture: ComponentFixture<DatabaseOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
