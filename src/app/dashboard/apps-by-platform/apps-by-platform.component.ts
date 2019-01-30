import {Component, Input, OnInit} from '@angular/core';
import {AppsService} from '../../services/apps.service';
import {IosApp} from '../../models/Ios.app.model';
import {AndroidApp} from '../../models/Android.app.model';

@Component({
  selector: 'app-apps-by-platform',
  templateUrl: './apps-by-platform.component.html',
  styleUrls: ['./apps-by-platform.component.scss']
})
export class AppsByPlatformComponent implements OnInit {
  @Input() platform?: 'ios' | 'android';
  @Input() appsList: any;

  constructor(private appsService: AppsService) {}

  ngOnInit() {
  }

}
