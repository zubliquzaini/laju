import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZakatPaymentPageRoutingModule } from './zakat-payment-routing.module';

import { ZakatPaymentPage } from './zakat-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZakatPaymentPageRoutingModule
  ],
  declarations: [ZakatPaymentPage]
})
export class ZakatPaymentPageModule {}
