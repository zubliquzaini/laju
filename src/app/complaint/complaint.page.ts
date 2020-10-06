import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {

  type: any = true;
  message: any = false;
  view: any = false;

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

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Complaint Submitted',
      buttons: ['OK']
    });

    await alert.present();
  }

  goBack() {
    this.view = false;
    this.type = true;
    this.message = false;
    console.log('click');
  }

}
