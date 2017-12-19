import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ct-page'
})
@Component({
  selector: 'page-ct',
  templateUrl: 'ct.html',
})
export class CtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CtPage');
  }
  anotherModule() {
    this.navCtrl.push('ChamadaPage');
  }

  sameModule() {
    this.navCtrl.push('lista-page');
  }
}
