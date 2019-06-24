
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HttpProvider {
  

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
    
    
  }
  getJsonData(){
    return this.http.get('assets/data/mydata.json').map(res => res.json());
  }

  getMarkerData(){
    return this.http.get('assets/data/mapdata.json').map(res => res.json());
  }

}
