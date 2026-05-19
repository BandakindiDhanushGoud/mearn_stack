import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  product: any = {};
  products: any[] = [];
  editProduct: any = null;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  edit(p: any) {
    this.product = { ...p };
    this.editProduct = p.id;
  }


  addProduct() {
    if (!this.product.name || !this.product.price || !this.product.image) {
      Swal.fire({ title: "Fill the details", icon: "warning", confirmButtonColor: "#d4af37", position: "top-end" });
      return;
    }

    if (this.editProduct) {
      this.products = this.products.map((item: any) =>
        item.id === this.editProduct ? this.product : item
      );
      Swal.fire({ title: "product updated", icon: "success", confirmButtonColor: "#d4af37", position: "top-end" });
      this.editProduct = null;

    }
    else {
      this.product.id = Date.now();
      this.products.push(this.product);
      Swal.fire({ title: "product Added succesfuly", icon: "success", confirmButtonColor: "#d4af37", position: "top-end" });
    }
    localStorage.setItem('products', JSON.stringify(this.products));
    this.product = {};
  }


  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#dc3545'
    })
      .then((result) => {

        if (result.isConfirmed) {
          this.products = this.products.filter(p => p.id !== id);
          localStorage.setItem('products', JSON.stringify(this.products));

          Swal.fire({ title: "product removed", icon: "error", confirmButtonColor: "#d4af37", position: "top-end" });
        }
      });
  }

}

