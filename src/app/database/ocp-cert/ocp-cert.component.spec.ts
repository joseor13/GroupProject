import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcpCertComponent } from './ocp-cert.component';

describe('OcpCertComponent', () => {
  let component: OcpCertComponent;
  let fixture: ComponentFixture<OcpCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcpCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcpCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
