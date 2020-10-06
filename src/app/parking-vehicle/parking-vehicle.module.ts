import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingVehiclePageRoutingModule } from './parking-vehicle-routing.module';

import { ParkingVehiclePage } from './parking-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingVehiclePageRoutingModule
  ],
  declarations: [ParkingVehiclePage]
})
export class ParkingVehiclePageModule {}
