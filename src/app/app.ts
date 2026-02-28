import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // 👈 ADD THIS

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule   // 👈 ADD THIS
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isRegisterMode: boolean = false;
  email: string = '';
  password: string = '';
  message: string = '';
  messageType: string = '';

  login() {
    if (!this.email || !this.password) {
      this.showMessage("Please fill in all fields!", "error");
      return;
    }

    this.showMessage("Login Successful!", "success");
  }

  register() {
    if (!this.email || !this.password) {
      this.showMessage("Please fill in all fields!", "error");
      return;
    }

    this.showMessage("Registration Successful!", "success");
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.message = '';
  }

  showMessage(text: string, type: string) {
    this.message = text;
    this.messageType = type;
  }
}