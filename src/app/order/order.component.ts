import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders$ = this.order.orders$;
  constructor(private order: OrderService) { }

  removeOrder(id: number) {
    this.order.removeOrder(id);
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "removed",
      showConfirmButton: false,
    });
  }
  order$ = this.order.orders$;
  orders: any[] = [];

  ngOnInit() {
    this.orders = this.order.getOrders();
  }
}


