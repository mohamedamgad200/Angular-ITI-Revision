import { Component } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  store = new Store(
    'TechMart',
    ['Cairo', 'Alexandria', 'Giza'],
    'https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg'
  );
  clientName: string = 'Mohamed Amgad';
}
