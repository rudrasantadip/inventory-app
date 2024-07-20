import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out')
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
  
})
export class AppComponent {
  title = 'inventory-app';

  isSideBarOpen:boolean=false;
  openSideBar()
  {
    if(!this.isSideBarOpen)
    {
      this.isSideBarOpen=true;
    }
  }

  recieveSideBarStatus(status:boolean)
  {
    this.isSideBarOpen=status;
  }
}
