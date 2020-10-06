import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingRegisterPageRoutingModule } from './parking-register-routing.module';

import { ParkingRegisterPage } from './parking-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingRegisterPageRoutingModule
  ],
  declarations: [ParkingRegisterPage]
})
export class ParkingRegisterPageModule {}
