# Ngx password strength checker
An Angular library to check input password field strength and return invalid or valid statement with animated bar color.

this library has been built with no dependencies to provide an easy way to use it.

tested with karma and jasmine

## Versions

| Angular| ng-select|
| ------|:------:| 
| > =12.0.0 <13.0.0 | v1.x |

## Getting started

### Step 1: Install `ngx-strength-checker`:

#### NPM

```shell
npm install --save @ngx-strength-checker
```

#### YARN

```shell
yarn add @ngx-strength-checker
```

### Step 2: Import the StrengthCheckerModule and angular FormsModule module and also ReactiveFormsModule for using it in reactive forms

```js
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StrengthCheckerModule} from "strength-checker";

@NgModule({
  declarations: [AppComponent],
  imports: [
    StrengthCheckerModule,
    ReactiveFormsModule,
    FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

### Usage

Define options in your consuming component:

```js
@Component({...})
export class ExampleComponent {
  password = new FormControl('', [Validators.required]);
}
```

In template use `ngx-strength-checker` component with your options

```html
<!--Using ng-option and for loop-->
<form>
  <div class="">
    <label for="password"> Password</label>
    <input type="password" id="password" [formControl]="password" autocomplete="off">
  </div>
  <ngx-strength-checker [requiredLength]="8" [password]="password.value"></ngx-strength-checker>
</form>
```

## API

### Inputs

| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| password | `string` | `` | yes | password value to evaluate strength |
| requiredStrength | `number` | 8 | no | a required min length of the password passed has input|
| barColors | `string[]` |  `['#FF0000', '#FF7700', '#0CC124']` | no | update the bar color to display in UI, first color is for error output,second for password which match perfectly with required length but missed a special characters or number then the last for password which match perfectly with your standard defined |
| addSpecialCharacters  | `boolean` | `false` | no | if you want users to add a special characters or a number in password|
| feedbacks  | `{errorText: string, mediumText: string, successText: string}` | `{ errorText: 'Must have at least 8 characters', mediumText: 'Add special characters or number', successText: 'Good password'}` | no | to custom output message to show to the user |

### Testing

```
yarn run test
or
yarn run test:watch
```
