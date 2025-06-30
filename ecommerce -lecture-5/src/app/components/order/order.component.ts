import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NgForOf, ReactiveFormsModule, FormsModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements AfterViewInit {
  categories: Icategory[];
  selectedCategoryId: number = 0;
  receiveTotalPrice: number = 0;
  @ViewChild('userNameInput') myInput!: ElementRef; //non null assertion operator ==> never be null but initialized it in the case not now
  @ViewChild(ProductsComponent) productComponent!: ProductsComponent;
  constructor() {
    this.categories = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tablete' },
    ];
  }
  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = 'amgad';
    console.log(this.productComponent);
    console.log(this.productComponent.products);
  }

  calcTotalPrice(totalPrice: number) {
    this.receiveTotalPrice = totalPrice;
  }
}
