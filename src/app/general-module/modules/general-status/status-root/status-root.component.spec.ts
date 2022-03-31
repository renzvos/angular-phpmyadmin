import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRootComponent } from './status-root.component';

describe('StatusRootComponent', () => {
  let component: StatusRootComponent;
  let fixture: ComponentFixture<StatusRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
