import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/src/pages/home/home.scss']
})
export class HomePage {
  public items: any = [];

  constructor(public navCtrl: NavController) {
    this.items = [
      { title: "Horaires", content: "content one", expanded: false },
      { title: "Adresse", content: "content two", expanded: false },
      { title: "Transport Public", content: "content three", expanded: false }
    ];
    console.log("HOME!!!");
    
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        }  
        return listItem;
      });
    }
  }
}
