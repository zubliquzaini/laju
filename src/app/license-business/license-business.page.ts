import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-license-business',
  templateUrl: './license-business.page.html',
  styleUrls: ['./license-business.page.scss'],
})
export class LicenseBusinessPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goDetails() {
    this.router.navigateByUrl('business-details');
  }

}
