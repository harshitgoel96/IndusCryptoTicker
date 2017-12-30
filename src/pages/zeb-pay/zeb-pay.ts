import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZebPayProvider } from '../../providers/zeb-pay/zeb-pay';
import {Observable} from 'rxjs/Rx';
//import {} from ''
/**
 * Generated class for the ZebPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zeb-pay',
  templateUrl: 'zeb-pay.html',
})
export class ZebPayPage {
	data: object;
  errorMessage: string;
  loading:boolean;
 // observerKeeper:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: ZebPayProvider) {
  }

 
   ionViewDidLoad() {
    this.getRatesInt();
    //this.Object = Object;
    Observable.interval(1000*10).subscribe(x => {
    	this.data={};
    this.getRatesInt();
  });

  }

  ionViewWillUnload(){
  	//this.observerKeeper.unsubscribe();
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
