import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralReplicationComponent } from './general-replication.component';

describe('GeneralReplicationComponent', () => {
  let component: GeneralReplicationComponent;
  let fixture: ComponentFixture<GeneralReplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralReplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralReplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
