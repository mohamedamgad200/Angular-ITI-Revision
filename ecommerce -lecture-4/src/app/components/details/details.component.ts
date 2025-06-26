import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticproductsService } from '../../services/staticproducts.service';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';

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
  constructor(
    private activatedRouter: ActivatedRoute,
    private staticProductsService: StaticproductsService
  ) {}

  ngOnInit(): void {
    this.currentProductId = Number(
      this.activatedRouter.snapshot.paramMap.get('id')
    );
    this.product = this.staticProductsService.getProductById(
      this.currentProductId
    );
  }
}
