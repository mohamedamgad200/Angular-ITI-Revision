import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../models/icategory';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(
      `${environment.baseUrl}/categories`
    );
  }

  getCategoryById(categoryId: number): Observable<Icategory> {
    return this.httpClient.get<Icategory>(
      `${environment.baseUrl}/categories/${categoryId}`
    );
  }

  addCategory() {}

  deleteCategoryById() {}

  updateProductById() {}
}
