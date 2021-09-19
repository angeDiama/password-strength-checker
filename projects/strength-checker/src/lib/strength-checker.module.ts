import { NgModule } from '@angular/core';
import { StrengthCheckerComponent } from './strength-checker.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    StrengthCheckerComponent
  ],
    imports: [
        CommonModule
    ],
  exports: [
    StrengthCheckerComponent
  ]
})
export class StrengthCheckerModule { }
