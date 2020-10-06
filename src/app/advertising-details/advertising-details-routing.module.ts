import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisingDetailsPage } from './advertising-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisingDetailsPageRoutingModule {}
