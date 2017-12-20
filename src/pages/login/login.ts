import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'AVISO!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  Login(user: User){
    if (this.user.email == 'presidencia' && this.user.password == 'Chefao') {
      this.navCtrl.push('ct-page');
    } else if (this.user.email == 'ct' && this.user.password == 'ComissaoT') {
      this.navCtrl.push('ct-page');

    } else {
      this.alert('Login ou Senha errados! Tente novamente.');
    }
    
  }

  
}
