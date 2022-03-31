import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLogininfoComponent } from './users-logininfo.component';

describe('UsersLogininfoComponent', () => {
  let component: UsersLogininfoComponent;
  let fixture: ComponentFixture<UsersLogininfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLogininfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLogininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
