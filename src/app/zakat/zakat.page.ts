import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-zakat',
  templateUrl: './zakat.page.html',
  styleUrls: ['./zakat.page.scss'],
})
export class ZakatPage implements OnInit {
  message: boolean = false;
  type: boolean = true;
  view: boolean = false;

  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  goCheck() {
    this.type = false;
    this.message = true;
  }

  goSubmit() {
    this.presentAlert();
    this.type = true;
    this.message = false;
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
