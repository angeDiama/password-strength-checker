import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PasswordStrengthCheckerComponent} from "./password-strength-checker.component";



@NgModule({
  declarations: [
    PasswordStrengthCheckerComponent
  ],
    imports: [
        CommonModule
    ],
  exports: [
    PasswordStrengthCheckerComponent
  ]
})
export class PasswordStrengthCheckerModule { }
