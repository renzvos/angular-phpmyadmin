import { TestBed } from '@angular/core/testing';

import { UseraccService } from './useracc.service';

describe('UseraccService', () => {
  let service: UseraccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseraccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
