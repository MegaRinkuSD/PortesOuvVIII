import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { HttpModule } from "@angular/http";
import { File } from "@ionic-native/file";

import { AboutPage } from "../pages/about/about";
import { EvenPage } from "../pages/even/even";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ComponentsModule } from "../components.module";


import { HttpProvider } from "../providers/http/http";
import { BackbuttonService } from "../services/backbutton.service"
import { Data } from '../providers/data/data';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EvenPage,
    TabsPage
    ],
  imports: [
    IonicModule.forRoot(MyApp, {
      navExitApp: false
    }),
    HttpModule,
    BrowserModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EvenPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    File,
    BackbuttonService,
    Data,
    BarcodeScanner
  ]
})
export class AppModule {}
