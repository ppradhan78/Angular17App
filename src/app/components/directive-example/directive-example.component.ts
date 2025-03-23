import { Component } from '@angular/core';
import { NoNumbersDirective } from '../../directive/app-no-numbers';
import { PasswordStrengthDirective } from '../../directive/app-password-strength';
import { TooltipDirective } from '../../directive/tooltip.directive';

@Component({
  selector: 'app-directive-example',
  standalone: true,
  imports: [NoNumbersDirective, PasswordStrengthDirective, TooltipDirective],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.scss',
})
export class DirectiveExampleComponent {
  passwordStrength!: string;

  public changeStrength(strength: string) {
    this.passwordStrength = strength;
  }
}
