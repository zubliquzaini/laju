import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerryPage } from './ferry.page';

const routes: Routes = [
  {
    path: '',
    component: FerryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerryPageRoutingModule {}
