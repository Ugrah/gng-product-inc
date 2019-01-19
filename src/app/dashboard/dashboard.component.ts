import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _opened: boolean = false;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public toggleSidebar() {
    this._opened = !this._opened;
  }

}
