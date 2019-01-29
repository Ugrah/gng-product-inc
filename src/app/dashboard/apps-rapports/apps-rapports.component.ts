import {Component, Input} from '@angular/core';
import {AppsService} from '../../services/apps.service';

@Component({
  selector: 'app-apps-rapports',
  templateUrl: './apps-rapports.component.html',
  styleUrls: ['./apps-rapports.component.scss']
})
export class AppsRapportsComponent {
  @Input() platform?: 'ios' | 'android';

  constructor(private appsService: AppsService) {
    this.appsService.getAllAppsFromServer();
    this.appsService.emitAllApps();
  }

}
