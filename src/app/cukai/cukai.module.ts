import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CukaiPageRoutingModule } from './cukai-routing.module';

import { CukaiPage } from './cukai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CukaiPageRoutingModule
  ],
  declarations: [CukaiPage]
})
export class CukaiPageModule {}
