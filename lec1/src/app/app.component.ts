import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //directive
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: '<h1>From ts file</h1>',
  // styles: ['h1{color:green}'],
})
export class AppComponent {
  title = 'lec1';
}
