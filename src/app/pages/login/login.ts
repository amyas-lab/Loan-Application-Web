import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']  // ✅ correct
})
export class LoginComponent {
  showRegisterForm = signal<boolean>(false);

  changeView() {
    // ✅ use .() to get the signal value
    this.showRegisterForm.set(!this.showRegisterForm());
  }
}

