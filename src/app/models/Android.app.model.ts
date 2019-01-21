import {AppBase} from './App.base.model';
import {UUID} from 'angular2-uuid';

export class AndroidApp extends AppBase {

  constructor (public appName: string) {
    super(appName);

    this.getRandomId();
  }

  admobsIsFull() {
    let isGood = true;
    if (this.admobAppId === '' || this.admobBannerId === '' || this.admobInterstitialId === '') {
      isGood = false;
    }
    return isGood;
  }

  updatePublishedDate() {
    this.publishedAt = new Date();
  }

  updateUpdatedDate() {
    this.updateAt = new Date();
  }

  getRandomId() {
    this.id = UUID.UUID();
  }
}
