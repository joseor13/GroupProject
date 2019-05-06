import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCertComponent } from './aws-cert.component';

describe('AwsCertComponent', () => {
  let component: AwsCertComponent;
  let fixture: ComponentFixture<AwsCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
