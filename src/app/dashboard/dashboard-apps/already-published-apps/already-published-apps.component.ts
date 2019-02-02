import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppsService} from '../../../services/apps.service';
import {ActivatedRoute} from '@angular/router';
import {IosApp} from '../../../models/Ios.app.model';
import {AndroidApp} from '../../../models/Android.app.model';

@Component({
  selector: 'app-already-published-apps',
  templateUrl: './already-published-apps.component.html',
  styleUrls: ['./already-published-apps.component.scss']
})
export class AlreadyPublishedAppsComponent implements OnInit {

  private _opened = false;
  platform: any;
  appsList: any;

  constructor(private modalService: NgbModal,
              private appsService: AppsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.platform = params.platform;
    });

    if (this.platform === 'ios') {
      this.appsService.iosAppsListSubject.subscribe(
        (iosApps: IosApp[]) => { this.appsList = iosApps; }
      );
    } else if (this.platform === 'android') {
      this.appsService.androidAppsListSubject.subscribe(
        (androidApps: AndroidApp[]) => { this.appsList = androidApps; }
      );
    }
    this.appsService.getAllAppsFromServer();
    this.appsService.emitAllApps();
  }

  public toggleSidebar() {
    this._opened = !this._opened;
  }

}
