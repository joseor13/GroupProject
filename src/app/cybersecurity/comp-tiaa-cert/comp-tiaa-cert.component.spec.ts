import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTiaaCertComponent } from './comp-tiaa-cert.component';

describe('CompTiaaCertComponent', () => {
  let component: CompTiaaCertComponent;
  let fixture: ComponentFixture<CompTiaaCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTiaaCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTiaaCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
