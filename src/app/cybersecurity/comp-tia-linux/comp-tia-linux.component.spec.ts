import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTiaLinuxComponent } from './comp-tia-linux.component';

describe('CompTiaLinuxComponent', () => {
  let component: CompTiaLinuxComponent;
  let fixture: ComponentFixture<CompTiaLinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTiaLinuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTiaLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
