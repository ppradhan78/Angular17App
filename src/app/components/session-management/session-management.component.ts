import { Component } from '@angular/core';

@Component({
  selector: 'app-session-management',
  standalone: true,
  imports: [],
  templateUrl: './session-management.component.html',
  styleUrl: './session-management.component.scss'
})
export class SessionManagementComponent {

  constructor() {
    if (window.localStorage) {
      alert('hi');
    }
    localStorage.setItem("username", 'ppradhan');
    sessionStorage.setItem("password", 'password123');

  }

}
