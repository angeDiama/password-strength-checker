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

  private _addSpecialCharacters = false;

  @Input()
  get addSpecialCharacters() {
    return this._addSpecialCharacters;
  }

  set addSpecialCharacters(value) {
    this._addSpecialCharacters = value;
  }

  @Input() feedbacks: Feedbacks = {
    errorText: 'Must have at least 8 characters',
    mediumText: 'Add special characters or number',
    successText: 'Good password'
  };

  strengthLevel: string | any = null;
  isSpecialChar: boolean = false;
  feedbackValue: string = '';

  private _destroy$ = new Subject();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.password) {
      this.searchSpecialCharacters(this.password)
      this.checkPasswordStrength();
    }
  }


  checkPasswordStrength() {
    if (!this.password) {
      this.strengthLevel = null;
    } else if (this.password && this.password.length < this.requiredLength) {
      this.strengthLevel = 'low';
      this.feedbackValue = this.feedbacks.errorText;
    } else if (this.password && this.password.length >= this.requiredLength && this.addSpecialCharacters && !this.isSpecialChar) {
      this.strengthLevel = 'medium';
      this.feedbackValue = this.feedbacks.mediumText;
    } else if (this.password && this.password.length >= this.requiredLength && this.addSpecialCharacters && this.isSpecialChar) {
      this.strengthLevel = 'good';
      this.feedbackValue = this.feedbacks.successText;
    } else if (this.password && this.password.length >= this.requiredLength && !this.addSpecialCharacters) {
      this.strengthLevel = 'good';
      this.feedbackValue = this.feedbacks.successText;
    }
  }

  /**
   * check if entry password value contains some special characters or numbers
   *
   * @param password
   */
  searchSpecialCharacters(password: string): boolean {
    const simpleCharactersRegex = /^[a-zA-Z]+$/;
    return simpleCharactersRegex.test(password) ? this.isSpecialChar = false : this.isSpecialChar = true;
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
