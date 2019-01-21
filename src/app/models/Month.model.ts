import {IosApp} from './Ios.app.model';
import {AndroidApp} from './Android.app.model';

export class Month {
  iosApps: IosApp[] | AndroidApp[];

  constructor(public name: string,
              public numberMonth: number) {
  }
}
