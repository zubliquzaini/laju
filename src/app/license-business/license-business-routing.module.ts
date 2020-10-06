import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseBusinessPage } from './license-business.page';

const routes: Routes = [
  {
    path: '',
    component: LicenseBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenseBusinessPageRoutingModule {}
