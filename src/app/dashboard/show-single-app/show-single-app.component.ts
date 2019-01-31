import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IosApp} from '../../models/Ios.app.model';
import {AndroidApp} from '../../models/Android.app.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppsService} from '../../services/apps.service';

@Component({
  selector: 'app-show-single-app',
  templateUrl: './show-single-app.component.html',
  styleUrls: ['./show-single-app.component.scss']
})
export class ShowSingleAppComponent implements OnInit, OnDestroy {

  private _opened = false;

  appsList: any;
  iosAppsSubscription: Subscription;
  androidAppsSubscription: Subscription;

  appId: string;
  platform: 'ios' | 'android';
  app: IosApp | AndroidApp;

  constructor(private route: ActivatedRoute,
              private router: Router,
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

  getApp() {
    this.app = this.appsList.find(item => item.id === this.appId);
  }

  public toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnDestroy() {
    this.iosAppsSubscription.unsubscribe();
    this.androidAppsSubscription.unsubscribe();
  }
}
