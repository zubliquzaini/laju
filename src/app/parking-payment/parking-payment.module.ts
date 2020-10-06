import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingPaymentPageRoutingModule } from './parking-payment-routing.module';

import { ParkingPaymentPage } from './parking-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingPaymentPageRoutingModule
  ],
  declarations: [ParkingPaymentPage]
})
export class ParkingPaymentPageModule {}
