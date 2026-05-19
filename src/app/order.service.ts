import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersSubject = new BehaviorSubject<any[]>([]);
  orders$ = this.ordersSubject.asObservable();

  private orders: any[] = [];
  private selectedProduct: any;

  constructor() {
    const saved = localStorage.getItem('orders');
    if (saved) {
      this.orders = JSON.parse(saved);
      this.ordersSubject.next(this.orders);
    }
  }

  setProduct(product: any) {
    this.selectedProduct = product;
  }

  getProduct() {
    return this.selectedProduct;
  }

  placeOrder(product: any, userData: any) {
  const newOrder = {
    ...product,
    ...userData,
    orderId: Date.now(),
    status: 'Placed'
  };
  this.orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(this.orders));
}

  removeOrder(id: number) {
    this.orders = this.orders.filter(o => o.orderId !== id);
    this.updateState();
  }

  getOrders() {
    return this.orders;
  }

  private updateState() {
  this.ordersSubject.next(this.orders);
  localStorage.setItem('orders', JSON.stringify(this.orders));
  }

}
