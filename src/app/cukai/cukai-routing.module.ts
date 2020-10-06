import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CukaiPage } from './cukai.page';

const routes: Routes = [
  {
    path: '',
    component: CukaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CukaiPageRoutingModule {}
