import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StrengthCheckerComponent} from './strength-checker.component';

describe('StrengthCheckerComponent', () => {
  let component: StrengthCheckerComponent;
  let fixture: ComponentFixture<StrengthCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrengthCheckerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check password strength value', () => {
    component.password = 'test';
    fixture.detectChanges();
    expect(component.password).toBe('test');
    expect(component.requiredLength).toBe(8);
    component.checkPasswordStrength();
    expect(component.strengthLevel).toBe('low', 'bad password: password should be contains must at least 8 characters')
  });

  it('check if password has special characters', () => {
    let onlyNumbersPattern = /^\d*(\.\d+)?$/
    component.matchPattern('myPassword', onlyNumbersPattern);
    expect(component.isMatchPattern).toBe(false, 'doesn\'t match defined pattern')
  });
});
