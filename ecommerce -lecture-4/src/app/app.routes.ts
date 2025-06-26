import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  //first match wins principle
  { path: '', pathMatch: 'full', redirectTo: 'Home' }, //redirect to Home if no path is specified
  { path: 'Home', component: HomeComponent },
  {
    path: 'About',
    component: AboutUsComponent,
    children: [
      // {path:'',component: VisionComponent}, //default child route
      { path: '', pathMatch: 'full', redirectTo: 'Vision' }, //redirect to Vision if no child route is specified
      { path: 'Vision', component: VisionComponent },
      { path: 'Values', component: ValuesComponent },
    ],
  },
  { path: 'Products', component: ProductsComponent },
  { path: 'Details/:id', component: DetailsComponent },
  { path: '**', component: NotFoundComponent },
];
