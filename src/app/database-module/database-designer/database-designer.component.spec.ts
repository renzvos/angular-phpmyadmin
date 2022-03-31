import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDesignerComponent } from './database-designer.component';

describe('DatabaseDesignerComponent', () => {
  let component: DatabaseDesignerComponent;
  let fixture: ComponentFixture<DatabaseDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
