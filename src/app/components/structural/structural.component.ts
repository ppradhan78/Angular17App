import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.scss'
})
export class StructuralComponent {
  a = 10;
  b = 20;
  items = [1, 2, 3];
  userRole = 'admin'
}
