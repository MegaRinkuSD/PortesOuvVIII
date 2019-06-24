import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpProvider } from "../../providers/http/http";
import { FormsModule } from "@angular/forms";

import { NavController, ModalController } from "ionic-angular";

import leaflet from 'leaflet';
import { BackbuttonService } from "../../services/backbutton.service";
import { EN_TAB_PAGES } from "../../app/app.config";
 


@NgModule({
  imports: [CommonModule, FormsModule],

  declarations: [AboutPage]
})
@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  modalControl: ModalController;
  map: any;
  public markers: any;
  constructor(

    public navCtrl: NavController,
    private httpProvider: HttpProvider,
    private backbuttonService: BackbuttonService, 
    public modalCtrl: ModalController,
  ) {}
   ngOnInit() {}

  ionViewWillEnter() {
    this.backbuttonService.pushPage(EN_TAB_PAGES.EN_TP_CARTE, this.navCtrl);
  }

 public openModal(title, note, img){
    let modal = this.modalCtrl.create('ModalPage', {title: title, note: note, img: img})
    modal.present()
  }


ionViewDidLoad() {
  this.loadmap();
}


loadmap() {
  this.map = leaflet.map("map").setView([47.223163, -1.544621], 18);
  leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attributions: 'www.tphangout.com',
    maxZoom: 18
  }).addTo(this.map);



  this.httpProvider.getMarkerData().subscribe(
            result => {
              console.log("READING DARA");
              this.markers = result;
              console.log("Success : " + this.markers.marqueurs[0].title);
              this.markers = this.markers.marqueurs;
              
    
              for (let item of this.markers) {
                var marker = leaflet.marker([item.latitude, item.longitude]).addTo(this.map)
                .bindTooltip(item.title, {permanent: true, interactive: true})
                marker.on('click', (e)=> {
              var modal = this.openModal(item.title, item.note, item.img);
              });
                  
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

centerCam(){
  this.map.setView([47.223163, -1.544621], 18);
}










}
