import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      'apiKey': 'AIzaSyAD08i9AoF-mKw6yC87AcU9f2MqaVPFwOU',
      'authDomain': 'udemy-ng-http-510bf.firebaseapp.com'
    });
  }
}
