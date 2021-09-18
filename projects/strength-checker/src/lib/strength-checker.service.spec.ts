import { TestBed } from '@angular/core/testing';

import { StrengthCheckerService } from './strength-checker.service';

describe('StrengthCheckerService', () => {
  let service: StrengthCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrengthCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
