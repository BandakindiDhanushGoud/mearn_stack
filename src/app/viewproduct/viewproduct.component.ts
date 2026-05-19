import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { WishService } from '../wish.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
  products: any[] = [];

  constructor(
    private router: Router,
    private data: DataService,
    private wish: WishService,
    private cart: CartService,
    private order:OrderService
  ) {}


ngOnInit() {
  this.products = this.data.getProducts();
  console.log(this.products); // 👈 check here
}

  addToCart(p: any) {
    this.cart.addToCart(p);
    Swal.fire('Added!', 'Product added to cart', 'success');
  }

  
  addToWishlist(p: any) {
    this.wish.addToWishlist(p);
    Swal.fire('Added!', 'Added to wishlist ❤️', 'success');
  }

  
  goToDetails(id: number) {
    this.router.navigate(['/user/details', id]);
  }
placeOrder(product: any) {

  const user = {
    email: localStorage.getItem('email'),
    phone: localStorage.getItem('phone')
  };
 this.order.setProduct(product);
this.router.navigate(['user/order']);
}
}