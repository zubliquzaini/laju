import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenseBusinessPageRoutingModule } from './license-business-routing.module';

import { LicenseBusinessPage } from './license-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenseBusinessPageRoutingModule
  ],
  declarations: [LicenseBusinessPage]
})
export class LicenseBusinessPageModule {}
