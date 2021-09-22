import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PasswordStrengthCheckerComponent} from "./password-strength-checker.component";


describe('PasswordStrengthCheckerComponent', () => {
  let component: PasswordStrengthCheckerComponent;
  let fixture: ComponentFixture<PasswordStrengthCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordStrengthCheckerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordStrengthCheckerComponent);
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

  it('check if password match specific pattern defined', () => {
    let onlyNumbersPattern = /^\d*(\.\d+)?$/
    component.matchPattern('myPassword', onlyNumbersPattern);
    expect(component.isMatchPattern).toBe(false, 'doesn\'t match defined pattern')
  });
});
