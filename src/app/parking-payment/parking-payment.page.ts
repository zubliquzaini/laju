import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-payment',
  templateUrl: './parking-payment.page.html',
  styleUrls: ['./parking-payment.page.scss'],
})
export class ParkingPaymentPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('license');
  }


}
