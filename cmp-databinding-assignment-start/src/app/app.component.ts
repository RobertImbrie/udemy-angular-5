import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements = [];
  evenElements = [];
  onStartClicked( numberSeconds ) {
    console.log(numberSeconds);
    if ((numberSeconds % 2) === 1) {
      this.oddElements.push(numberSeconds);
    } else {
     this.evenElements.push(numberSeconds);
    }
  }

  onStopClicked() {
  }
}
