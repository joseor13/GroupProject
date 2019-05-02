import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsDevCertComponent } from './aws-dev-cert.component';

describe('AwsDevCertComponent', () => {
  let component: AwsDevCertComponent;
  let fixture: ComponentFixture<AwsDevCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsDevCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsDevCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
