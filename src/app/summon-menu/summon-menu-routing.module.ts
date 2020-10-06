import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummonMenuPage } from './summon-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SummonMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummonMenuPageRoutingModule {}
