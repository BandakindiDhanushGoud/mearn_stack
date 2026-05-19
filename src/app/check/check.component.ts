import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent implements OnInit {
  product: any;
  checkoutForm!: FormGroup;

  constructor(
    private order: OrderService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.product = this.order.getProduct();
    this.checkoutForm = this.fb.group({
      name: [this.product.name],
      price: [this.product.price],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  }

  placeOrder() {
    this.checkoutForm.markAllAsTouched();

    if (this.checkoutForm.invalid) {
      return;
    }

    const userData = this.checkoutForm.value;
    this.order.placeOrder(this.product, userData);

    Swal.fire({
      title: "Order Successful",
      icon: "success",
      confirmButtonColor: "#d4af37"
    });

    this.router.navigate(['/user/order']);
  }
}