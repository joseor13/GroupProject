import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtaCertComponent } from './mta-cert.component';

describe('MtaCertComponent', () => {
  let component: MtaCertComponent;
  let fixture: ComponentFixture<MtaCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtaCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtaCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
