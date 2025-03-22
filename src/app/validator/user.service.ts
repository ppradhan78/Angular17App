import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  private takenUsernames = ['admin', 'test', 'user123'];

  checkUsername(username: string): Observable<boolean> {
    const isTaken = this.takenUsernames.includes(username);
    return of(isTaken).pipe(delay(1000)); // Simulate API call delay
  }
}
