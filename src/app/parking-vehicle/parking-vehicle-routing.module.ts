import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingVehiclePage } from './parking-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingVehiclePageRoutingModule {}
