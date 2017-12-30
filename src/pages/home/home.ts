import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: object;
  errorMessage: string;
  loading:boolean;
  intervalKeeper:any;
//Object: object;
  constructor(public navCtrl: NavController, public rest: RestProvider) {
this.loading=false;
  }

  ionViewDidLoad() {
    this.getRatesInt();
    //this.Object = Object;
   this.intervalKeeper= Observable.interval(1000*30).subscribe(x => {
    	this.data={};
    this.getRatesInt();
  });

  }

  ionViewDidUnload(){
    
  }

  getRatesInt() {
  	this.loading=true;
    this.rest.getRates()
       .subscribe(
         data => this.data =data,
         error =>  this.errorMessage = <any>error);
       this.loading=false;
  }

}
