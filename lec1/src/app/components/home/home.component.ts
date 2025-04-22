import { Component } from '@angular/core';
import { Istore } from '../../models/istore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  myStore: Istore;
  constructor() {
    this.myStore = {
      name: 'H&M',
      imgUrl: 'https://fakeimg.pl/300/',
      branches: ['Cairo', 'Assuit', 'Sohage'],
    };
  }
}
