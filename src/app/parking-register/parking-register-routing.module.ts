import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingRegisterPage } from './parking-register.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingRegisterPageRoutingModule {}
