import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrivilagesComponent } from './table-privilages.component';

describe('TablePrivilagesComponent', () => {
  let component: TablePrivilagesComponent;
  let fixture: ComponentFixture<TablePrivilagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrivilagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrivilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
