import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportComponent } from './report/report.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AngularD3CloudModule } from 'angular-d3-cloud';
import { ReactiveFormsModule } from '@angular/forms';
import { AgCharts } from 'ag-charts-angular';
import { ViewComponent } from './view/view.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CustomersComponent,
    ReportComponent,
    InventoryComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    AngularD3CloudModule,
    ReactiveFormsModule,
    AgCharts,
    AppRoutingModule,
  ],
  exports:[
    HomeComponent,
    ProductsComponent,
    CustomersComponent,
    ReportComponent,
    InventoryComponent,
    ViewComponent
  ]
})
export class DashboardModule { }
