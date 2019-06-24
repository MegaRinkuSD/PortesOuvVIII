import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import { HttpProvider } from "../../providers/http/http";
import { File } from "@ionic-native/file";
import { BackbuttonService } from "../../services/backbutton.service";
import { EN_TAB_PAGES } from "../../app/app.config";
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser";

@Component({
  selector: "page-even",
  templateUrl: "even.html",
  providers: [HttpProvider]
})
export class EvenPage implements OnInit {
  private selectedItem: any;
  newsData: any;
  private data: any;
  public items: Array<{ title: string; note: string;}> = [];
  constructor(
    public navCtrl: NavController,
    private httpProvider: HttpProvider,
    private file: File,
    private backbuttonService: BackbuttonService,
    public platform: Platform,
    private theInAppBrowser: InAppBrowser
  ) {}

  ionViewWillEnter() {
    this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_EVEN, this.navCtrl);

    if (this.platform.is("android")) {
      this.isTablet = true;
    }

    if (this.platform.is("browser")) {
      this.isTablet = false;
    }
  }

  public isTablet: boolean;

  ngOnInit() {
    let pat: string;

   

    this.file
      .checkFile(this.file.externalRootDirectory + "/Download/", "mydata.json")
      .then(
        result => {
          console.log("exiqst: " + result);

          this.file
            .readAsText(
              this.file.externalRootDirectory + "/Download",
              "mydata.json"
            )
            .then(result => {
              console.log("FETCH " + result);
              pat = result;
              this.newsData = JSON.parse(pat);
              console.log("Success : " + this.newsData.data[0].title);
              this.items = this.newsData.data;
            });
        },
        error => {
          console.log("check file error " + JSON.stringify(error));
          console.log(this.file.dataDirectory);

          this.httpProvider.getJsonData().subscribe(
            result => {
              this.newsData = result;
              console.log("Success : " + this.newsData.data[0].title);
              this.items = this.newsData.data;
            },
            err => {
              console.error("Error : " + err);
            },
            () => {
              console.log("getData completed");
            }
          );
        }
      );
  }



  getdata() {
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.newsData = result;
        console.log("Success : " + this.newsData.title);
        console.log("Success : " + result.title);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log("getData completed");
      }
    );
  }

  openWithSystemBrowser(url: string) {
    console.log("Yeah, its working");
    let target = "_system";
    this.theInAppBrowser.create(url, target);
  }

  openQuiz(){
    this.navCtrl.push('QuizPage');
  }

  openQR(){
    this.navCtrl.push('QrResultPage');
  }

  openDetail(index){
    this.navCtrl.push('EvendetailPage', {data: index});
  }
}
