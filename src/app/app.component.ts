import { Component, ViewChild } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import {
  App,
  AlertController,
  Nav
} from "ionic-angular";
import { TabsPage } from "../pages/tabs/tabs";
import { Globals, EN_TAB_PAGES } from "../app/app.config";
import { BackbuttonService } from "../services/backbutton.service";


@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  

  rootPage: any = TabsPage;
  alert;
  constructor(
    public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    public app: App,
    private backbuttonService: BackbuttonService,
    
    
  ) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.registerBackButton();

  }

  registerBackButton() {
    this.platform.registerBackButtonAction(() => {
      

      console.log("Checking for other pages");

      let max = Globals.navCtrls.length;
      for (let i = 0; i < Globals.navCtrls.length; i++) {
        let n = Globals.navCtrls[i];
        if (n) {
          if (n.canGoBack()) {
            console.log("Breaking the loop i: " + JSON.stringify(i));
            let navParams = n.getActive().getNavParams();
            if (navParams) {
              console.log("navParams exists");
              let resolve = navParams.get("resolve");
              if (resolve) {
                n.pop().then(() => resolve({}));
              } else {
                n.pop();
              }
            } else {
              n.pop();
            }
            return;
          }
        } else console.log("n was null!");
      }

      if (
        !this.nav.canGoBack()
      ) {
        let popPageVal = this.backbuttonService.popPage();
        console.log("popPageVal: " + JSON.stringify(popPageVal));
        if (popPageVal >= 0) {
          console.log("Switching the tab to: ", popPageVal);

          this.switchTab(popPageVal);

        } else {
          console.log("Last page is MenuPage");

          if (this.alert) {
            this.alert.dismiss();
            this.alert = null;
          } else {
            this.showAlert();
          }
        }
      } else {
        console.log("Last page is not MenuPage");
        if (this.nav.canGoBack()) {
          console.log("We can go back!");
          this.nav.pop();
        }
      }
    });
  }

  showAlert() {
    this.alert = this.alertCtrl.create({
      title: "Exit?",
      message: "Are you sure you want to exit?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: "Exit",
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  switchTab(tabIndex) {
    if (Globals.tabs && tabIndex >= 0) {
      console.log("Switch condition met");
      Globals.tabIndex = tabIndex;
      Globals.tabs.select(tabIndex);
      
      console.log('SWITH MUST SUCCEED')
      
      Globals.tabs.selectedIndex = tabIndex;
    }else{
      console.log('GLOBALS != NULL')
    }
  }











}
