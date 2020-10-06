import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZakatPage } from './zakat.page';

const routes: Routes = [
  {
    path: '',
    component: ZakatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZakatPageRoutingModule {}
