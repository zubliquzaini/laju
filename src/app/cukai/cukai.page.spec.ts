import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CukaiPage } from './cukai.page';

describe('CukaiPage', () => {
  let component: CukaiPage;
  let fixture: ComponentFixture<CukaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CukaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CukaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
