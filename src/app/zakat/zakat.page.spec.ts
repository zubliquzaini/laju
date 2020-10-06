import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZakatPage } from './zakat.page';

describe('ZakatPage', () => {
  let component: ZakatPage;
  let fixture: ComponentFixture<ZakatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZakatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
