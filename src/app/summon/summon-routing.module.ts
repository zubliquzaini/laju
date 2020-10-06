import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummonPage } from './summon.page';

const routes: Routes = [
  {
    path: '',
    component: SummonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummonPageRoutingModule {}
