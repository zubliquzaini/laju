import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parking-receipt',
  templateUrl: './parking-receipt.page.html',
  styleUrls: ['./parking-receipt.page.scss'],
})
export class ParkingReceiptPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('license');
  }

}
