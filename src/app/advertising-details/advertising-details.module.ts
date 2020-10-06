import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisingDetailsPageRoutingModule } from './advertising-details-routing.module';

import { AdvertisingDetailsPage } from './advertising-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisingDetailsPageRoutingModule
  ],
  declarations: [AdvertisingDetailsPage]
})
export class AdvertisingDetailsPageModule {}
