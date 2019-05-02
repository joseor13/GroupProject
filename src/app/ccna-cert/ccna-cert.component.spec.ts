import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcnaCertComponent } from './ccna-cert.component';

describe('CcnaCertComponent', () => {
  let component: CcnaCertComponent;
  let fixture: ComponentFixture<CcnaCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcnaCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcnaCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
