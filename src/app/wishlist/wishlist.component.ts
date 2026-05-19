import { Component } from '@angular/core';
import { WishService } from '../wish.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  constructor(public wish: WishService , private cart:CartService, private route:Router) {}
  
  wishlist$ = this.wish.wishlist$;

  removeFromWishlist(productId: number) {
    this.wish.removeFromWishlist(productId);
    Swal.fire({
  position: "top-end",
  icon: "error",
  title: "removed",
  showConfirmButton: false,
});
  }

  addToCart(product: any) {
  this.cart.addToCart(product);   
  this.wish.removeFromWishlist(product.id); 
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Added",
  showConfirmButton: false,
  })
  this.route.navigate(['/user/cart']); 
}
}

