import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EvenPage } from '../even/even';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EvenPage;
  tab2Root = AboutPage;
  tab3Root = HomePage;

  constructor(public navCtrl: NavController) {
    //this.navCtrl.push(MenuPage);
  }
}
