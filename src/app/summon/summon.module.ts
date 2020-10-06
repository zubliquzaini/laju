import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummonPageRoutingModule } from './summon-routing.module';

import { SummonPage } from './summon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummonPageRoutingModule
  ],
  declarations: [SummonPage]
})
export class SummonPageModule {}
