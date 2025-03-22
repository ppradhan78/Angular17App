import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';

export function usernamesValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null); // If empty, return valid immediately

    return control.valueChanges.pipe(
      debounceTime(500), // Wait to reduce API calls
      switchMap(() => userService.checkUsername(control.value)), // Call API
      map((isTaken) => (isTaken ? { usernameTaken: true } : null)), // Return validation errors
      catchError(() => of(null)) // Handle API errors gracefully
    );
  };
}
