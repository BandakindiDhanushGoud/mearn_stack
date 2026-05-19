import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  useremail: any;
  password: any;
  emailpwd: any;
  showPassword: boolean = false;
  isValidEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  login() {
    if (!this.isValidEmail(this.useremail)) {
      Swal.fire({
        icon: "error",
        text: "Please enter a valid email address!",
        confirmButtonColor: "#dc3545"
      });
      return;
    }
    const name = this.useremail.split('@')[0];


    if (this.useremail === 'admin@gmail.com' && this.password === 'admin123') {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('loginmail', this.useremail);
      localStorage.setItem('name', name);
      localStorage.setItem('password', this.password);

      Swal.fire({
        title: "Admin Login Success",
        icon: "success",
        confirmButtonColor: "#d4af37"
      });

      this.router.navigate(['/admin/products']);
    }


    else {
      this.emailpwd = this.useremail.slice(0, 3) + '123';

      if (this.password === this.emailpwd) {
        localStorage.setItem('role', 'user');
        localStorage.setItem('loginmail', this.useremail);
        localStorage.setItem('name', name);
        localStorage.setItem('password', this.password);

        Swal.fire({ title: "Login success", icon: "success", confirmButtonColor: "#d4af37" });
        this.router.navigate(['/user/home']);
      }

      else {
        Swal.fire({ icon: "error", text: "Invalid Email or Password!", confirmButtonColor: "#d4af37" });
      }
    }
  }
}

