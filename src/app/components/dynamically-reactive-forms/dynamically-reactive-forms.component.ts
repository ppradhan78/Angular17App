import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamically-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamically-reactive-forms.component.html',
  styleUrl: './dynamically-reactive-forms.component.scss'
})
export class DynamicallyReactiveFormsComponent {
  userForm: any;

  constructor(private fb: FormBuilder) 
  {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(15)]],
      mobiles:new FormArray([
        new FormControl("",[Validators.minLength(10),Validators.maxLength(10)]),
      ]
       
      )
    });
  }
  delete(indx:any){
    this.userForm.get('mobiles').removeAt(indx);
  }
  Add(){
    this.userForm.get('mobiles').push(new FormControl())
  }
  onSubmit() 
  {
      debugger;
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      console.log('Form Submitted', this.userForm.get('name')?.value);
    

    } else {
      console.log('Form is invalid');
    }
  }
}
