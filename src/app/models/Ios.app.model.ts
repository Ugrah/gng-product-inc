import {AppBase} from './App.base.model';
import {UUID} from 'angular2-uuid';

export class IosApp extends AppBase {

  public appCertificate: boolean;

  constructor (public appName: string) {
    super(appName);

    this.getRandomId();
    this.appCertificate = false;
  }

  admobsIsFull() {
    let isGood = true;
    if (this.admobAppId === '' || this.admobBannerId === '' || this.admobInterstitialId === '') {
      isGood = false;
    }
    return isGood;
  }

  getRandomId() {
    this.id = UUID.UUID();
  }
}
