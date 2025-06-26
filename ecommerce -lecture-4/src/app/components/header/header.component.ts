import { Component } from '@angular/core';
import { StaticproductsService } from '../../services/staticproducts.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  providers: [StaticproductsService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  //create a new instance of the StaticproductsService not using singleton design pattern
  //any change in this instance will not effect in other components using the same service
  constructor(private staticProductsService: StaticproductsService) {}
}
