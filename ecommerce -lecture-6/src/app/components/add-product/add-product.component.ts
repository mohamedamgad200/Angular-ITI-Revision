import { Component, OnInit } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  categories!: Icategory[];
  newProduct: Iproduct = {} as Iproduct;
  constructor(
    private apiProductService: ApiProductsService,
    private categoryService: CategoryService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  addNewProduct() {
    this.apiProductService.addProduct(this.newProduct).subscribe({
      next: () => {
        alert('Done');
        this.router.navigateByUrl('/Products');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
