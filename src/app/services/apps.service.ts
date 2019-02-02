import {Injectable, OnDestroy, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {IosApp} from '../models/Ios.app.model';
import {AndroidApp} from '../models/Android.app.model';
import {Subject, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService implements OnInit, OnDestroy {

  iosAppsListSubject = new Subject<IosApp[]>();
  androidAppsListSubject = new Subject<AndroidApp[]>();

  iosAppsList: IosApp[] = [];
  iosAppsSubscription: Subscription;

  androidAppsList: AndroidApp[] = [];
  androidAppsSubscription: Subscription;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.iosAppsSubscription = this.iosAppsListSubject.subscribe(
      (iosApps: IosApp[]) => {
        this.iosAppsList = iosApps;
    });

    this.androidAppsSubscription = this.androidAppsListSubject.subscribe(
      (androidApps: AndroidApp[]) => {
        this.androidAppsList = androidApps;
      });

    this.getAllAppsFromServer();
    this.emitAllApps();
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

  getAppsCountByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.length;
    } else if (platform === 'android') {
      return this.androidAppsList.length;
    } else {
      return this.iosAppsList.length + this.androidAppsList.length;
    }
  }

  getAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.slice();
    } else if (platform === 'android') {
      return this.androidAppsList.slice();
    }
  }

  getNewAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.filter(app => !app.published).slice();
    } else if (platform === 'android') {
      return this.androidAppsList.filter(app => !app.published).slice();
    }
  }

  getToUpdateAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.filter(app => app.toUpdate).slice();
    } else if (platform === 'android') {
      return this.androidAppsList.filter(app => app.toUpdate).slice();
    }
  }

  getReadyToPublishAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.filter(app => app.readyToPublished).slice();
    } else if (platform === 'android') {
      return this.androidAppsList.filter(app => app.readyToPublished).slice();
    }
  }

  getCheckingAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.filter(app => app.checking).slice();
    } else if (platform === 'android') {
      return this.androidAppsList.filter(app => app.checking).slice();
    }
  }

  getPublishedAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.filter(app => app.published).slice();
    } else if (platform === 'android') {
      return this.androidAppsList.filter(app => app.published).slice();
    }
  }

  getRejectedAppsByPlatform(platform?: 'ios' | 'android') {
    if (platform === 'ios') {
      return this.iosAppsList.filter(app => app.rejected).slice();
    } else if (platform === 'android') {
      return this.androidAppsList.filter(app => app.rejected).slice();
    }
  }

  refreshModificationDateApp(app) {
    app.lastModificationDate = new Date().toString();
    return app;
  }

  refreshPostingDateApp(app) {
    app.lastDatePosting = new Date().toString();
    return app;
  }

  persistOneApp(platform: 'ios' | 'android', appToSave) {
    if (platform === 'ios') {
      const indexToUpdate = this.iosAppsList.findIndex(app => app.id === appToSave.id);
      appToSave.lastModificationDate = new Date().toString();
      this.iosAppsList[indexToUpdate] = appToSave;
      this.saveIosAppsToServer();
      this.getIosAppsFromServer();
    }
    if (platform === 'android') {
      const indexToUpdate = this.androidAppsList.findIndex(app => app.id === appToSave.id);
      appToSave.lastModificationDate = new Date().toString();
      this.androidAppsList[indexToUpdate] = appToSave;
      this.saveAndroidAppsToServer();
      this.getAndroidAppsFromServer();
    }
    this.emitAllApps();
  }

  ngOnDestroy() {
    this.iosAppsListSubject.unsubscribe();
    this.androidAppsListSubject.unsubscribe();
  }

}
