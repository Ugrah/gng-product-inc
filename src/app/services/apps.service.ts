import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {IosApp} from '../models/Ios.app.model';
import {AndroidApp} from '../models/Android.app.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  iosAppsListSubject = new Subject<IosApp[]>();
  androidAppsListSubject = new Subject<AndroidApp[]>();

  iosAppsList: IosApp[] = [];
  androidAppsList: AndroidApp[] = [];


  constructor() {
  }

  emitAllApps() {
    this.emitIosAppsSubject();
    this.emitAndroidAppsSubject();
  }

  emitIosAppsSubject() {
    this.iosAppsListSubject.next(this.iosAppsList);
  }

  emitAndroidAppsSubject() {
    this.androidAppsListSubject.next(this.androidAppsList);
  }

  saveAllAppsToServer() {
    this.saveIosAppsToServer();
    this.saveAndroidAppsToServer();
  }

  saveIosAppsToServer() {
    firebase.database().ref('/iosApps').set(this.iosAppsList);
  }

  saveAndroidAppsToServer() {
    firebase.database().ref('/androidApps').set(this.androidAppsList);
  }

  getAllAppsFromServer() {
    this.getIosAppsFromServer();
    this.getAndroidAppsFromServer();
  }

  getIosAppsFromServer() {
    firebase.database().ref('/iosApps')
      .on('value', (data) => {
        this.iosAppsList = data.val() ? data.val() : [];
        this.emitIosAppsSubject();
      });
  }

  getAndroidAppsFromServer() {
    firebase.database().ref('/androidApps')
      .on('value', (data) => {
        this.androidAppsList = data.val() ? data.val() : [];
        this.emitAndroidAppsSubject();
      });
  }

  createNewApp(name, platforms?: {ios: boolean, android: boolean}) {
    if (platforms.ios) {
      this.addIosApp(name);
    }

    if (platforms.android) {
      this.addAndroidApp(name);
    }
  }

  addIosApp(appName) {
    const newIosApp = new IosApp(appName);
    this.iosAppsList.push(newIosApp);
    this.saveIosAppsToServer();
    this.emitIosAppsSubject();
  }

  addAndroidApp(appName) {
    const newAndroidApp = new AndroidApp(appName);
    this.androidAppsList.push(newAndroidApp);
    this.saveAndroidAppsToServer();
    this.emitAndroidAppsSubject();
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
