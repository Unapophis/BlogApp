import { Component } from '@angular/core';
import { Post } from './models/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    const config = {
      apiKey: "AIzaSyBX7l7Jek4orE3QPuTycv8HEpB86mJ5Ewc",
      authDomain: "blogapp-cbbf7.firebaseapp.com",
      databaseURL: "https://blogapp-cbbf7.firebaseio.com",
      projectId: "blogapp-cbbf7",
      storageBucket: "blogapp-cbbf7.appspot.com",
      messagingSenderId: "921992398073"
    };
    firebase.initializeApp(config);
  }
}
