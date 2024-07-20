import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderCountDto, SalesDto } from '../dto/ProductDto';
import { SalesChartDto } from '../dto/chartDto';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  
  private apiUrl:string=`http://localhost:8080/inventory/sales`;
  constructor(private http:HttpClient) 
  {

  }

  public getTopProducts(limit:number):Observable<OrderCountDto[]>
  {
    return this.http.get<OrderCountDto[]>(
    `${this.apiUrl}/top/${limit}`  
    );
  }

  public getdeliveryStatus():Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/delivery/status`);
  }

  // localhost:8080/inventory/sales/chart?start=1&end=12&year=2024
  public getSalesChart(start:number,end:number,year:number) : Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/chart?start=${start}&end=${end}&year=${year}`);
  }

  // localhost:8080/inventory/sales/chart/top?start=1&end=12&year=2024
  public topProductSales(start:number,end:number,year:number) : Observable<SalesChartDto>
  {
    return this.http.get<SalesChartDto>(`${this.apiUrl}/chart/top?start=${start}&end=${end}&year=${year}`);
  }
}
