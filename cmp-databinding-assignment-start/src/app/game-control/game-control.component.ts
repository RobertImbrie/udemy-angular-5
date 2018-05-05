import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    setInterval( function() {
        this.startClicked.emit({ });
    },
    1000);
  }

  onStop() {
    this.stopClicked.emit({ });
  }
}
