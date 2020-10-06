import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingReceiptPage } from './parking-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingReceiptPageRoutingModule {}
