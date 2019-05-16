import { ExpandableComponent } from "../components/expandable/expandable";
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';


@NgModule({
    imports: [
        CommonModule, 
        IonicModule
    ],
    declarations: [ExpandableComponent],
    exports: [ExpandableComponent]
  })
  export class SharedModule {}