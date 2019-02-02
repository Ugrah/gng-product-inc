import { Component } from '@angular/core';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.scss']
})
export class CreateAppComponent {

  opened = false;

  constructor() {
  }

  public toggleSidebar() {
    this.opened = !this.opened;
  }

}
