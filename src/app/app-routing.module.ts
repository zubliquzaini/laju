import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'summon-menu',
    loadChildren: () => import('./summon-menu/summon-menu.module').then( m => m.SummonMenuPageModule)
  },
  {
    path: 'summon',
    loadChildren: () => import('./summon/summon.module').then( m => m.SummonPageModule)
  },
  {
    path: 'compound',
    loadChildren: () => import('./compound/compound.module').then( m => m.CompoundPageModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import('./complaint/complaint.module').then( m => m.ComplaintPageModule)
  },
  {
    path: 'zakat',
    loadChildren: () => import('./zakat/zakat.module').then( m => m.ZakatPageModule)
  },
  {
    path: 'hall',
    loadChildren: () => import('./hall/hall.module').then( m => m.HallPageModule)
  },
  {
    path: 'ferry',
    loadChildren: () => import('./ferry/ferry.module').then( m => m.FerryPageModule)
  },
  {
    path: 'zakat-payment',
    loadChildren: () => import('./zakat-payment/zakat-payment.module').then( m => m.ZakatPaymentPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
