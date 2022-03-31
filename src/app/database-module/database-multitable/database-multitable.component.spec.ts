import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseMultitableComponent } from './database-multitable.component';

describe('DatabaseMultitableComponent', () => {
  let component: DatabaseMultitableComponent;
  let fixture: ComponentFixture<DatabaseMultitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseMultitableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseMultitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
