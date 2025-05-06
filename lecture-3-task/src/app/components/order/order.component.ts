import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Icart } from '../../models/icart';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  categories: Icategory[] = [];
  selectedCategoryId: number = 0;
  cartItems: Icart[] = [];
  users = [
    { name: 'Alice', email: 'alice@example.com', active: true },
    { name: 'Bob', email: 'bob@example.com', active: false },
    { name: 'Charlie', email: 'charlie@example.com', active: true },
  ];
  constructor() {
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablete' },
    ];
  }
  addToCart(cart: Icart) {
    this.cartItems.push(cart);
  }
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }
}
