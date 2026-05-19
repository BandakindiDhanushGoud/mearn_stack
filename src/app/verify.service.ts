import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor() { }
   products: any[] = JSON.parse(localStorage.getItem('products') || '[]');

  getProducts() {
    return this.products;
  }

  addProduct(product: any) {
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  updateProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
