import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Db2CertComponent } from './db2-cert.component';

describe('Db2CertComponent', () => {
  let component: Db2CertComponent;
  let fixture: ComponentFixture<Db2CertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Db2CertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Db2CertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
