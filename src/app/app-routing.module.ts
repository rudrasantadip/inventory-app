import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { ReportComponent } from './dashboard/report/report.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ViewComponent } from './dashboard/view/view.component';

const routes: Routes = [
  {
  path:'dashboard',
  component:HomeComponent,
},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'customers',component:CustomersComponent},
  {path:'report',component:ReportComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'products',component:ProductsComponent},
  {
    path:'dashboard/view',component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
