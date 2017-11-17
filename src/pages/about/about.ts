import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	results;

  constructor(
  	public navCtrl: NavController,
  	private http: Http
  ) {

  }

  findCharacter(name) {
  	this.http.get('https://swapi.co/api/people/?search=' + name)
  	.toPromise()
  	.then(response => this.results = response.json().results);
  }

}
