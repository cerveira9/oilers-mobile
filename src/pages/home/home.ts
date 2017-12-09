import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navigateToAnotherModule(){
    this.navCtrl.push('ChamadaPage');
  }

  navigateToSameModule(){
    this.navCtrl.push('listaChamada-page');
  }
}
