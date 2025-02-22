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
    debugger;
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
fillValue(){
  this.userForm.setValue({
    "name": "Prasanta",
    "email": "prasanta@gmail.com",
    "password": "Prasanta@123"
  })
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
