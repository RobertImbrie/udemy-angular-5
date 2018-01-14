import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  styles: [`
  	.display{
  		visibility: hidden;
  	}
  	.textColor{
  		color: white;
  	}
  `]
})
export class DisplayComponent {
	hideParagraph=false;
	logs = [];
	length = 0;

	clickButton(){
		this.hideParagraph = !this.hideParagraph;
		this.logs.push( this.logs.length );
	}
}
