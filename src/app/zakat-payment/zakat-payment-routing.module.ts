import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZakatPaymentPage } from './zakat-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ZakatPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZakatPaymentPageRoutingModule {}
