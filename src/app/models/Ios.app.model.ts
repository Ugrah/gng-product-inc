export class IosApp {

  public id: string;

  constructor(public appName: string,
              public shortDescription: string,
              public completeDescription: string,
              public design: boolean,
              public creation: boolean,
              public packageName: string,
              public remarks: string,
              public keyWords: string[],
              public appCertificate: boolean,
              public confidentialityAgreement: boolean,
              public publication: boolean,
              public admobAppId: string,
              public admobBannerId: string,
              public admobInterstitialId: string) {
  }

  admobsIsFull() {
    let isGood = true;
    if (this.admobAppId === '' || this.admobBannerId === '' || this.admobInterstitialId === '') {
      isGood = false;
    }

    return isGood;
  }
}
