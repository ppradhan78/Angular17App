import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalityValidator(controlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const otherControl = control.parent?.get(controlName);

    if (otherControl && value !== otherControl.value) {
      return { 'equality': true }; // Validation failed; the two fields are not equal.
    } else {
      return null; // Validation passed; the two fields are equal.
    }
  };
}
//export function equalityValidator(control: AbstractControl): ValidationErrors | null {
//  const password = control.get('password')?.value;
//  const confirmPassword = control.get('conformPassword')?.value;

//  return password === confirmPassword ? null : { passwordsMismatch: true };
//}

