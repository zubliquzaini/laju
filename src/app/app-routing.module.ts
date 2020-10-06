import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
