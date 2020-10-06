import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {
  type: boolean = true;
  message: boolean = false;
  view: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBusiness() {
    this.router.navigateByUrl('license-business');
  }

  goCheck() {
    this.type = false;
    this.message = true;
  }

  goSubmit() {
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
}
