import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Icategory} from "../../models/icategory";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    ProductsComponent
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories: Icategory[];
  selectedCategoryId: number = 0;
  receiveTotalPrice:number=0;
  constructor() {
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablete' },
    ];
  }

  calcTotalPrice(totalPrice: number) {
    this.receiveTotalPrice=totalPrice
  }
}
