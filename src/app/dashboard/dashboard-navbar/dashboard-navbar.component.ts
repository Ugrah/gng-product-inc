import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard.component';
import * as firebase from 'firebase';
import {AuthService} from '../../providers/auth.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  isAuth: boolean;

  constructor(private mainDashboard: DashboardComponent,
              private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  toggleSidebar() {
    this.mainDashboard.toggleSidebar();
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
