import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
 templateUrl: './head.component.html',

  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public title: string;
	public description: string;
	constructor(){
		this.title = 'APP FAVORITOS JSH';
		this.description='APP web SPA con Angular 2 para gestion favoritos';
	}


 

  ngOnInit(): void {
  }

}
