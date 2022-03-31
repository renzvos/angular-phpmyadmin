import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRelationviewComponent } from './table-relationview.component';

describe('TableRelationviewComponent', () => {
  let component: TableRelationviewComponent;
  let fixture: ComponentFixture<TableRelationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRelationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRelationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
