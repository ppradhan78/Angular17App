import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function usernameValidator(existingUsernames: string[]) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(existingUsernames.includes(control.value)).pipe(
      delay(1000), // Simulate an API call delay
      map(isTaken => (isTaken ? { usernameTaken: true } : null))
    );
  };
}
