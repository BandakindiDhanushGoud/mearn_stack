import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  cartCount$ = this.cart$.pipe(
    map(items => items.length)
  );

  addToCart(product: any) {
    const current = this.cartSubject.value;
    const exists = current.find((p:any) => p.id === product.id);
    if (!exists) {
      this.cartSubject.next([...current, product]);
    }
  }

  removeFromCart(id: number) {
    const updated = this.cartSubject.value.filter((p:any) => p.id !== id);
    this.cartSubject.next(updated);
  }

  getCart() {
    return this.cartSubject.value;
  }

  isInCart(id: number) {
    return this.cartSubject.value.some((p:any) => p.id === id);
  }

  clearCart() {
    this.cartSubject.next([]);
  }

}