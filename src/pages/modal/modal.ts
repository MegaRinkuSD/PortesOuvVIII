import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  title: any
  note: any
  img: any
  public plat: string
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public plt: Platform) {
    this.title = navParams.get('title')
    this.note = navParams.get('note')
    this.img = navParams.get('img')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  ionViewWillEnter() {

    if (this.plt.is("android")) {
      this.plat = "android";
    }

    if (this.plt.is("browser")) {
      this.plat = "browser";
    }
  }


  close(){
    this.viewCtrl.dismiss();
  }

}
