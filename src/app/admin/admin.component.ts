import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  constructor(private router: Router) { }

  products: any[] = [];

  showAddForm = false;

  newProduct = {
    name: '',
    price: '',
    image: '',
    description: ''
  };

  isEdit = false;
  selectedProduct: any = {};

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Phone',
        price: 10000,
        image: 'https://via.placeholder.com/150',
        description: 'Good mobile'
      },
      {
        id: 2,
        name: 'Laptop',
        price: 50000,
        image: 'https://via.placeholder.com/150',
        description: 'Powerful laptop'
      }
    ];
  }


  addProduct() {
    const newId =
      this.products.length > 0
        ? Math.max(...this.products.map(p => p.id)) + 1
        : 1;

    this.products.push({
      id: newId,
      ...this.newProduct
    });

    this.resetForm();
    this.showAddForm = false;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  editProduct(product: any) {
    this.selectedProduct = { ...product };
    this.isEdit = true;
  }

  updateProduct() {
    const index = this.products.findIndex(
      p => p.id === this.selectedProduct.id
    );

    if (index !== -1) {
      this.products[index] = this.selectedProduct;
    }

    this.isEdit = false;
  }


  resetForm() {
    this.newProduct = {
      name: '',
      price: '',
      image: '',
      description: ''
    };
  }

  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('loginmail');
    this.router.navigate(['/']);
  }
}