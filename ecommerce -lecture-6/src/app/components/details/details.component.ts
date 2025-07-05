import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticproductsService } from '../../services/staticproducts.service';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe, Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentProductId: number = 0;
  product: Iproduct | null = null;
  productsIdsArray: number[];
  constructor(
    private activatedRouter: ActivatedRoute,
    private staticProductsService: StaticproductsService,
    private apiProductService: ApiProductsService,
    private locaction: Location,
    private router: Router
  ) {
    this.productsIdsArray = this.staticProductsService.mapProductsToIds();
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      this.currentProductId = Number(
        this.activatedRouter.snapshot.paramMap.get('id')
      );
      // this.product = this.staticProductsService.getProductById(
      //   this.currentProductId
      // );
      this.apiProductService.getProductById(this.currentProductId).subscribe({
        next: (response) => {
          this.product = response;
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
    // this.currentProductId = Number(
    //   this.activatedRouter.snapshot.paramMap.get('id')
    // );
    // this.product = this.staticProductsService.getProductById(
    //   this.currentProductId
    // );
  }

  getBack() {
    this.locaction.back();
  }

  next() {
    let currentIdIndex = this.productsIdsArray.findIndex(
      (id) => id === this.currentProductId
    );
    if (currentIdIndex !== this.productsIdsArray.length - 1) {
      this.router.navigateByUrl(
        `/Details/${this.productsIdsArray[currentIdIndex + 1]}`
      );
    }
  }

  previous() {
    let currentIdIndex = this.productsIdsArray.findIndex(
      (id) => id === this.currentProductId
    );
    if (currentIdIndex !== 0) {
      this.router.navigateByUrl(
        `/Details/${this.productsIdsArray[currentIdIndex - 1]}`
      );
    }
  }
}
