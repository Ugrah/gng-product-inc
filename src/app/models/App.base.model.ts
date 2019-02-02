import {MobileAppsInterface} from './interfaces/apps.interface';
import { UUID } from 'angular2-uuid';

export class AppBase {

  public id: any;
  public completeDescription = '';
  public design = false;
  public creation = false;
  public packageName = '';
  public remarks = '';
  public shortDescription = '';
  public keyWords = '';
  public privacyPolityType: 'free' | 'commercial' | 'openSource' | 'freemium' | 'adSupported';
  public toUpdate = false;
  public readyToPublished = false;
  public checking = false;
  public published = false;
  public rejected = false;
  public admobAppId = '';
  public admobBannerId = '';
  public admobInterstitialId = '';
  public lastModificationDate: any;
  public lastDatePosting: any;
  private readonly createdAt: any;

  constructor(public appName: string) {
    this.createdAt = new Date().toString();
  }

  getRandomId() {
    this.id = UUID.UUID();
  }
}
