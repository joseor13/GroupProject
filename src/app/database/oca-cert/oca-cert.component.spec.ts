import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcaCertComponent } from './oca-cert.component';

describe('OcaCertComponent', () => {
  let component: OcaCertComponent;
  let fixture: ComponentFixture<OcaCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcaCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcaCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
