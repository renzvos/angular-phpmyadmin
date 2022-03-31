import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProcessComponent } from './status-process.component';

describe('StatusProcessComponent', () => {
  let component: StatusProcessComponent;
  let fixture: ComponentFixture<StatusProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
