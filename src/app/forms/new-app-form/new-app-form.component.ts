import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppsService} from '../../services/apps.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-app-form',
  templateUrl: './new-app-form.component.html',
  styleUrls: ['./new-app-form.component.scss']
})
export class NewAppFormComponent implements OnInit {

  addAppForm: FormGroup;
  ios: boolean;
  android: boolean;
  errorMessage: string;

  published: boolean;

  constructor(private formBuilder: FormBuilder,
              private appsService: AppsService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.ios = false;
    this.android = false;
    this.published = true;
  }

  initForm() {
    this.addAppForm = this.formBuilder.group({
      appName: ['', [Validators.required, Validators.min(8)]],
      ios: [],
      android: []
    });
  }

  onSubmit() {
    const appName = this.addAppForm.get('appName').value;
    const iosVal = this.addAppForm.get('ios').value;
    const androidVal = this.addAppForm.get('android').value;

    this.appsService.createNewApp(appName, {ios: iosVal, android: androidVal});

    this.modalService.dismissAll();
  }

  onSwitched() {
    this.published = !this.published; console.log(this.published);
  }
}
