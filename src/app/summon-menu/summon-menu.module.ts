import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummonMenuPageRoutingModule } from './summon-menu-routing.module';

import { SummonMenuPage } from './summon-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummonMenuPageRoutingModule
  ],
  declarations: [SummonMenuPage]
})
export class SummonMenuPageModule {}
