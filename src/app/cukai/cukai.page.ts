import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cukai',
  templateUrl: './cukai.page.html',
  styleUrls: ['./cukai.page.scss'],
})
export class CukaiPage implements OnInit {
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
