import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  public options;

  constructor() {
    this.options = {
      data:  [
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Real Estate", amount: 5000 },
        { asset: "Commodities", amount: 3000 },
      ],
      title: {
        text: "Category Wise Composition",
      },
      series: [
        {
          type: "pie",
          angleKey: "amount",
          legendItemKey: "asset",
        },
      ],
    };
  }
}
