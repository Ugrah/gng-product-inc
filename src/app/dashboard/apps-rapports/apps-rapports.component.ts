import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AppsService} from '../../services/apps.service';
import {Subscription} from 'rxjs';
import {IosApp} from '../../models/Ios.app.model';
import {AndroidApp} from '../../models/Android.app.model';

@Component({
  selector: 'app-apps-rapports',
  templateUrl: './apps-rapports.component.html',
  styleUrls: ['./apps-rapports.component.scss']
})
export class AppsRapportsComponent implements OnInit, OnDestroy {
  @Input() platform?: 'ios' | 'android';

  iosApps: IosApp[];
  iosAppsSubscription: Subscription;

  androidApps: AndroidApp[];
  androidAppsSubscription: Subscription;

  constructor(private appsService: AppsService) {
  }

  ngOnInit() {
    this.iosAppsSubscription = this.appsService.iosAppsListSubject.subscribe(
      (iosApps: IosApp[]) => {
        this.iosApps = iosApps;
      }
    );
    this.androidAppsSubscription = this.appsService.androidAppsListSubject.subscribe(
      (androidApps: IosApp[]) => {
        this.androidApps = androidApps;
      }
    );

    this.appsService.getAllAppsFromServer();
    this.appsService.emitAllApps();
  }

  getAllAppsCount() {
    if (this.platform === 'ios') {
      return this.iosApps.length;
    } else if (this.platform === 'android') {
      return this.androidApps.length;
    } else {
      return this.iosApps.length + this.androidApps.length;
    }
  }

  getPlatformNewApps() {
    if (this.platform === 'ios') {
      return this.iosApps.filter(app => !app.published).slice();
    } else if (this.platform === 'android') {
      return this.androidApps.filter(app => !app.published).slice();
    }
  }

  getPlatformToUpdateApps() {
    if (this.platform === 'ios') {
      return this.iosApps.filter(app => app.toUpdate).slice();
    } else if (this.platform === 'android') {
      return this.androidApps.filter(app => app.toUpdate).slice();
    }
  }

  getPlatformReadyToPublishedApps() {
    if (this.platform === 'ios') {
      return this.iosApps.filter(app => app.readyToPublished).slice();
    } else if (this.platform === 'android') {
      return this.androidApps.filter(app => app.readyToPublished).slice();
    }
  }

  getPlatformCheckingApps() {
    if (this.platform === 'ios') {
      return this.iosApps.filter(app => app.checking).slice();
    } else if (this.platform === 'android') {
      return this.androidApps.filter(app => app.checking).slice();
    }
  }

  getPlatformPublishedApps() {
    if (this.platform === 'ios') {
      return this.iosApps.filter(app => app.published).slice();
    } else if (this.platform === 'android') {
      return this.androidApps.filter(app => app.published).slice();
    }
  }

  getPlatformRejectedApps() {
    if (this.platform === 'ios') {
      return this.iosApps.filter(app => app.rejected).slice();
    } else if (this.platform === 'android') {
      return this.androidApps.filter(app => app.rejected).slice();
    }
  }

  ngOnDestroy() {
    this.appsService.iosAppsListSubject.unsubscribe();
    this.appsService.androidAppsListSubject.unsubscribe();
  }

}
