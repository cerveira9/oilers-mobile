import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  AnotherModule(){
    this.navCtrl.push('ChamadaPage');
  }

  SameModule(){
    this.navCtrl.push('listaChamada');
  }
}
