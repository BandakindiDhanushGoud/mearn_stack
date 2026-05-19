import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  orders$!: Observable<any[]>;

  constructor(private order: OrderService) { }

  ngOnInit() {
    this.orders$ = this.order.orders$;

    console.log("ADMIN ORDERS INIT:", this.order.getOrders());
  }

  removeOrder(id: number) {
    this.order.removeOrder(id);
  }

}