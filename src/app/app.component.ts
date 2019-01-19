import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gng-product-inc';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAfCIqQnKsIbKjm6BjnIIF5R2n0SgOKiXk',
      authDomain: 'gng-product-inc.firebaseapp.com',
      databaseURL: 'https://gng-product-inc.firebaseio.com',
      projectId: 'gng-product-inc',
      storageBucket: 'gng-product-inc.appspot.com',
      messagingSenderId: '869374895160'
    };

    firebase.initializeApp(config);
  }
}
