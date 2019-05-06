import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTiaNetworkComponent } from './comp-tia-network.component';

describe('CompTiaNetworkComponent', () => {
  let component: CompTiaNetworkComponent;
  let fixture: ComponentFixture<CompTiaNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTiaNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTiaNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
