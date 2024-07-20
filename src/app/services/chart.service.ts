import { Injectable } from '@angular/core';
import {
  AgBarSeriesOptions,
  AgChartOptions,
  AgLineSeriesOptions,
} from "ag-charts-community";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private chartOptions: AgChartOptions;

  constructor() { 
    this.chartOptions={
      title: { text: 'Product Sales' },
      subtitle: { text: 'Data from 2024' },  
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number', position: 'left', keys: ['totalSales'] },
        { type: 'number', position: 'right', keys: ['topProductSales'] },
    ],
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', topProductSales: 2.3,totalSales: 162000 },
        { month: 'Mar', topProductSales: 6.3,totalSales: 302000 },
        { month: 'May', topProductSales: 16.2,totalSales: 800000 },
        { month: 'Jul', topProductSales: 22.8,totalSales: 1254000 },
        { month: 'Sep', topProductSales: 14.5,totalSales: 950000 },
        { month: 'Nov', topProductSales: 8.9, totalSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [
        { type: 'bar', xKey: 'month', yKey: 'totalSales' },
        { type: 'line', xKey: 'month', yKey: 'topProductSales' } as AgLineSeriesOptions, // Additional 'Line' Series, using 'avgTemp' data-points
      ]
    }
  }

  chartInit():AgChartOptions
  {
    return this.chartOptions;
  }

  createChart(data:any,barYKey:string,lineYKey:string,title:string):AgChartOptions{
    let chartOptions:AgChartOptions={
      title: { text: title },
      subtitle: { text: 'Data from 2024' },  
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number', position: 'left', keys: [barYKey] },
        { type: 'number', position: 'right', keys: [lineYKey] },
    ],
      // Data: Data to be displayed in the chart
      data: data,
      // Series: Defines which chart type and data to use
      series: [
        { type: 'bar', xKey: 'month', yKey: barYKey },
        { type: 'line', xKey: 'month', yKey: lineYKey } as AgLineSeriesOptions, // Additional 'Line' Series, using 'avgTemp' data-points
      ]
    };

    return chartOptions;
  }
}
