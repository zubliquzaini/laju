import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenseBusinessPage } from './license-business.page';

describe('LicenseBusinessPage', () => {
  let component: LicenseBusinessPage;
  let fixture: ComponentFixture<LicenseBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
