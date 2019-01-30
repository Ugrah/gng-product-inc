import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppsService} from '../../services/apps.service';

@Component({
  selector: 'app-dashboard-apps',
  templateUrl: './dashboard-apps.component.html',
  styleUrls: ['./dashboard-apps.component.scss']
})
export class DashboardAppsComponent implements OnInit {

  private _opened = false;

  constructor(private modalService: NgbModal,
              private appsService: AppsService) {
  }

  ngOnInit() {
  }

  public toggleSidebar() {
    this._opened = !this._opened;
  }

  onOpenModal(modal) {
    this.modalService.open(modal, { centered: true });
  }

}
