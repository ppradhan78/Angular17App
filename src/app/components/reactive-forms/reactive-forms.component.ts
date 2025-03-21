import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(15)]]
    });

   
  }
  ngOnInit(): void {
    this.userForm.get('name')?.valueChanges.subscribe(name=>{
      console.log('name value:'+name);
    })

    this.userForm.get('name')?.statusChanges.subscribe(name=>{
      console.log('name value:'+name);
    })

    let fromArray=new FormArray([
      new FormControl("",[Validators.required,Validators.minLength(10)]),
      new FormControl("")
    ])
    console.log(fromArray.value)
  }

  onSubmit() {
    
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      console.log('Form Submitted', this.userForm.get('name')?.value);
     

    } else {
      console.log('Form is invalid');
    }
  }
  logKeyValuePairs(group: FormGroup): void {
    // loop through each key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
      // Get a reference to the control using the FormGroup.get() method
      const abstractControl = group.get(key);
      // If the control is an instance of FormGroup i.e a nested FormGroup
      // then recursively call this same method (logKeyValuePairs) passing it
      // the FormGroup so we can get to the form controls in it
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
        // If the control is not a FormGroup then we know it's a FormControl
      } else {
        console.log('Key = ' + key + ' && Value = ' + abstractControl?.value);
      }
    });
  }
fillValue(){

  this.userForm.setValue({
    "name": "Prasanta",
    "email": "prasanta@gmail.com",
    "password": "Prasanta@123"
  })
  this.logKeyValuePairs(this.userForm);
}
updateValue(){
  this.userForm.patchValue({
    "name": "ppradhan",
    "email": "ppradhan@gmail.com",
    "password": "Password@123"
  })
}
  onReset(){
    this.userForm.reset();
  }
  
}
