import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit {

  email: string | null = '';
  role: string | null = '';

  ngOnInit() {
    this.email = localStorage.getItem('loginmail');
    this.role = localStorage.getItem('role');
  }
}
