import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'passwordStrength', standalone: true })
export class PasswordStrengthPipe implements PipeTransform {
  transform(password: string): string {
    if (!password) return '';
    if (password.length < 6) {
      return 'Weak';
    } else if (password.length < 10) {
      return 'Medium';
    } else {
      // You can add more criteria for a "Strong" password
      return 'Strong';
    }
  }
}
