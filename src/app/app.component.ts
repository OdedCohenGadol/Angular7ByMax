import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAZTcbflWWK0z4pRboAvGgmlhxmeXc9Mm8",
      authDomain: "ng-recipe-book-271b3.firebaseapp.com",
    });
  }

}
