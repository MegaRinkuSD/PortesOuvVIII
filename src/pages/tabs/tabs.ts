import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EvenPage } from '../even/even';
import { App, AlertController  } from 'ionic-angular';
import { Globals } from "../../app/app.config";
import { Tabs } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild("tabs") tabs: Tabs;
  tab1Root = EvenPage;
  tab2Root = AboutPage;
  myIndex: number
  

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public app: App,
    ) {
    
  }

  ionViewDidEnter() {
    Globals.tabs = this.tabs;
}
  
}
