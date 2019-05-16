import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Platform, NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  Environment,
  LocationService,
  MyLocation,
  GoogleMapPreferenceOptions,
  GoogleMapOptions,
  ILatLng
} from "@ionic-native/google-maps";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  
  declarations: [AboutPage]
})

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  @ViewChild('map') element;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public navCtrl: NavController) {

  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    })
  }

  map: GoogleMap


  initMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAHyVLfbYQ_O0jR888-wD8srnG5AKGskoI',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAHyVLfbYQ_O0jR888-wD8srnG5AKGskoI'
    });

    let positionI: ILatLng = {
      lat: 47.224506,
      lng: -1.545876
    };

    let positionII: ILatLng = {
      lat: 47.222390,
      lng: -1.543960
    };


    let bounds: ILatLng[] = [positionI, positionII];

    let boundsOptions: GoogleMapPreferenceOptions = {
      gestureBounds: bounds
    }
    
    this.map = GoogleMaps.create(this.element.nativeElement, boundsOptions);

    LocationService.getMyLocation().then((myLocation: MyLocation) => {

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

        let coordinates: LatLng = new LatLng(myLocation.latLng.lat, myLocation.latLng.lng);

        let camera = {
          target: coordinates,
          zoom: 25
        }

        this.map.animateCamera(camera)
        this.map.setMyLocationEnabled(true)
        this.map.setMyLocationButtonEnabled(true)
      })

    });

  }

}
