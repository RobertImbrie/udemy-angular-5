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

	clickButton(){
		this.hideParagraph = !this.hideParagraph;
		this.logs.push( this.logs.length );
		console.log( this.logs.length );
	}

	getColor(){
		return this.logs.length>4 ? "blue" : "white";
	}
}
