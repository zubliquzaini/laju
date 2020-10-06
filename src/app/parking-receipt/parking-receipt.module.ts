import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingReceiptPageRoutingModule } from './parking-receipt-routing.module';

import { ParkingReceiptPage } from './parking-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingReceiptPageRoutingModule
  ],
  declarations: [ParkingReceiptPage]
})
export class ParkingReceiptPageModule {}
