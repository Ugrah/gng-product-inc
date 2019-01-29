import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private _opened = false;

  constructor() {
  }

  public toggleSidebar() {
    this._opened = !this._opened;
  }

}
