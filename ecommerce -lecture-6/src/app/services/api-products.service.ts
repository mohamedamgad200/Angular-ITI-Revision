import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }

  getProductById(productId: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.baseUrl}/products/${productId}`
    );
  }

  getProductByCategoryId(categoryId: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.baseUrl}/products?catId=${categoryId}`
    );
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.baseUrl}/products`,
      JSON.stringify(product)
    );
  }

  updateProductById() {}

  deleteProductById() {}
}
