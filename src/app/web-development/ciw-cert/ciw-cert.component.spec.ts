import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiwCertComponent } from './ciw-cert.component';

describe('CiwCertComponent', () => {
  let component: CiwCertComponent;
  let fixture: ComponentFixture<CiwCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiwCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiwCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
