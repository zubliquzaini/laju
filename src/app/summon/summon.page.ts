import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summon',
  templateUrl: './summon.page.html',
  styleUrls: ['./summon.page.scss'],
})
export class SummonPage implements OnInit {
  type: boolean = true;
  message: boolean = false;
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
