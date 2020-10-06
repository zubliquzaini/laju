import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./license/license.module').then( m => m.LicensePageModule)
  },
  {
    path: 'license-business',
    loadChildren: () => import('./license-business/license-business.module').then( m => m.LicenseBusinessPageModule)
  },
  {
    path: 'parking-register',
    loadChildren: () => import('./parking-register/parking-register.module').then( m => m.ParkingRegisterPageModule)
  },
  {
    path: 'business-details',
    loadChildren: () => import('./business-details/business-details.module').then( m => m.BusinessDetailsPageModule)
  },
  {
    path: 'parking-vehicle',
    loadChildren: () => import('./parking-vehicle/parking-vehicle.module').then( m => m.ParkingVehiclePageModule)
  },
  {
    path: 'parking-receipt',
    loadChildren: () => import('./parking-receipt/parking-receipt.module').then( m => m.ParkingReceiptPageModule)
  },
  {
    path: 'parking-payment',
    loadChildren: () => import('./parking-payment/parking-payment.module').then( m => m.ParkingPaymentPageModule)
  },
  {
    path: 'advertising-details',
    loadChildren: () => import('./advertising-details/advertising-details.module').then( m => m.AdvertisingDetailsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
