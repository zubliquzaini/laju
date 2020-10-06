import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferry',
  templateUrl: './ferry.page.html',
  styleUrls: ['./ferry.page.scss'],
})
export class FerryPage implements OnInit {
  type: boolean = true;
  message: boolean = false;
  view: boolean =false;

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
    console.log('click');
  }

}
