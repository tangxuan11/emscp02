import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTrafficSummaryComponent } from './main-traffic-summary.component';

describe('MainTrafficSummaryComponent', () => {
  let component: MainTrafficSummaryComponent;
  let fixture: ComponentFixture<MainTrafficSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTrafficSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTrafficSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
