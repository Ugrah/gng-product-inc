import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {IosApp} from '../models/Ios.app.model';
import {AndroidApp} from '../models/Android.app.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  iosAppsListSubject = new Subject<any[]>();
  androidAppsListSubject = new Subject<any[]>();

  private iosAppsList: IosApp[] = [];
  private androidAppsList: AndroidApp[] = [];


  constructor() {
  }

  emitAllApps() {
    this.emitIosAppsSubject();
    this.emitAndroidAppsSubject();
  }

  emitIosAppsSubject() {
    this.iosAppsListSubject.next(this.iosAppsList.slice());
  }

  emitAndroidAppsSubject() {
    this.androidAppsListSubject.next(this.androidAppsList.slice());
  }

  createNewApp(name, platforms?: {ios: boolean, android: boolean}) {
    if (platforms.ios) {
      this.addIosApp(name);
    }

    if (platforms.android) {
      this.addAndroidApp(name);
    }

    this.emitAllApps();
  }

  addIosApp(appName) {
    const newIosApp = new IosApp(appName);
    this.iosAppsList.push(newIosApp);
  }

  addAndroidApp(appName) {
    const newAndroidApp = new AndroidApp(appName);
    this.androidAppsList.push(newAndroidApp);
  }

  getTotalCountApps() {
    return this.iosAppsList.length + this.androidAppsList.length;
  }

  getAllNewAppsCount() {
    return this.iosAppsList.filter(app => !app.published).length + this.androidAppsList.filter(app => !app.published).length;
  }

  getAllToUpdatedAppsCount() {
    return this.iosAppsList.filter(app => app.toUpdate).length + this.androidAppsList.filter(app => app.toUpdate).length;
  }

  getAllReadyToPublishedAppsCount() {
    return this.iosAppsList.filter(app => app.readyToPublished).length + this.androidAppsList.filter(app => app.readyToPublished).length;
  }

  getAllCheckingAppsCount() {
    return this.iosAppsList.filter(app => app.checking).length + this.androidAppsList.filter(app => app.checking).length;
  }

  getAllPublishedAppsCount() {
    return this.iosAppsList.filter(app => app.published).length + this.androidAppsList.filter(app => app.published).length;
  }

  getAllRejectedAppsCount() {
    return this.iosAppsList.filter(app => app.rejected).length + this.androidAppsList.filter(app => app.rejected).length;
  }

}
