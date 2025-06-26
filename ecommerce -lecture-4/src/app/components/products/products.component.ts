import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { StaticproductsService } from '../../services/staticproducts.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges {
  products: Iproduct[];
  filterProductsArr!: Iproduct[];
  totalOrderPrice: number = 0;
  myDate: Date = new Date();
  num: number = 4;
  @Input() recievedCatId: number = 0;

  //1-define event
  @Output() onTotalPriceChanged: EventEmitter<number>;

  ngOnChanges(): void {
    const categoryId = Number(this.recievedCatId);
    this.filterProductsArr =
      this.staticProductsService.getProductsByCategoryId(categoryId);
  }
  constructor(
    private staticProductsService: StaticproductsService,
    private router: Router
  ) {
    this.products = this.staticProductsService.getProducts();
    this.filterProductsArr = this.products;
    this.onTotalPriceChanged = new EventEmitter<number>();
  }

  buy(count: string, price: number) {
    this.totalOrderPrice += +count * price;

    // 2-fire event
    this.onTotalPriceChanged.emit(this.totalOrderPrice);
  }
  navigateToDetails(productId:number) {
    this.router.navigateByUrl(`/Details/${productId}`);
    //this.router.navigate(['/Details',productId]);
  }
  change() {
    // this.selectedCategoryId = 3;
  }

  // filterProducts(){
  //   if(this.recievedCatId==0){
  //     this.filterProductsArr=this.products;
  //   }
  //   else {
  //     this.filterProductsArr =
  //       this.products.filter(product => product.catId == this.recievedCatId)
  //   }
  // }
}
