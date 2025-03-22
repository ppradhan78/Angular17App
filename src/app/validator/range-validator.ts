import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = +control.value; // Convert to a number.
   
    if (value >= min && value <= max) {
      return null; // Validation passed; the value is within the specified range.
    } else {
      return { 'rangeValidation': true }; // Validation failed; the value is outside the range.
    }
  };
}
