import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  @ViewChild('slides') slides: IonSlides;
  
  constructor(
    private router: Router
  ) {}

  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

  ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  goParking() {
    this.router.navigateByUrl('parking');
  }

  goLicense() {
    this.router.navigateByUrl('license');
  }
  goSummonMenu(){
    this.router.navigateByUrl('summon-menu')
  }
  
  goSummon(){
    this.router.navigateByUrl('summon')
  }
  
  goModule(page) {
    this.router.navigateByUrl('/tabs/'+ page);
  }
}
