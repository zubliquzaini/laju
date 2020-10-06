import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-register',
  templateUrl: './parking-register.page.html',
  styleUrls: ['./parking-register.page.scss'],
})
export class ParkingRegisterPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goPayment() {
    this.router.navigateByUrl('parking-payment');
  }

}
