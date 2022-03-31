import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAdvisorComponent } from './status-advisor.component';

describe('StatusAdvisorComponent', () => {
  let component: StatusAdvisorComponent;
  let fixture: ComponentFixture<StatusAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAdvisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
