import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsaCertComponent } from './mcsa-cert.component';

describe('McsaCertComponent', () => {
  let component: McsaCertComponent;
  let fixture: ComponentFixture<McsaCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsaCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsaCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
