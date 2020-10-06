import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SummonPage } from './summon.page';

describe('SummonPage', () => {
  let component: SummonPage;
  let fixture: ComponentFixture<SummonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SummonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
