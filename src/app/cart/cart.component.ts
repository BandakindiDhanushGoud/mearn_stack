import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { WishService } from '../wish.service';
import { OrderService } from '../order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart$ = this.cart.cart$;

  constructor(private cart: CartService, private router: Router, private order: OrderService) { }

  removeFromCart(id: number) {
    this.cart.removeFromCart(id);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "removed",
      showConfirmButton: false,
    });
  }

  buyProduct(product: any) {
    this.order.setProduct(product);
    this.router.navigate(['user/check']);
  }


}