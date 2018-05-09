import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numberSeconds = 0;
  interval;
  @Output() startClicked = new EventEmitter<number>();
  @Output() stopClicked  = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    var thisObj = this;
    this.interval = setInterval(
      function() {
        thisObj.startClicked.emit(thisObj.numberSeconds++);
      },
      1000
    );
  }

  onStop() {
    clearInterval( this.interval );
    this.stopClicked.emit();
  }
}
