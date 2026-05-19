import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishService } from '../wish.service';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private wish: WishService, private cart: CartService) { }
  useremail: any;
  wishlistCount$!: Observable<number>;
  cartCount$!: Observable<number>;
  userEmail: string | null = '';
  userPassword: string = '';
  showProfile = false;
  ngOnInit() {
    const email = localStorage.getItem('loginmail');

    if (email) {
      this.userEmail = email;

      this.userPassword = localStorage.getItem('password') || '';

    } else {
      this.router.navigateByUrl("/");
    }

    this.wishlistCount$ = this.wish.wishlistCount$;
    this.cartCount$ = this.cart.cartCount$;
  }
  logout() {
    localStorage.removeItem('loginmail');
    this.router.navigateByUrl('/');

    const email = localStorage.getItem('loginmail');

    if (email) {
      this.userEmail = email;
      this.userPassword = localStorage.getItem('password') || email.split('@')[0];
    } else {
      this.router.navigateByUrl("/");
    }
    this.wishlistCount$ = this.wish.wishlistCount$;
    this.cartCount$ = this.cart.cartCount$;
  }
  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  toUpperCase() {

  }
}