import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

   opened = false;

  constructor() {
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

}
