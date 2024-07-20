import { Component, EventEmitter, Output } from '@angular/core';

export interface NavBar{
  icon:string;
  routerLink:string;
  name:string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() sidebarStatus = new EventEmitter<boolean>();

  closeSideBar()
  {
    this.sidebarStatus.emit(false);
  }


  navItems:NavBar[]=[
    {
      icon: 'dashboard',
      routerLink: 'dashboard',
      name: 'Dashboard'
    },
    {
      icon: 'inventory_2',
      routerLink: 'products',
      name: 'Products'
    },
    {
      icon: 'category',
      routerLink: 'customers',
      name: 'Customers'
    },
    {
      icon: 'fact_check',
      routerLink: 'inventory',
      name: 'Inventory'
    },
    {
      icon: 'poll',
      routerLink: 'report',
      name: 'Report'
    }
  ]
}
