import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // somente pra android
      localizedFallbackTitle: 'Use Pin', // somente pra ios
      localizedReason: 'Please authenticate' // somente ios
    })
      .then((result: any) => {
        this.navCtrl.push('HomePage');
      })
      .catch((error: any) => {
        alert(error);
      });
  }

}
