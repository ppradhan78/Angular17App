import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  user = {
    name: '',
    email: '',
    gender: '',
    terms: false
  };

  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    alert('Form Submitted Successfully!');
  }
}
