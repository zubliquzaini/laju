import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SummonMenuPage } from './summon-menu.page';

describe('SummonMenuPage', () => {
  let component: SummonMenuPage;
  let fixture: ComponentFixture<SummonMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SummonMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
