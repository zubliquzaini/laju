import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  @ViewChild('slides') slides: IonSlides;
  
  constructor(
     private route: Router) {}

  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

  ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  goSummonMenu(){
    this.route.navigateByUrl('summon-menu')
  }
  
  goSummon(){
    this.route.navigateByUrl('summon')
  }
}
