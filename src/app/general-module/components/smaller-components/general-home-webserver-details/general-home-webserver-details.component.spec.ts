import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHomeWebserverDetailsComponent } from './general-home-webserver-details.component';

describe('GeneralHomeWebserverDetailsComponent', () => {
  let component: GeneralHomeWebserverDetailsComponent;
  let fixture: ComponentFixture<GeneralHomeWebserverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralHomeWebserverDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralHomeWebserverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
