import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'parking',
        loadChildren: () => import('../parking/parking.module').then( m => m.ParkingPageModule)
      },
      {
        path: 'license',
        loadChildren: () => import('../license/license.module').then( m => m.LicensePageModule)
      },
      {
        path: 'license-business',
        loadChildren: () => import('../license-business/license-business.module').then( m => m.LicenseBusinessPageModule)
      },
      {
        path: 'parking-register',
        loadChildren: () => import('../parking-register/parking-register.module').then( m => m.ParkingRegisterPageModule)
      },
      {
        path: 'business-details',
        loadChildren: () => import('../business-details/business-details.module').then( m => m.BusinessDetailsPageModule)
      },
      {
        path: 'parking-vehicle',
        loadChildren: () => import('../parking-vehicle/parking-vehicle.module').then( m => m.ParkingVehiclePageModule)
      },
      {
        path: 'parking-receipt',
        loadChildren: () => import('../parking-receipt/parking-receipt.module').then( m => m.ParkingReceiptPageModule)
      },
      {
        path: 'parking-payment',
        loadChildren: () => import('../parking-payment/parking-payment.module').then( m => m.ParkingPaymentPageModule)
      },
      {
        path: 'advertising-details',
        loadChildren: () => import('../advertising-details/advertising-details.module').then( m => m.AdvertisingDetailsPageModule)
      },
      {
        path: 'summon-menu',
        loadChildren: () => import('../summon-menu/summon-menu.module').then( m => m.SummonMenuPageModule)
      },
      {
        path: 'summon',
        loadChildren: () => import('../summon/summon.module').then( m => m.SummonPageModule)
      },
      {
        path: 'compound',
        loadChildren: () => import('../compound/compound.module').then( m => m.CompoundPageModule)
      },
      {
        path: 'complaint',
        loadChildren: () => import('../complaint/complaint.module').then( m => m.ComplaintPageModule)
      },
      {
        path: 'zakat',
        loadChildren: () => import('../zakat/zakat.module').then( m => m.ZakatPageModule)
      },
      {
        path: 'hall',
        loadChildren: () => import('../hall/hall.module').then( m => m.HallPageModule)
      },
      {
        path: 'ferry',
        loadChildren: () => import('../ferry/ferry.module').then( m => m.FerryPageModule)
      },
      {
        path: 'zakat-payment',
        loadChildren: () => import('../zakat-payment/zakat-payment.module').then( m => m.ZakatPaymentPageModule)
      },
      {
        path: 'cukai',
        loadChildren: () => import('../cukai/cukai.module').then( m => m.CukaiPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
