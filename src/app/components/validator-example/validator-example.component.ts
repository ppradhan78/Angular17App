
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { minimumAgeValidator } from '../../validator/minimum-age-validator';
import { CommonModule } from '@angular/common';
import { usernameValidator } from '../../validator/user-name-validator';
import { emailDomainValidator } from '../../validator/email-domain-validator';
import { equalityValidator } from '../../validator/equality-validator';
import { rangeValidator } from '../../validator/range-validator';
import { UserService } from '../../validator/user.service';
import { usernamesValidator } from '../../validator/username-validator';
@Component({
  selector: 'app-validator-example',
  standalone: true,
  imports: [FormsModule, CommonModule,
    ReactiveFormsModule],
  templateUrl: './validator-example.component.html',
  styleUrl: './validator-example.component.scss'
})
export class ValidatorExampleComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registrationForm = this.fb.group({
      birthdate: ['', [Validators.required, minimumAgeValidator(18)]], // Custom Validator
      email: ['', [Validators.required, emailDomainValidator("wellsfargo.com")]],
      username: ['', Validators.required, usernameValidator(['john', 'admin'])], // Async Validator
      password: ['', Validators.required], 
      conformPassword: ['', Validators.required, equalityValidator('password') ],
      age: ['', Validators.required, rangeValidator(18, 50)],
     // name: ['',[Validators.required, Validators.minLength(3),usernamesValidator(this.userService)]] // Async validator

    });
  }
  onSubmit() {
    debugger;
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      console.log('Form Submitted', this.registrationForm.get('birthdate')?.value);


    } else {
      console.log('Form is invalid');
    }
  }
}

