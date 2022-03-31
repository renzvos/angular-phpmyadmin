import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBrowseComponent } from './table-browse.component';

describe('TableBrowseComponent', () => {
  let component: TableBrowseComponent;
  let fixture: ComponentFixture<TableBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
