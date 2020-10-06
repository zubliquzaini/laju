import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {
  type: boolean = true;
  message: boolean = false;
  view: boolean = false;

  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  goRegister() {
    this.router.navigateByUrl('parking-register');
  }

  goVehicle() {
    this.router.navigateByUrl('parking-vehicle');
  }

  goReceipt() {
    this.router.navigateByUrl('parking-receipt');
  }

  goCheck() {
    this.type = false;
    this.message = true;
    this.view = false;
  }

  goSubmit() {
    this.presentAlert();
    this.type = true;
    this.message = false;
    this.view = false;
  }

  goView() {
    this.view = true;
    this.type = false;
    this.message = false;
  }

  goBack() {
    this.view = false;
    this.type = true;
    this.message = false;
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Payment Successful',
      buttons: ['OK']
    });

    await alert.present();
  }
}
