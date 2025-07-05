import { Component, OnInit } from '@angular/core';
import { StaticproductsService } from '../../services/staticproducts.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  providers: [StaticproductsService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUserLogedIn!: boolean;
  //create a new instance of the StaticproductsService not using singleton design pattern
  //any change in this instance will not effect in other components using the same service
  constructor(
    private staticProductsService: StaticproductsService,
    private userAuthService: UserAuthService
  ) {}
  ngOnInit(): void {
    // this.isUserLogedIn = this.userAuthService.getUserLogged();
    this.userAuthService.getAuthSubject().subscribe({
      next: (status) => {
        this.isUserLogedIn = status;
      },
    });
  }
}
