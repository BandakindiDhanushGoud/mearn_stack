import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl:'./sign.component.css'
})
export class SignComponent {

  constructor(private router: Router) { }

  fullname = '';
  email = '';
  password = '';
  confirmPassword = '';

  isValidEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  register() {


    if (!this.fullname || !this.email || !this.password || !this.confirmPassword) {
      Swal.fire({
        icon: "warning",
        text: "All fields are required!",
        confirmButtonColor: "#ffc107"
      });
      return;
    }

    if (!this.isValidEmail(this.email)) {
      Swal.fire({
        icon: "error",
        text: "Enter a valid email address!",
        confirmButtonColor: "#dc3545"
      });
      return;
    }


    if (this.password.length < 6) {
      Swal.fire({
        icon: "warning",
        text: "Password must be at least 6 characters!",
        confirmButtonColor: "#ffc107"
      });
      return;
    }


    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: "error",
        text: "Passwords do not match!",
        confirmButtonColor: "#dc3545"
      });
      return;
    }

    Swal.fire({
      title: "Signup Successful ",
      icon: "success",
      confirmButtonColor: "#d4af37"
    });


    localStorage.setItem('user', JSON.stringify({
      fullname: this.fullname,
      email: this.email,
      password: this.password
    }));
    this.router.navigate(['/login']);

  }
}

