import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AgCharts } from 'ag-charts-angular'
import {
  AgBarSeriesOptions,
  AgChartOptions,
  AgLineSeriesOptions,
} from "ag-charts-community";
import { SalesChartDto } from 'src/app/dto/chartDto';
import { OrderCountDto, ProductDetailsDto, SalesDto } from 'src/app/dto/ProductDto';
import { ChartService } from 'src/app/services/chart.service';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public chartOptions: AgChartOptions;
  public productSalesOptions: AgChartOptions;
  public productStocksOptions: AgChartOptions;
  public orderOptions:AgChartOptions;
  public salesChart:SalesChartDto;
  public productDetailsDto:ProductDetailsDto;
  public salesDto:SalesDto;
  public orderCountDtos:OrderCountDto[];
  

  constructor(
    private productService:ProductserviceService,
    private salesService:SalesService,
    private chartService:ChartService
  ){

    this.productSalesOptions=chartService.chartInit();
    this.productStocksOptions=chartService.chartInit();
    this.orderOptions=chartService.chartInit();
   
      this.salesDto={
        ordered:0,
        shipped:0,
        delivered:0,
        cancelled:0
      }
  }

  ngOnInit(): void 
  {
    this.productService.getProductDetails().subscribe(
      (response)=>{
        this.productDetailsDto=response;
      }
    );
    this.salesService.getTopProducts(3).subscribe(
      (response)=>{
        this.orderCountDtos=response;
      }
    );  
    this.salesService.getdeliveryStatus().subscribe(
      (response)=>{
        this.salesDto=response;
      }
    )

    this.salesService.getSalesChart(1,12,2024).subscribe(
      (chart)=>{
        this.productSalesOptions=this.chartService.createChart(
          chart,
          'totalSales',
          'topProductSales',
          'Product Sales'
        )

        this.productStocksOptions=this.chartService.createChart(
          chart,
          'topProductSales',
          'totalSales',
          'Product Stocks'
        )
      }
    ) 
  }
}
