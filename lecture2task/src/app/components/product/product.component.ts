import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Iproduct[];
  categories: Icategory[];
  selectedCategory: number = 0;
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 59.99,
        quantity: 0,
        imgUrl: 'https://picsum.photos/seed/headphones/300/200',
        catId: 1,
      },
      {
        id: 2,
        name: 'Gaming Mouse',
        price: 29.99,
        quantity: 1,
        imgUrl: 'https://picsum.photos/seed/mouse/300/200',
        catId: 2,
      },
      {
        id: 3,
        name: 'Smartwatch',
        price: 99.99,
        quantity: 15,
        imgUrl: 'https://picsum.photos/seed/watch/300/200',
        catId: 1,
      },
      {
        id: 4,
        name: 'Mechanical Keyboard',
        price: 79.99,
        quantity: 10,
        imgUrl: 'https://picsum.photos/seed/keyboard/300/200',
        catId: 2,
      },
      {
        id: 5,
        name: 'Bluetooth Speaker',
        price: 39.99,
        quantity: 30,
        imgUrl: 'https://picsum.photos/seed/speaker/300/200',
        catId: 3,
      },
      {
        id: 6,
        name: 'DSLR Camera',
        price: 499.99,
        quantity: 5,
        imgUrl: 'https://picsum.photos/seed/camera/300/200',
        catId: 2,
      },
      {
        id: 7,
        name: "LED Monitor 24''",
        price: 129.99,
        quantity: 1,
        imgUrl: 'https://picsum.photos/seed/monitor/300/200',
        catId: 3,
      },
      {
        id: 8,
        name: 'External Hard Drive 1TB',
        price: 64.99,
        quantity: 2,
        imgUrl: 'https://picsum.photos/seed/hdd/300/200',
        catId: 1,
      },
      {
        id: 9,
        name: 'Webcam Full HD',
        price: 49.99,
        quantity: 12,
        imgUrl: 'https://picsum.photos/seed/webcam/300/200',
        catId: 2,
      },
      {
        id: 10,
        name: 'Laptop Stand Adjustable',
        price: 25.99,
        quantity: 18,
        imgUrl: 'https://picsum.photos/seed/laptopstand/300/200',
        catId: 3,
      },
    ];
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablete' },
    ];
  }
  buy(productId: number) {
    this.products.map((product) => {
      if (product.id == productId) {
        product.quantity -= 1;
      }
    });
  }
}
