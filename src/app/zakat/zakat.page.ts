import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zakat',
  templateUrl: './zakat.page.html',
  styleUrls: ['./zakat.page.scss'],
})
export class ZakatPage implements OnInit {
  message: boolean = false;
  type: boolean = true;
  view: boolean = false;

  constructor() { }

  ngOnInit() {
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
