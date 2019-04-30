import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTIALinuxComponent } from './comp-tialinux.component';

describe('CompTIALinuxComponent', () => {
  let component: CompTIALinuxComponent;
  let fixture: ComponentFixture<CompTIALinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTIALinuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTIALinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
