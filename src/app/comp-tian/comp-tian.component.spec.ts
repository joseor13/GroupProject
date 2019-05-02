import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTIANComponent } from './comp-tian.component';

describe('CompTIANComponent', () => {
  let component: CompTIANComponent;
  let fixture: ComponentFixture<CompTIANComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTIANComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTIANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
