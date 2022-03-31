import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAllvarsComponent } from './status-allvars.component';

describe('StatusAllvarsComponent', () => {
  let component: StatusAllvarsComponent;
  let fixture: ComponentFixture<StatusAllvarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAllvarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAllvarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
