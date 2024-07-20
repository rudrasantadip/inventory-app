import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetailsDto, ProductDto } from '../dto/ProductDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private apiUrl:string=`http://localhost:8080/inventory/products`;
  constructor(private http: HttpClient) { }

  /**
   * Function to add a new product
   */
  addProduct(product: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.apiUrl}/add`, product);
  }

  getProductNames() :Observable<string[]>
  {
    return this.http.get<string[]>(`${this.apiUrl}/names`);
  }

  getProductByName(name:string):Observable<ProductDto>
  {
    return this.http.get<ProductDto>(`${this.apiUrl}/${name}`);
  }

  getProductDetails():Observable<ProductDetailsDto>
  {
    return this.http.get<ProductDetailsDto>(`${this.apiUrl}/details`);
  }
}
