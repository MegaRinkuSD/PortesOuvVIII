import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-evendetail',
  templateUrl: 'evendetail.html',
  providers: [HttpProvider],
})
export class EvendetailPage implements OnInit{
  newData: any
  index: string
  public items: Array<{ title: string; note: string; img: string; content: string;}> = [];
  public headerTitle: string
  public headerNote: string
  public headerImg: string
  public headerContent: any

  constructor(public navCtrl: NavController, private httpProvider: HttpProvider, public navParams: NavParams, public sanitizer: DomSanitizer ) {
    this.index = navParams.get('data')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvendetailPage');
  }

  ngOnInit(){
    this.httpProvider.getJsonData().subscribe(
      result => {
        this.newData = result;
        console.log("Success : " + this.newData.data[0].title);
        this.items = this.newData.data
        console.log(this.items[0].title);
        for(let item of this.items){
          if (item.title == this.index){
            this.headerTitle = item.title
            this.headerNote = item.note
            this.headerImg = "/assets/imgs/" + item.img
            this.headerContent = this.sanitizer.bypassSecurityTrustHtml(item.content);
          }
        }

      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log("getData completed");
      }
    );
  }

}
