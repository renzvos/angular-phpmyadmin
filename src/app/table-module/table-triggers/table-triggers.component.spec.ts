import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTriggersComponent } from './table-triggers.component';

describe('TableTriggersComponent', () => {
  let component: TableTriggersComponent;
  let fixture: ComponentFixture<TableTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTriggersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
