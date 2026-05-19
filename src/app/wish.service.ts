import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor() { }

  private wishlist: any[] = [];
  private wishlistSubject = new BehaviorSubject<any[]>([]);
  
  wishlist$ = this.wishlistSubject.asObservable();
  wishlistCount$ = this.wishlist$.pipe(
  map(items => items.length)
  );

  addToWishlist(product: any) {
    const exists = this.wishlist.find((p:any) => p.id == product.id);
    if (!exists) {
      this.wishlist.push(product);
      this.wishlistSubject.next([...this.wishlist]);
    }
  }

  removeFromWishlist(productId: number) {
    this.wishlist = this.wishlist.filter((p:any)=> p.id !== productId);
    this.wishlistSubject.next([...this.wishlist]); 
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist.some((p:any) => p.id == productId);
  }
}