import { CommonModule } from '@angular/common';
import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss'
})
export class FormValidationComponent implements OnInit {

    employeeForm: FormGroup;
    //formErrors : { [key: string]: any } && validationMessages : { [key: string]: any }
    constructor(private fb:FormBuilder) {
      this.employeeForm = new FormGroup({
     
      });
     }

// This object will hold the messages to be displayed to the user
// Notice, each key in this object has the same name as the
// corresponding form control

formErrors = {
  'fullName': '',
  'email': '',
  'skillName': '',
  'experienceInYears': '',
  'proficiency': ''
} as any;

// This object contains all the validation messages for this form
validationMessages = {
  'fullName': {
    'required': 'Full Name is required.',
    'minlength': 'Full Name must be greater than 2 characters.',
    'maxlength': 'Full Name must be less than 10 characters.'
  },
  'email': {
    'required': 'Email is required.'
  },
  'skillName': {
    'required': 'Skill Name is required.',
  },
  'experienceInYears': {
    'required': 'Experience is required.',
  },
  'proficiency': {
    'required': 'Proficiency is required.',
  },
} as any;

ngOnInit() {
  // Modify the code to include required validators on
  // all form controls
  this.employeeForm = this.fb.group({
    fullName: ['', [Validators.required,
    Validators.minLength(2), Validators.maxLength(10)]],
    email: ['', Validators.required],
    skills: this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required]
    }),
  });
}

logValidationErrors(group: FormGroup): void {
  // Loop through each control key in the FormGroup
  Object.keys(group.controls).forEach((key: string) => {
    // Get the control. The control can be a nested form group
    const abstractControl = group.get(key);
    // If the control is nested form group, recursively call
    // this same method
    if (abstractControl instanceof FormGroup) {
      this.logValidationErrors(abstractControl);
      // If the control is a FormControl
    } else {
      // Clear the existing validation errors
      //formErrors : { [key: string]: any } && validationMessages : { [key: string]: any }
    this.formErrors[key] = '' ;
      if (abstractControl && !abstractControl.valid) {
        // Get all the validation messages of the form control
        // that has failed the validation
        const messages = this.validationMessages[key];
        // Find which validation has failed. For example required,
        // minlength or maxlength. Store that error message in the
        // formErrors object. The UI will bind to this object to
        // display the validation errors
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
    }
  });
}

onLoadDataClick(): void {
  this.logValidationErrors(this.employeeForm);
  console.log(this.formErrors);
}
}
