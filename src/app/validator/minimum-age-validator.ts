import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minimumAgeValidator(minAge: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // If no value, return null (valid)
    }

    const birthYear = new Date(control.value).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    return age >= minAge ? null : { minimumAge: { requiredAge: minAge, actualAge: age } };
  };
}
