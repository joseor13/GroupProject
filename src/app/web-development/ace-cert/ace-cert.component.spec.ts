import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceCertComponent } from './ace-cert.component';

describe('AceCertComponent', () => {
  let component: AceCertComponent;
  let fixture: ComponentFixture<AceCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
