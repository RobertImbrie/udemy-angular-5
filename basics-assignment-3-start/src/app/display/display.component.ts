import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  styles: [`
  	.display{
  		visibility: hidden;
  	}
  `]
})
export class DisplayComponent {
	showParagraph=false;

	toggleParagraph(){
		this.showParagraph = !this.showParagraph;
	}
}
