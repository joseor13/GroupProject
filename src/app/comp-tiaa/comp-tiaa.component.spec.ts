import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTIAAComponent } from './comp-tiaa.component';

describe('CompTIAAComponent', () => {
  let component: CompTIAAComponent;
  let fixture: ComponentFixture<CompTIAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTIAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTIAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
