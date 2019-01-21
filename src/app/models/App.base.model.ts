import {MobileAppsInterface} from './interfaces/apps.interface';
import { UUID } from 'angular2-uuid';

export class AppBase {

  public id: any;
  public completeDescription: string = '';
  public design: boolean = false;
  public creation: boolean = false;
  public packageName: string = '';
  public remarks: string = '';
  public keyWords: string[] = [];
  public confidentialityAgreement: boolean = false;
  public toUpdate: boolean = false;
  public readyToPublished: boolean = false;
  public checking: boolean = false;
  public published: boolean = false;
  public rejected: boolean = false;
  public admobAppId: string = '';
  public admobBannerId: string = '';
  public admobInterstitialId: string = '';
  public updateAt;
  public publishedAt;
  public shortDescription: string = '';
  private createdAt;

  constructor(public appName: string) {
    this.createdAt = new Date();
  }

}
