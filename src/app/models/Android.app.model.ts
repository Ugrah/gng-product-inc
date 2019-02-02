import {AppBase} from './App.base.model';
import {UUID} from 'angular2-uuid';

export class AndroidApp extends AppBase {

  constructor (public appName: string) {
    super(appName);

    this.getRandomId();
  }
}
