import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTrafficSummaryComponent } from './country-traffic-summary.component';

describe('CountryTrafficSummaryComponent', () => {
  let component: CountryTrafficSummaryComponent;
  let fixture: ComponentFixture<CountryTrafficSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTrafficSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTrafficSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
