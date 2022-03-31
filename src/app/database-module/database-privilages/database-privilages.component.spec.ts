import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasePrivilagesComponent } from './database-privilages.component';

describe('DatabasePrivilagesComponent', () => {
  let component: DatabasePrivilagesComponent;
  let fixture: ComponentFixture<DatabasePrivilagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasePrivilagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasePrivilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
