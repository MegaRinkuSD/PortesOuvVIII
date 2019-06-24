import { NgModule } from "@angular/core";
//import { ExpandableComponent } from './components/expandable/expandable';

import { CommonModule } from "@angular/common";
import { IonicPageModule } from "ionic-angular";
import { TestComponent } from "./components/test/test";
import { FlashCardComponent } from "./components/flash-card/flash-card";

@NgModule({
  declarations: [
    //ExpandableComponent,
    TestComponent,
    FlashCardComponent
  ],
  imports: [CommonModule, IonicPageModule.forChild(TestComponent)],
  exports: [
    //ExpandableComponent,
    TestComponent,
    FlashCardComponent
  ],
  entryComponents: [
    //ExpandableComponent
  ]
})
export class ComponentsModule {
  constructor() {
    console.log("Components Mod");
  }
}
