import { Component } from '@angular/core';
import { NavController,NavParams,Nav } from 'ionic-angular';

import { EvenPage } from '../even/even';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';


export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {
  public rootPage = TabsPage;

  public appPages: PageInterface[] = [
    { title: 'Home',  component: HomePage, index: 0, icon: 'home' },
    { title: 'Even',  component: EvenPage, index: 1, icon: 'book' }
  ];

  constructor(public navCtrl: NavController , 
    public navParams: NavParams , 
    public nav: Nav) {
    this.rootPage = TabsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {

    if (p.title != "Log Off") {
      this.rootPage = p.component;
    } else {
      this.nav.setRoot(EvenPage);
    }
      
  }
}