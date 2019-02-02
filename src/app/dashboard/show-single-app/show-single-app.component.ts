import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IosApp} from '../../models/Ios.app.model';
import {AndroidApp} from '../../models/Android.app.model';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../../services/apps.service';

@Component({
  selector: 'app-show-single-app',
  templateUrl: './show-single-app.component.html',
  styleUrls: ['./show-single-app.component.scss']
})
export class ShowSingleAppComponent implements OnInit, OnDestroy {

  opened = false;
  alertSaveSuccess = false;
  privacyPolicy = 'privacy-policy';
  privacyPolicyTypes = [
    {name: 'Free', value: 'free'},
    {name: 'Open Source', value: 'openSource'},
    {name: 'Freemium', value: 'freemium'},
    {name: 'Ad Supported', value: 'adSupported'},
    {name: 'Commercial', value: 'commercial'},
  ];

  appsList: any;
  iosAppsSubscription: Subscription;
  androidAppsSubscription: Subscription;

  appId: string;
  platform: 'ios' | 'android';
  app: IosApp | AndroidApp;

  constructor(private route: ActivatedRoute,
              private appsService: AppsService) {
  }

  ngOnInit() {

    this.route.params.subscribe( params => {
      this.platform = params.platform;
      this.appId = params.id;
    });

    this.iosAppsSubscription = this.appsService.iosAppsListSubject.subscribe(
      (iosApps: IosApp[]) => {
        if (this.platform === 'ios') {
          this.appsList = iosApps;
          console.log(iosApps);
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

  public toggleSidebar() {
    this.opened = !this.opened;
  }

  getApp() {
    this.app = this.appsList.find(item => item.id === this.appId);
  }

  saveApp() {
    this.appsService.persistOneApp(this.platform, this.app);
    this.alertSaveSuccess = true;
    setTimeout(() => {
      this.alertSaveSuccess = false;
    }, 4000);
  }

  getPrivacyPolicyUrl() {
    return `${window.location.protocol}//${window.location.host}/${this.privacyPolicy}/${this.platform}/${this.app.id}`;
  }

  onAppHasBeenPublished() {
    this.app.published = true;
    this.app.lastDatePosting = new Date().toString();
    this.appsService.persistOneApp(this.platform, this.app);
    this.alertSaveSuccess = true;
    setTimeout(() => {
      this.alertSaveSuccess = false;
    }, 4000);
  }

  ngOnDestroy() {
    this.iosAppsSubscription.unsubscribe();
    this.androidAppsSubscription.unsubscribe();
  }
}
