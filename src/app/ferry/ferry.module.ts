import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FerryPageRoutingModule } from './ferry-routing.module';

import { FerryPage } from './ferry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerryPageRoutingModule
  ],
  declarations: [FerryPage]
})
export class FerryPageModule {}
