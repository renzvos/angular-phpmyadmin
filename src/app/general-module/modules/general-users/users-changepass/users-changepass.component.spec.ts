import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChangepassComponent } from './users-changepass.component';

describe('UsersChangepassComponent', () => {
  let component: UsersChangepassComponent;
  let fixture: ComponentFixture<UsersChangepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersChangepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersChangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
