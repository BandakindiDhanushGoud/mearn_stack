import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { WishService } from '../wish.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: any;
  role: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService,
    private wish: WishService,
    private cart: CartService,
    private order: OrderService
  ) { }

  ngOnInit() {
    this.role = localStorage.getItem('role');

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.service.getProductById(id);
  }


  addToCart(product: any) {
    this.cart.addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
    })
  }

  isInCart(product: any) {
    return this.cart.isInCart(product.id);
  }


  addToWishlist(product: any) {
    this.wish.addToWishlist(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to wishlist",
      showConfirmButton: false,
    })
  }

  removeFromWishlist(product: any) {
    this.wish.removeFromWishlist(product.id);
  }

  isWishlisted(product: any) {
    return this.wish.isInWishlist(product.id);
  }


  deleteProduct(id: number) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Deleted",
      showConfirmButton: false,
    })
    this.router.navigate(['/admin']);
  }

  buyProduct(product: any) {

    this.order.setProduct(product);

    this.order.setProduct(product);
    this.router.navigate(['user/check']);
  }
}