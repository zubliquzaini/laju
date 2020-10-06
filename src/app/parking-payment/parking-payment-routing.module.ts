import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingPaymentPage } from './parking-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingPaymentPageRoutingModule {}
