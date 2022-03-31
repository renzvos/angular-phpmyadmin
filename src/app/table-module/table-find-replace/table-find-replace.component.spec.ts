import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFindReplaceComponent } from './table-find-replace.component';

describe('TableFindReplaceComponent', () => {
  let component: TableFindReplaceComponent;
  let fixture: ComponentFixture<TableFindReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFindReplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFindReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
