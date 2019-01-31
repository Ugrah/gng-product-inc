import {Component, Input, OnInit} from '@angular/core';
import {AppsService} from '../../services/apps.service';
import {IosApp} from '../../models/Ios.app.model';
import {AndroidApp} from '../../models/Android.app.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-apps-by-platform',
  templateUrl: './apps-by-platform.component.html',
  styleUrls: ['./apps-by-platform.component.scss']
})
export class AppsByPlatformComponent implements OnInit {
  @Input() platform?: 'ios' | 'android';
  @Input() appsList: any;

  constructor(private appsService: AppsService,
              private router: Router) {}

  ngOnInit() {
  }

  goToShowApp(app: IosApp | AndroidApp) {
    this.router.navigate(['/show-app', this.platform, app.id]);
  }

}
