import { Component, OnInit } from '@angular/core';
import {IosApp} from '../models/Ios.app.model';
import {AndroidApp} from '../models/Android.app.model';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../services/apps.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  appsList: any;
  iosAppsSubscription: Subscription;
  androidAppsSubscription: Subscription;

  appId: string;
  platform: 'ios' | 'android';
  app: IosApp | AndroidApp;

  constructor(private route: ActivatedRoute,
              private appsService: AppsService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.platform = params.platform;
      this.appId = params.id;
    });

    this.iosAppsSubscription = this.appsService.iosAppsListSubject.subscribe(
      (iosApps: IosApp[]) => {
        if (this.platform === 'ios') {
          this.appsList = iosApps;
          this.getApp();
        }
      });

    this.androidAppsSubscription = this.appsService.androidAppsListSubject.subscribe(
      (androidApps: AndroidApp[]) => {
        if (this.platform === 'android') {
          this.appsList = androidApps;
          this.getApp();
        }
      });

    this.appsService.getAllAppsFromServer();
    this.appsService.emitAllApps();
  }

  getApp() {
    this.app = this.appsList.find(item => item.id === this.appId);
  }

}
