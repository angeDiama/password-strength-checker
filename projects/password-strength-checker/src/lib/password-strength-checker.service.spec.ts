import { TestBed } from '@angular/core/testing';
import {PasswordStrengthCheckerService} from "./password-strength-checker.service";


describe('PasswordStrengthCheckerService', () => {
  let service: PasswordStrengthCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordStrengthCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
