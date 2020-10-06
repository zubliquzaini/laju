import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZakatPaymentPage } from './zakat-payment.page';

describe('ZakatPaymentPage', () => {
  let component: ZakatPaymentPage;
  let fixture: ComponentFixture<ZakatPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakatPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZakatPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
