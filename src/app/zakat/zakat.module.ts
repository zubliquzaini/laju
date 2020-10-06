import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZakatPageRoutingModule } from './zakat-routing.module';

import { ZakatPage } from './zakat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZakatPageRoutingModule
  ],
  declarations: [ZakatPage]
})
export class ZakatPageModule {}
