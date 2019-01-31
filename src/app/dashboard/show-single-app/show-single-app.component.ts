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

  private _opened = false;
  private _alertSaveSuccess = false;

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
    this._opened = !this._opened;
  }

  getApp() {
    this.app = this.appsList.find(item => item.id === this.appId);
  }

  saveApp() {
    this.appsService.persistOneApp(this.platform, this.app);
    this._alertSaveSuccess = true;
    setTimeout(() => {
      this._alertSaveSuccess = false;
    }, 4000);
    console.log('App Save show alert to 5 second');
  }

  getPrivacyPolicyUrl() {
    return `${window.location.protocol}//${window.location.host}/${this.platform}/${this.app.id}`;
  }

  ngOnDestroy() {
    this.iosAppsSubscription.unsubscribe();
    this.androidAppsSubscription.unsubscribe();
  }
}
