import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseExamplequeryComponent } from './database-examplequery.component';

describe('DatabaseExamplequeryComponent', () => {
  let component: DatabaseExamplequeryComponent;
  let fixture: ComponentFixture<DatabaseExamplequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseExamplequeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseExamplequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
