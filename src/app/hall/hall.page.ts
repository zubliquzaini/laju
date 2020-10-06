import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.page.html',
  styleUrls: ['./hall.page.scss'],
})
export class HallPage implements OnInit {

  type: any = true;
  message: any = false;
  view: any = false;

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
