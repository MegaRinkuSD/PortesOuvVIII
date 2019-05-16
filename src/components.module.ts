import { NgModule } from '@angular/core';
//import { ExpandableComponent } from './components/expandable/expandable';

import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { TestComponent } from './components/test/test';

@NgModule({
	declarations: [//ExpandableComponent,
    TestComponent],
	imports: [CommonModule, IonicPageModule.forChild(TestComponent)],
	exports: [//ExpandableComponent,
    TestComponent],
	entryComponents: [//ExpandableComponent
	]
})
export class ComponentsModule {
	constructor(){
		console.log("Components Mod");
	}
}
