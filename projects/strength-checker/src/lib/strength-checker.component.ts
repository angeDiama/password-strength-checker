import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subject} from "rxjs";

export interface Feedbacks {
  errorText: string;
  mediumText: string;
  successText: string
}

@Component({
  selector: 'ngx-strength-checker',
  templateUrl: './strength-checker.component.html',
  styleUrls: ['./strength-checker.component.scss']
})

export class StrengthCheckerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() password: string = '';
  @Input() requiredLength: number = 8;
  @Input() barColors: string[] = ['#FF0000', '#FF7700', '#0CC124'];
  @Input() regexPattern: RegExp | any;


  @Input() feedbacks: Feedbacks = {
    errorText: 'Must have at least 8 characters',
    mediumText: 'Add special characters or number',
    successText: 'Good password'
  };

  strengthLevel: string | any = null;
  isMatchPattern: boolean = false;
  feedbackValue: string = '';

  private _destroy$ = new Subject();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.password) {
      this.matchPattern(this.password, this.regexPattern ? this.regexPattern : null)
      this.checkPasswordStrength();
    }
  }


  checkPasswordStrength() {
    if (!this.password) {
      this.strengthLevel = null;
    } else if (this.password && this.password.length < this.requiredLength) {
      this.strengthLevel = 'low';
      this.feedbackValue = this.feedbacks.errorText;
    } else if (this.password && this.password.length >= this.requiredLength  && !this.isMatchPattern) {
      this.strengthLevel = 'medium';
      this.feedbackValue = this.feedbacks.mediumText;
    } else if (this.password && this.password.length >= this.requiredLength  && this.isMatchPattern) {
      this.strengthLevel = 'good';
      this.feedbackValue = this.feedbacks.successText;
    }
  }

  /**
   * check if entry password value contains some special characters or numbers
   * default pattern is to check if pattern has no special characters
   *
   * @param password
   * @param regex
   */
  matchPattern(password: string, regex?: any): boolean {
    const defaultPatternRegex = /^[a-zA-Z]+$/;
    if (regex) {
      return regex.test(password) ? this.isMatchPattern = true : this.isMatchPattern = false;
    }
    return defaultPatternRegex.test(password) ? this.isMatchPattern = false : this.isMatchPattern = true;
  }


  getBarColorStyle(strengthLevel: string) {
    let width: string;
    let color: string;
    switch (strengthLevel) {
      case 'low' :
        width = '20%';
        color = this.barColors[0];
        break;
      case 'medium' :
        width = '45%';
        color = this.barColors[1] || this.barColors[0];
        break;
      case 'good' :
        width = '100%';
        color = this.barColors[2];
        break;
      default :
        width = '0';
        color = ''
        break;
    }
    return {width, color};
  }


  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
