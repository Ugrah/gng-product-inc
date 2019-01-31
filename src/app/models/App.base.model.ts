import {MobileAppsInterface} from './interfaces/apps.interface';
import { UUID } from 'angular2-uuid';

export class AppBase {

  public id: any;
  public completeDescription = '';
  public design = false;
  public creation = false;
  public packageName = '';
  public remarks = '';
  public keyWords: string[] = [];
  public confidentialityAgreement = false;
  public toUpdate = false;
  public readyToPublished = false;
  public checking = false;
  public published = false;
  public rejected = false;
  public admobAppId = '';
  public admobBannerId = '';
  public admobInterstitialId = '';
  public updateAt: any;
  public publishedAt: any;
  public shortDescription = '';
  private readonly createdAt: any;

  constructor(public appName: string) {
    this.createdAt = new Date().toString();
  }

  updatePublishedDate() {
    this.publishedAt = new Date().toString();
  }

  updateUpdatedDate() {
    this.updateAt = new Date().toString();
  }
}
