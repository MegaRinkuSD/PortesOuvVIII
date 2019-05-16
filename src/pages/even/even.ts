import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-even',
  templateUrl: 'even.html',
  styleUrls: ['/src/pages/even/even.scss']
})
export class EvenPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string; content: string; expanded: boolean}> = [];
  constructor(public navCtrl: NavController) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 
        'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 
        'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 
        'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 
        'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 
        'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 
        'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i + 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        content: 'This is content #' + i,
        expanded: false
      });
    }
  }

  ngOnInit() {
  }


  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else 
        return listItem;
      });
    }
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
