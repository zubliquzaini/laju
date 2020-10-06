import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {

  constructor(
    private router: Router
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

}
