import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBusiness() {
    this.router.navigateByUrl('license-business');
  }

}
