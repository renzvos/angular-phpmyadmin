import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusQuerystatComponent } from './status-querystat.component';

describe('StatusQuerystatComponent', () => {
  let component: StatusQuerystatComponent;
  let fixture: ComponentFixture<StatusQuerystatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusQuerystatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusQuerystatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
