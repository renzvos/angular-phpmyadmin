import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableZoomsearchComponent } from './table-zoomsearch.component';

describe('TableZoomsearchComponent', () => {
  let component: TableZoomsearchComponent;
  let fixture: ComponentFixture<TableZoomsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableZoomsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableZoomsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
