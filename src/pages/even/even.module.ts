import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components.module'

import { EvenPage } from './even';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: EvenPage
      }
    ])
  ],
  declarations: [EvenPage]
})
export class EvenModule {}
