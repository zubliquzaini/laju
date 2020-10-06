import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FerryPage } from './ferry.page';

describe('FerryPage', () => {
  let component: FerryPage;
  let fixture: ComponentFixture<FerryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FerryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
